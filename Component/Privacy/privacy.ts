import { Page } from "../../Scripts/page.js";
import { Helper } from "../../Scripts/helper.js";

/* Antud fail vastutab privaatsuse lehe loomise eest */
console.log(`privacy.ts`);
/* Lehe sisu tüüp määratakse extends Page abil */
class Privacy extends Page {
    /* Igal klassil on konstruktor mida kutsutakse klassi loomisel esimesena */
    constructor(main: HTMLElement) {
        super(main);
        this.setup();
    }
    private readonly setup = async () => {
         /* Laadime alla privaatsuse HTML faili */
         const html = const html = await Helper.getHTML(`Component/Privacy/privacy.html`);
         const template = html.getElementById(`privacy`);
         if (template) {
            /* Poogime templateist sisu */
            const content = (template as HTMLTemplateElement).content;
              /* Paigutame antud sisu main tagi sisse, mis ka kuvab seda  */
              this.main.innerHTML = ``;
              this.main.appendChild(content);
            
        }
    };
}
/* eksportida tuleb elemente, mida soovite pärast importida teistest failidest sisse */
export { Privacy };
