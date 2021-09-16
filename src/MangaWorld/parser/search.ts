
import type {MangaTile, Source } from "paperback-extensions-common";

export function parsedSearchResult($: cheerio.Root) : MangaTile[]{
  console.log(`[parsedSearchResult] start`);
  const mangaTiles: MangaTile[] = [];
  for(let obj of $('div.entry').toArray()) {
    let id_arr = $('a.thumb.position-relative', $(obj)).attr('href')?.split('/').slice(-2);
    let id = (id_arr?.join())?.replace(',','/');
    let title = $('a.thumb.position-relative', $(obj)).attr('title');
    let image = $('img', $(obj)).attr('src');
    mangaTiles.push(createMangaTile({
                id: id || "",
                title: createIconText({text: title || ""}),
                image: image || ""
            }))
    console.log(`id: ${id}`);
    console.log(`title: ${title}`);
    console.log(`title: ${image}`);
  }
  return mangaTiles;
}

export function nLastPage($: cheerio.Root): string {
  let nLastPage = $("li.page-item.last.disabled").text();
  return nLastPage;
}
