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
console.log(`profile.ts`);
class Profile extends Page {
    constructor(main) {
        super(main);
        this.setup = () => __awaiter(this, void 0, void 0, function* () {
            /* saab kätte profiili html */
            const html = yield Helper.getHTML(`Component/Profile/profile.html`);
            const template = html.getElementById(`profile`);
            if (template) {
                /* Laadida andmed alla */
                this.profileData = yield Helper.fetchContent(`Data/profile.json`);
                /* Poogime templateist sisu */
                this.content = template.content;
            }
            /* ettevalmistab tekstid, pildid ja listid */
            this.addTextAndImage();
            this.addContacts();
            this.addXP();
            this.addEducation();
            /* kui kõik on valmis siis avalikustab sisu
            enne muidugi tühjendab lehte */
            if (this.content) {
                this.main.innerHTML = ``;
                this.main.appendChild(this.content);
            }
        });
        this.addTextAndImage = () => {
            if (this.content && this.profileData) {
                const firstEl = this.content.querySelector(`[itemprop="givenName"]`);
                const lastEl = this.content.querySelector(`[itemprop="familyName"]`);
                const imageEl = this.content.querySelector(`[itemprop="image"]`);
                const descEl = this.content.querySelector(`[itemprop="description"]`);
                const descContEl = this.content.querySelector(`.desc-continue`);
                if (firstEl && lastEl && imageEl && descEl && descContEl) {
                    firstEl.innerHTML = this.profileData.name.first;
                    lastEl.innerHTML = this.profileData.name.last;
                    imageEl.src = this.profileData.image.src;
                    imageEl.alt = this.profileData.image.alt;
                    descEl.innerHTML = this.profileData.description;
                    descContEl.innerHTML = this.profileData.descContinue;
                }
            }
        };
        this.addContacts = () => {
            if (this.content && this.profileData) {
                /* leiab vajalikud viited htmlis */
                const listEl = this.content.querySelector(`#contact-list`);
                const itemEl = this.content.querySelector(`#contact-item`);
                if (listEl && itemEl) {
                    /* loob fragmendi, et koguda kõike elemendid omavahel kokku
                    enne kui poogib nad suurema htmli külge */
                    const list = document.createDocumentFragment();
                    this.profileData.contacts.forEach((value) => {
                        /* kopeerib saadud elementi, ilma seleta lõigatakse element välja */
                        const node = document.importNode(itemEl.content, true);
                        /* määratakse kuhu andmed panna */
                        const span = node.querySelector(`span`);
                        const a = node.querySelector(`a`);
                        if (span && a) {
                            span.innerHTML = value.name;
                            a.innerHTML = value.content;
                            a.href = value.href;
                            /* kui andmed ei eksisteeri igal elemendil */
                            if (value.itemprop) {
                                a.setAttribute(`itemprop`, value.itemprop);
                            }
                        }
                        /* fragmenti lisamise punkt */
                        list.appendChild(node);
                    });
                    /* fragmendi panemine nimekirja sisse*/
                    listEl.appendChild(list);
                }
            }
        };
        this.addXP = () => {
            if (this.content && this.profileData) {
                /* leiab vajalikud viited htmlis */
                const listEl = this.content.querySelector(`#xp-list`);
                const itemEl = this.content.querySelector(`#xp-item`);
                if (listEl && itemEl) {
                    /* loob fragmendi, et koguda kõike elemendid omavahel kokku
                    enne kui poogib nad suurema htmli külge */
                    const list = document.createDocumentFragment();
                    this.profileData.xp.forEach((value) => {
                        /* kopeerib saadud elementi, ilma seleta lõigatakse element välja */
                        const node = document.importNode(itemEl.content, true);
                        /* määratakse kuhu andmed panna */
                        const span = node.querySelector(`span`);
                        const progress = node.querySelector(`progress`);
                        if (span && progress) {
                            span.innerHTML = value.name;
                            progress.innerHTML = value.level.toString();
                            progress.value = value.level;
                        }
                        /* fragmenti lisamise punkt */
                        list.appendChild(node);
                    });
                    /* fragmendi panemine nimekirja sisse*/
                    listEl.appendChild(list);
                }
            }
        };
        this.addEducation = () => {
            if (this.content && this.profileData) {
                /* leiab vajalikud viited htmlis */
                const listEl = this.content.querySelector(`#edu-list`);
                const itemEl = this.content.querySelector(`#edu-item`);
                if (listEl && itemEl) {
                    /* loob fragmendi, et koguda kõike elemendid omavahel kokku
                    enne kui poogib nad suurema htmli külge */
                    const list = document.createDocumentFragment();
                    this.profileData.education.forEach((value) => {
                        /* kopeerib saadud elementi, ilma seleta lõigatakse element välja */
                        const node = document.importNode(itemEl.content, true);
                        /* määratakse kuhu andmed panna */
                        const h4 = node.querySelector(`h4`);
                        const span = node.querySelector(`span`);
                        const small = node.querySelector(`small`);
                        if (h4 && span && small) {
                            h4.innerHTML = value.school;
                            span.innerHTML = value.title;
                            small.innerHTML = value.year.toString();
                        }
                        /* fragmendi lisamise punkt */
                        list.appendChild(node);
                    });
                    /* fragmendi panemine nimekirja sisse*/
                    listEl.appendChild(list);
                }
                export { Profile };
            }
        };
        /* kutsub asünkroonset funktsiooni, kus asub ettevalmistus */
        this.setup();
    }
}
//# sourceMappingURL=profile.js.map