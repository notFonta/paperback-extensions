import {
  ContentRating,
  SourceInfo,
  Manga,
  Chapter,
  ChapterDetails,
  SearchRequest,
  PagedResults,
  MangaUpdates,
  HomeSection,
  HomeSectionType,
} from "paperback-extensions-common";


import { BaseTemplate } from "../BaseTemplate";

import {
  BASE_URL,
  parseHomepage,
  parseFullMangaList,
  parseMangaDetails,
  parseLastUpdate,
  parseChapterList,
  parseChapterDetails,
  parsedSearchResult
} from "./parser";
import { isLastPage } from "./parser/search";

export const MangaWorldInfo: SourceInfo = {
  version: "1.0.1",
  name: "MangaWorld",
  icon: "icon.png",
  description: "Extension that pulls manga from MangaWorld.io",
  author: "Fonta",
  language: "it",
  websiteBaseURL: BASE_URL,
  contentRating: ContentRating.MATURE,
};

export class MangaWorld extends BaseTemplate {

  baseUrl = BASE_URL;

  async getMangaDetails(mangaId: string): Promise<Manga> {
    console.log(`[getMangaDetails] start: ${mangaId}`);
    const data = await this.request(`/manga/${mangaId}`);
    console.log("[getMangaDetails] parsing page");
    const result = parseMangaDetails(data, mangaId);
    console.log("[getMangaDetails] returning results");
    return result;
  }

  async getChapters(mangaId: string): Promise<Chapter[]> {
    console.log(`[getChapters] start: ${mangaId}`);
    const data = await this.request(`/manga/${mangaId}`);
    console.log("[getChapters] parsing page");
    const results = parseChapterList(data, mangaId);
    console.log("[getChapters] returning results");
    return results;
  }
  async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
    console.log(`[getChapterDetails] start: ${mangaId} | ${chapterId}`);
    const data = await this.request(`/manga/${mangaId}/read/${chapterId}?style=list`);
    console.log("[getChapterDetails] parsing page");
    const results = parseChapterDetails(data, mangaId, chapterId);
    console.log("[getChapterDetails] returning results");
    return results;
  }

  async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
    console.log(`[getSearchResults] start: ${query}`);
    let page: number = metadata?.page ?? 1
    console.log(`[metadata]: ${metadata?.page}`);
    const data = await this.request(`/archive?keyword=${query.title}&page=${page}`);

    const result = parsedSearchResult(data);
    let mData = undefined
    if(!isLastPage(data,page)){
      mData = {page: (page + 1)}
    }
    console.log(`[result]: ${result}`);
    console.log(`[nLastPage]: ${page}`);
    console.log(`[mdata]: ${mData?.page}`);
    return createPagedResults({
        results: result,
        metadata: mData
    })
  }

  async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
    console.log("[getSearchResults] start");
    const data = await this.request("/archive?sort=most_read");
    const sectionMostRead = createHomeSection({ id: 'most_read', title: 'I più letti', type: HomeSectionType.singleRowLarge, view_more: false });
    sectionCallback(sectionMostRead);
    console.log("[getSearchResults] parsing home page");
    const result = parseHomepage(data);
    sectionMostRead.items = result;
    sectionCallback(sectionMostRead);
  }

}
