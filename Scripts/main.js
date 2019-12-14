import { PageNotFound } from "../Component/PageNotFound/pagenotfound.js";
import { Privacy } from "../Component/Privacy/privacy.js";
import { Profile } from "../Component/Profile/profile.js";
/* importida saab ainult eksporditud objekte */
console.log(`main.ts`);
class Main {
    constructor() {
        /* esimesena sa leiad menüüd ja sisu hoidja(main) */
        this.main = document.getElementById(`main`);
        this.header = document.getElementsByClassName(`main-nav`)[0];
        this.footer = document.getElementsByClassName(`footer-nav`)[0];
        this.bind = () => {
            /* reageerida back ja forward nuppudele */
            addEventListener(`popstate`, (ev) => {
                this.changeState(ev.state, true);
            });
            /* ühendad nupuvajutused olekutega (lehtedega) */
            this.header.addEventListener(`click`, this.clicking /*.bind(this,)*/);
            this.footer.addEventListener(`click`, this.clicking);
        };
        this.clicking = (e) => {
            /* kontrollid kas said ankru kätte */
            const target = e.target;
            if (target) {
                /* ei lase lingil tavalist viisi toimida */
                e.preventDefault();
                /* määrad olekut lingi aadressi abil  */
                this.changeState(target.getAttribute(`href`));
            }
            /* katkestad javascripti sügavamat propageerimist */
            e.stopPropagation();
        };
        this.changeState = (state, doesPop = false) => {
            /* Kui olekut ei eksisteeri siis viib profiilile */
            if (!state) {
                state = `#!profile`;
            }
            /* et pushstate ja popstate omavahel tsüklisse ei läheks */
            if (!doesPop) {
                history.pushState(state, ``, state);
            }
            /* kui leht eksisteerib, siis eemaldad evendid */
            if (this.page) {
                this.page.unbind();
            }
            /* oleku seostamine tegelike lehtedega (sisudega) */
            if (state === `#!profile`) {
                this.page = new Profile(this.main);
            }
            else if (state === `#!privacy`) {
                this.page = new Privacy(this.main);
            }
            else {
                this.page = new PageNotFound(this.main); //Page not found 404
            }
        };
        /* määrad esimese kuvatava lehe */
        this.changeState(null);
        this.bind();
    }
}
/* veebilehe käivitamine */
const main = new Main();
main;
//# sourceMappingURL=main.js.map