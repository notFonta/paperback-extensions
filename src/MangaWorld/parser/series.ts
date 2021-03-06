import type { Manga, Chapter } from "paperback-extensions-common";
import { MangaStatus, LanguageCode } from "paperback-extensions-common";

function getStatus($: cheerio.Root): MangaStatus {
  const status = $('span.font-weight-bold:contains("Stato: ")').first().next().text().trim().toLowerCase().replace(/\s/g, "");
  console.log(`[getStatus] raw status: ${status}`);
  switch (status) {
    case "incorso":
      return MangaStatus.ONGOING;
    case "droppato":
      return MangaStatus.ABANDONED;
    case "finito":
      return MangaStatus.COMPLETED;
    case "inpausa":
      return MangaStatus.HIATUS;
    default:
      return MangaStatus.UNKNOWN;
  }
}

export function parseLastUpdate($: cheerio.Root): Date | undefined {
  console.log(`[parseLastUpdate] start`);

  const rawLastUpdate = $(".text-right.text-muted.chap-date").first().text().trim();
  console.log(`[parseLastUpdate] raw lastUpdate: ${rawLastUpdate}`);

  let formattedDate = "";

  let htmlDate = rawLastUpdate.split(' ');

  //start with year
  formattedDate += htmlDate[2] += "/";

  switch(htmlDate[1]){
    case "Gennaio":
      formattedDate += "01";
      break;

    case "Febbraio":
      formattedDate += "02";
      break;

    case "Marzo":
      formattedDate += "03";
    break;

    case "Aprile":
      formattedDate += "04";
      break;

    case "Maggio":
      formattedDate += "05";
      break;

    case "Giugno":
      formattedDate += "06";
      break;

    case "Luglio":
      formattedDate += "07";
      break;

    case "Agosto":
      formattedDate += "08";

      break;

    case "Settembre":
      formattedDate += "09";
      break;

    case "Ottobre":
      formattedDate += "10";
      break;

    case "Novembre":
      formattedDate += "11";
      break;

    case "Dicembre":
      formattedDate += "12";
      break;
  }

  formattedDate += "/" + htmlDate[0];
  console.log(formattedDate);
  const lastUpdate = new Date(formattedDate);
  console.log(`[parseLastUpdate] parsed lastUpdate: ${lastUpdate}`);

  if (isNaN(lastUpdate.getTime())) {
    console.error(`[parseLastUpdate] date is not valid!`);
    return undefined;
  }

  console.log(`[parseLastUpdate] done`);
  return lastUpdate;
}

export function parseMangaDetails($: cheerio.Root, mangaId: string): Manga {
  console.log(`[parseMangaDetails] start`);

  const title = $(".name.bigger").text().trim();
  console.log(title);
  const image = $("img.rounded").attr("src") || "";
  const author = $('span.font-weight-bold:contains("Autore: ")').next().text()
  const desc = $("div#noidungm").text().trim();
  const status = getStatus($);
  const lastUpdate = parseLastUpdate($);

  const info = {
    id: mangaId,
    titles: [title],
    image,
    author,
    desc,
    status,
    lastUpdate,
    langFlag: "it",
  };
  console.log(`[parseMangaDetails] info: ${JSON.stringify(info)}`);

  console.log(`[parseMangaDetails] returning result`);
  return createManga(info);
}

export function parseChapterList($: cheerio.Root, mangaId: string): Chapter[] {
  console.log(`[parseChapterList] start`);
  const chapters: Chapter[] = [];

  $(".chapter").map((i, chapter) => {
    console.log(`[parseChapterList] chapter start`);
    const title = $("span", chapter).text().trim();
    let id = $("a.chap", chapter).attr("href");
    id = (id?.split('/'))?.pop();
    let description = $(".chapter__subtitle", chapter).text().trim();
    if (/^".+"$/.test(description)) {
      description = description.slice(1, -1);
    }

    const info = {
      mangaId,
      id: id || "",
      chapNum: parseFloat(title.split(" ").slice(1).join(" ")),
      name: description ? `${title}: ${description}` : title,
      time: new Date($(".chap-date", chapter).text().trim()),
      langCode: LanguageCode.ITALIAN,
    };
    console.log(`[parseChapterList] info: ${JSON.stringify(info)}`);

    chapters.push(createChapter(info));
    console.log(`[parseChapterList] chapter done`);
  });

  console.log(`[parseChapterList] returning result`);
  return chapters;
}
