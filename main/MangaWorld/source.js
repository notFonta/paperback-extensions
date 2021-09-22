(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    getTags() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return (_a = this.getSearchTags) === null || _a === void 0 ? void 0 : _a.call(this);
        });
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    var _a;
    let time;
    let trimmed = Number(((_a = /\d*/.exec(timeAgo)) !== null && _a !== void 0 ? _a : [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":2,"./Tracker":3}],5:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);
__exportStar(require("./APIWrapper"), exports);

},{"./APIWrapper":1,"./base":4,"./models":47}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],7:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],8:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],9:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],10:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],11:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],12:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],13:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],14:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],15:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],16:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],17:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],18:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],19:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],20:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],21:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],22:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],23:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],24:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":9,"./Form":10,"./FormRow":11,"./Header":12,"./InputField":13,"./Label":14,"./Link":15,"./MultilineLabel":16,"./NavigationButton":17,"./OAuthButton":18,"./Section":19,"./Select":20,"./Stepper":21,"./Switch":22,"./WebViewButton":23}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],28:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],29:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],30:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],31:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],32:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],33:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],34:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],35:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],36:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],37:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],41:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],44:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],45:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],46:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);

},{"./Chapter":6,"./ChapterDetails":7,"./Constants":8,"./DynamicUI":24,"./HomeSection":25,"./Languages":26,"./Manga":27,"./MangaTile":28,"./MangaUpdate":29,"./PagedResults":30,"./RawData":31,"./RequestHeaders":32,"./RequestInterceptor":33,"./RequestManager":34,"./RequestObject":35,"./ResponseObject":36,"./SearchField":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTemplate = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
class BaseTemplate extends paperback_extensions_common_1.Source {
    constructor() {
        super(...arguments);
        this.requestManager = createRequestManager({
            requestsPerSecond: 5,
            requestTimeout: 10000,
        });
    }
    request(url) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[request] starts: ${url}`);
            const options = createRequestObject({
                method: "GET",
                url: `${this.baseUrl}${url}`,
            });
            const response = yield this.requestManager.schedule(options, 1);
            console.log(`[request] completed: ${url} | status=${response.status} length=${response.data.length}`);
            const data = this.cheerio.load(response.data);
            console.log(`[request] loaded: ${url}`);
            return data;
        });
    }
}
exports.BaseTemplate = BaseTemplate;

},{"paperback-extensions-common":5}],49:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaWorld = exports.MangaWorldInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const BaseTemplate_1 = require("../BaseTemplate");
const parser_1 = require("./parser");
const search_1 = require("./parser/search");
exports.MangaWorldInfo = {
    version: "1.0.1",
    name: "MangaWorld",
    icon: "icon.png",
    description: "Extension that pulls manga from MangaWorld.io",
    author: "Fonta",
    language: "it",
    websiteBaseURL: parser_1.BASE_URL,
    contentRating: paperback_extensions_common_1.ContentRating.MATURE,
};
class MangaWorld extends BaseTemplate_1.BaseTemplate {
    constructor() {
        super(...arguments);
        this.baseUrl = parser_1.BASE_URL;
    }
    getMangaDetails(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[getMangaDetails] start: ${mangaId}`);
            const data = yield this.request(`/manga/${mangaId}`);
            console.log("[getMangaDetails] parsing page");
            const result = (0, parser_1.parseMangaDetails)(data, mangaId);
            console.log("[getMangaDetails] returning results");
            return result;
        });
    }
    getChapters(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[getChapters] start: ${mangaId}`);
            const data = yield this.request(`/manga/${mangaId}`);
            console.log("[getChapters] parsing page");
            const results = (0, parser_1.parseChapterList)(data, mangaId);
            console.log("[getChapters] returning results");
            return results;
        });
    }
    getChapterDetails(mangaId, chapterId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[getChapterDetails] start: ${mangaId} | ${chapterId}`);
            const data = yield this.request(`/manga/${mangaId}/read/${chapterId}?style=list`);
            console.log("[getChapterDetails] parsing page");
            const results = (0, parser_1.parseChapterDetails)(data, mangaId, chapterId);
            console.log("[getChapterDetails] returning results");
            return results;
        });
    }
    getSearchResults(query, metadata) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[getSearchResults] start: ${query}`);
            let page = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.page) !== null && _a !== void 0 ? _a : 1;
            console.log(`[metadata]: ${metadata === null || metadata === void 0 ? void 0 : metadata.page}`);
            const data = yield this.request(`/archive?keyword=${query.title}&page=${page}`);
            const result = (0, parser_1.parsedSearchResult)(data);
            let mData = undefined;
            if (!(0, search_1.isLastPage)(data, page)) {
                mData = { page: (page + 1) };
            }
            console.log(`[result]: ${result}`);
            console.log(`[nLastPage]: ${page}`);
            console.log(`[mdata]: ${mData === null || mData === void 0 ? void 0 : mData.page}`);
            return createPagedResults({
                results: result,
                metadata: mData
            });
        });
    }
    getHomePageSections(sectionCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("[getSearchResults] start");
            const data = yield this.request("/archive?sort=most_read");
            const sectionMostRead = createHomeSection({ id: 'most_read', title: 'I più letti', type: paperback_extensions_common_1.HomeSectionType.singleRowLarge, view_more: false });
            sectionCallback(sectionMostRead);
            console.log("[getSearchResults] parsing home page");
            const result = (0, parser_1.parseHomepage)(data);
            sectionMostRead.items = result;
            sectionCallback(sectionMostRead);
        });
    }
}
exports.MangaWorld = MangaWorld;

},{"../BaseTemplate":48,"./parser":52,"./parser/search":53,"paperback-extensions-common":5}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseChapterDetails = void 0;
function parseChapterDetails($, mangaId, chapterId) {
    var _a;
    console.log(`[parseChapterDetails] start`);
    const pages = [];
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
    console.log(`baseImgUrl: ${baseImgUrl}`);
    // var nP: number = +nPages;
    for (const obj of $('.col-12.text-center.position-relative').find("img").toArray()) {
        let image = (_a = $(obj).attr("src")) !== null && _a !== void 0 ? _a : "";
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
exports.parseChapterDetails = parseChapterDetails;

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFullMangaList = exports.parseHomepage = void 0;
const _1 = require(".");
function parseHomepage($) {
    return (0, _1.parsedSearchResult)($);
}
exports.parseHomepage = parseHomepage;
function parseFullMangaList($) {
}
exports.parseFullMangaList = parseFullMangaList;

},{".":52}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_URL = exports.parsedSearchResult = exports.parseChapterDetails = exports.parseChapterList = exports.parseMangaDetails = exports.parseLastUpdate = exports.parseFullMangaList = exports.parseHomepage = void 0;
var homepage_1 = require("./homepage");
Object.defineProperty(exports, "parseHomepage", { enumerable: true, get: function () { return homepage_1.parseHomepage; } });
Object.defineProperty(exports, "parseFullMangaList", { enumerable: true, get: function () { return homepage_1.parseFullMangaList; } });
var series_1 = require("./series");
Object.defineProperty(exports, "parseLastUpdate", { enumerable: true, get: function () { return series_1.parseLastUpdate; } });
Object.defineProperty(exports, "parseMangaDetails", { enumerable: true, get: function () { return series_1.parseMangaDetails; } });
Object.defineProperty(exports, "parseChapterList", { enumerable: true, get: function () { return series_1.parseChapterList; } });
var chapter_1 = require("./chapter");
Object.defineProperty(exports, "parseChapterDetails", { enumerable: true, get: function () { return chapter_1.parseChapterDetails; } });
var search_1 = require("./search");
Object.defineProperty(exports, "parsedSearchResult", { enumerable: true, get: function () { return search_1.parsedSearchResult; } });
exports.BASE_URL = "https://www.mangaworld.io";

},{"./chapter":50,"./homepage":51,"./search":53,"./series":54}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLastPage = exports.parsedSearchResult = void 0;
function parsedSearchResult($) {
    var _a, _b;
    console.log(`[parsedSearchResult] start`);
    const mangaTiles = [];
    for (let obj of $('div.entry').toArray()) {
        let id_arr = (_a = $('a.thumb.position-relative', $(obj)).attr('href')) === null || _a === void 0 ? void 0 : _a.split('/').slice(-2);
        let id = (_b = (id_arr === null || id_arr === void 0 ? void 0 : id_arr.join())) === null || _b === void 0 ? void 0 : _b.replace(',', '/');
        let title = $('a.thumb.position-relative', $(obj)).attr('title');
        let image = $('img', $(obj)).attr('src');
        mangaTiles.push(createMangaTile({
            id: id || "",
            title: createIconText({ text: title || "" }),
            image: image || ""
        }));
        console.log(`id: ${id}`);
        console.log(`title: ${title}`);
        console.log(`image: ${image}`);
    }
    return mangaTiles;
}
exports.parsedSearchResult = parsedSearchResult;
function isLastPage($, page) {
    let quantityResult = $('.search-quantity.col-6.col-md-4.col-lg-3.pt-3.pb-1.offset-md-8.offset-lg-6.d-flex.justify-content-end.align-items-end').text();
    let nMangainPage = $("div.entry").toArray().length;
    quantityResult = quantityResult.split(' ')[0];
    console.log(`quantityResult:${quantityResult}`);
    console.log(`nMangainPage:${nMangainPage}`);
    console.log(`page:${page}`);
    if (Number(quantityResult) > nMangainPage * page) {
        console.log('not last page');
        return false;
    }
    else {
        console.log('is last page');
        return true;
    }
}
exports.isLastPage = isLastPage;

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseChapterList = exports.parseMangaDetails = exports.parseLastUpdate = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
function getStatus($) {
    const status = $('span.font-weight-bold:contains("Stato: ")').first().next().text().trim().toLowerCase().replace(/\s/g, "");
    console.log(`[getStatus] raw status: ${status}`);
    switch (status) {
        case "incorso":
            return paperback_extensions_common_1.MangaStatus.ONGOING;
        case "droppato":
            return paperback_extensions_common_1.MangaStatus.ABANDONED;
        case "finito":
            return paperback_extensions_common_1.MangaStatus.COMPLETED;
        case "inpausa":
            return paperback_extensions_common_1.MangaStatus.HIATUS;
        default:
            return paperback_extensions_common_1.MangaStatus.UNKNOWN;
    }
}
function parseLastUpdate($) {
    console.log(`[parseLastUpdate] start`);
    const rawLastUpdate = $(".text-right.text-muted.chap-date").first().text().trim();
    console.log(`[parseLastUpdate] raw lastUpdate: ${rawLastUpdate}`);
    let formattedDate = "";
    let htmlDate = rawLastUpdate.split(' ');
    //start with year
    formattedDate += htmlDate[2] += "/";
    switch (htmlDate[1]) {
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
exports.parseLastUpdate = parseLastUpdate;
function parseMangaDetails($, mangaId) {
    console.log(`[parseMangaDetails] start`);
    const title = $(".name.bigger").text().trim();
    console.log(title);
    const image = $("img.rounded").attr("src") || "";
    const author = $('span.font-weight-bold:contains("Autore: ")').next().text();
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
exports.parseMangaDetails = parseMangaDetails;
function parseChapterList($, mangaId) {
    console.log(`[parseChapterList] start`);
    const chapters = [];
    $(".chapter").map((i, chapter) => {
        var _a;
        console.log(`[parseChapterList] chapter start`);
        const title = $("span", chapter).text().trim();
        let id = $("a.chap", chapter).attr("href");
        id = (_a = (id === null || id === void 0 ? void 0 : id.split('/'))) === null || _a === void 0 ? void 0 : _a.pop();
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
            langCode: paperback_extensions_common_1.LanguageCode.ITALIAN,
        };
        console.log(`[parseChapterList] info: ${JSON.stringify(info)}`);
        chapters.push(createChapter(info));
        console.log(`[parseChapterList] chapter done`);
    });
    console.log(`[parseChapterList] returning result`);
    return chapters;
}
exports.parseChapterList = parseChapterList;

},{"paperback-extensions-common":5}]},{},[49])(49)
});
