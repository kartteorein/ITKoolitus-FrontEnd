var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Page } from "../../Scripts/page.js";
import { Helper } from "../../Scripts/helper.js";
/* Antud fail vastutab privaatsuse lehe loomise eest */
console.log(`privacy.ts`);
/* Lehe sisu tüüp määratakse extends Page abil */
class Privacy extends Page {
    /* Igal klassil on konstruktor mida kutsutakse klassi loomisel esimesena */
    constructor(main) {
        super(main);
        this.setup = () => __awaiter(this, void 0, void 0, function* () {
            /* Laadime alla privaatsuse HTML faili */
            const html = ;
            const html = yield Helper.getHTML(`Component/Privacy/privacy.html`);
            const template = html.getElementById(`privacy`);
            if (template) {
                /* Poogime templateist sisu */
                const content = template.content;
                /* Paigutame antud sisu main tagi sisse, mis ka kuvab seda  */
                this.main.innerHTML = ``;
                this.main.appendChild(content);
            }
        });
        this.setup();
    }
}
/* eksportida tuleb elemente, mida soovite pärast importida teistest failidest sisse */
export { Privacy };
//# sourceMappingURL=privacy.js.map