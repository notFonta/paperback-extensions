import cheerio from "cheerio";
import { APIWrapper, SearchRequest } from "paperback-extensions-common";
import { MangaWorld } from "../MangaWorld/MangaWorld";
let wrapper: APIWrapper;
let source: MangaWorld;

beforeEach(() => {
  wrapper = new APIWrapper();
  source = new MangaWorld(cheerio);
});

 /* test("getMangaDetails", async () => {
  let result = await source.getMangaDetails("2173/asadora");
  expect(result.titles[0] == "Asadora");
}); */

/* test("getChapters", async () => {
  let result = await source.getChapters("1794");
}); */


/* test("getChapterDetails", async () => {
  let result = await source.getChapterDetails("1684/tokyo-revengers", "60c156351c8dbb7cee36bdaf");
}); */

test("getSearchResult", async () => {
  let query = <SearchRequest>{title : "as"};
  let result = await source.getSearchResults(query,1);

});

