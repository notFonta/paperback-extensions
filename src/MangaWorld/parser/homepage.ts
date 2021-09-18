import type { HomeSection, MangaTile } from "paperback-extensions-common";
import { parsedSearchResult } from ".";



export function parseHomepage($: cheerio.Root): MangaTile[] {
  return parsedSearchResult($);
}

export function parseFullMangaList($: cheerio.Root) {

}
