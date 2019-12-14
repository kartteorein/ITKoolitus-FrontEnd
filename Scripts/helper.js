var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log(`helper.ts`);
/* Helper klass sisaldab varieeruvaid abistavaid tööriistu */
class Helper {
    /* Konstruktor jääb tühjaks, kuna antud klassist ei ole vaja luua
    isendeid (instance) ja kuna koosneb staatilistest funktsioonidest
    ja muutujatest
    Staatilised muutujad pääseb ligi läbi Helper.getHTML(),
    erinevalt isenditest (new Helper()), mis kasutas this.getHTML().*/
    constructor() {
        /**/
    }
}
/* Siin hoitakse salvestatud HTMLi failide sisu RAM mälus
Map lubab salvestada väärtusi (faili sisu) andes neile nimetusi.
andmestruktuur Map<nimetus(failinimi), väärtus(faili sisu)> */
Helper.cacheHTML = new Map();
/* Fetch API on üks viis kuidas saab laadida faili sisu JS/TSi sisse
kasutades HTTP(s) protokolli*/
Helper.fetchContent = (file, isJSON = true) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    try {
        response = yield fetch(file);
        const content = isJSON ? yield response.json() : yield response.text();
        return content;
    }
    catch (error) {
        error.response = response;
        throw error;
    }
});
/* HTML alla laadimisele lisaks siin ka salvestame seda muutujasse
ja muudame seda teksti formaadist dokumendi fragmendiks (HTMli üheks formaadiks)*/
Helper.getHTML = (name) => __awaiter(void 0, void 0, void 0, function* () {
    /* Kui ei ole salvestatud, laadi alla ja salvesta*/
    if (!Helper.cacheHTML.has(name)) {
        const content = yield Helper.fetchContent(name, false);
        Helper.cacheHTML.set(name, content);
    }
    /* Võta mälust html nime järgi */
    const tmp = Helper.cacheHTML.get(name);
    if (tmp) {
        /* Teeb ruumi HTMLi dokumenti */
        const range = document.createRange();
        /* Antud ruumis töödeldakse tekst HTMLiks (fragmendiks) */
        const fragment = range.createContextualFragment(tmp);
        /* Tagastab fragmendi */
        return fragment;
    }
    /* Kui pole midagi tagastada siis loo tühi html */
    return document.createDocumentFragment();
});
export { Helper };
//# sourceMappingURL=helper.js.map