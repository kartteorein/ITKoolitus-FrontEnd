import { Page } from "../../Scripts/page.js";
/* Antud fail vastutab privaatsuse lehe loomise eest */
console.log(`pagenotfound.ts`);
/* Lehe sisu tüüp määratakse extends Page abil */
class PageNotFound extends Page {
    /* Igal klassil on konstruktor mida kutsutakse klassi loomisel esimesena */
    constructor(main) {
        super(main);
        this.main.innerHTML = `<h1>Page not found!</h1>`;
    }
}
/* eksportida tuleb elemente, mida soovite pärast importida teistest failidest sisse */
export { PageNotFound };
//# sourceMappingURL=pagenotfound.js.map
//# sourceMappingURL=pageNotFound.js.map