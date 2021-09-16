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
import { nLastPage } from "./parser/search";

export const MangaWorldInfo: SourceInfo = {
  version: "1.0.0",
  name: "MangaWorld",
  icon: "icon.png",
  description: "Extension that pulls manga from MangaWorld.io",
  author: "Fonta",
  language: "it",
  websiteBaseURL: BASE_URL,
  contentRating: ContentRating.ADULT,
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
    const data = await this.request(`/manga/${mangaId}/read/${chapterId}`);
    console.log("[getChapterDetails] parsing page");
    const results = parseChapterDetails(data, mangaId, chapterId);
    console.log("[getChapterDetails] returning results");
    return results;
  }

  async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
    console.log(`[getSearchResults] start: ${query}`);
    let page: number = metadata?.page ?? 1
    const data = await this.request(`/archive?keyword=${query.title}`);

    const result = parsedSearchResult(data);
    const numberLastPage = Number(nLastPage(data));
    console.log(`[numberLastPage]: ${numberLastPage}`);
    let mData = undefined
    if(numberLastPage > page){
      mData = {page: (page + 1)}
    }
    console.log(`[result]: ${result}`);
    console.log(`[nLastPage]: ${page}`);
    return createPagedResults({
        results: result,
        metadata: mData
    })
  }

}
