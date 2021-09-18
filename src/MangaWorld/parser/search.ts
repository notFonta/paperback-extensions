
import { children } from "cheerio/lib/api/traversing";
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
    console.log(`image: ${image}`);

  }
  return mangaTiles;
}

export function isLastPage($: cheerio.Root, page: number): boolean {
  let quantityResult = $('.search-quantity.col-6.col-md-4.col-lg-3.pt-3.pb-1.offset-md-8.offset-lg-6.d-flex.justify-content-end.align-items-end').text();
  let nMangainPage= $("div.entry").toArray().length;
  quantityResult = quantityResult.split(' ')[0];
  console.log(`quantityResult:${quantityResult}`);
  console.log(`nMangainPage:${nMangainPage}`);
  console.log(`page:${page}`);
  if(Number(quantityResult)> nMangainPage*page){
    console.log('not last page');
    return false;
  }
  else{
    console.log('is last page');
    return true;
  }
}


