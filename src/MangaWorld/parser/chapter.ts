import type { ChapterDetails } from "paperback-extensions-common";

export function parseChapterDetails(
  $: cheerio.Root,
  mangaId: string,
  chapterId: string,
): ChapterDetails {
  console.log(`[parseChapterDetails] start`);
  const pages: string[] = [];

  // let nPages = $('.page.custom-select').find('option').first().text();
  // nPages = nPages.split('/').pop() || nPages;
  

  // // $('script').each((idx, elem) => {
  // //   console.log(`INDEX: ${idx}`)
  // //   console.log(elem);
  // // });

  // let jsonText = $('script').slice(-1);
  // console.log(`JSON TEXT: ${jsonText}`)

  // // JSON.stringify(jsonText);
  // // console.log(jsonText);


  const baseImgUrl = $(".col-12.text-center.position-relative").find("img").attr('src') || "";
  const file_ext = baseImgUrl.split('.').slice(-1);
  const imageUrl = baseImgUrl.substring(0, baseImgUrl.length - 6);
  console.log(`baseImgUrl: ${baseImgUrl}`)
  // var nP: number = +nPages;
  for(const obj of $('.col-12.text-center.position-relative').find("img").toArray()) {
  let image = $(obj).attr("src") ?? "";
  pages.push(image);
  }
  // for (let i = 1; i <= nP; i++) {
  //   pages.push(imageUrl + `/${i}` + `.${file_ext}`)
  // }

  const info = {
    mangaId,
    id: chapterId,
    pages,
    longStrip: false,
  };
  console.log(`[parseChapterDetails] info: ${JSON.stringify(info)}`);

  console.log(`[parseChapterDetails] returning result`);
  return createChapterDetails(info);
}
