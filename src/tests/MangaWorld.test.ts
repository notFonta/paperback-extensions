import cheerio from "cheerio";
import { APIWrapper, SearchRequest } from "paperback-extensions-common";
import { MangaWorld } from "../MangaWorld/MangaWorld";
let wrapper: APIWrapper;
let source: MangaWorld;

beforeEach(() => {
  wrapper = new APIWrapper();
  source = new MangaWorld(cheerio);
});

/*  test("getMangaDetails", async () => {
  let result = await wrapper.getMangaDetails(source, "1241/chrono-crusade");
  expect(result.titles[0] == "Asadora");
}); */

/* test("getChapters", async () => {
  let result = await wrapper.getChapters(source,"1794");
});
 */

/* test("getChapterDetails", async () => {
  let result = await wrapper.getChapterDetails(source, "1684/tokyo-revengers", "60c156351c8dbb7cee36bdaf");
}); */

 test("getSearchResult", async () => {
  let query = <SearchRequest>{title : "tok"};
  let result = await wrapper.searchRequest(source,query,1);
});

/* test("getHomePage", async () => {
   const result = await wrapper.getHomePageSections(source);
}); */
