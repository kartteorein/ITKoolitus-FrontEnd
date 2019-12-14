import { Page } from "./page.js";
import { PageNotFound } from "../Component/PageNotFound/pagenotfound.js";
import { Privacy } from "../Component/Privacy/privacy.js";
import { Profile } from "../Component/Profile/profile.js";
/* importida saab ainult eksporditud objekte */
console.log(`main.ts`);

class Main {
    /* esimesena sa leiad menüüd ja sisu hoidja(main) */
    private readonly main = document.getElementById(`main`) as HTMLElement;
    private readonly header = document.getElementsByClassName(`main-nav`)[0];
    private readonly footer = document.getElementsByClassName(`footer-nav`)[0];
    private page?: Page;

    constructor() {
         /* määrad esimese kuvatava lehe */
         this.changeState(null);

         this.bind();
    }
    public readonly bind = () => {
    /* reageerida back ja forward nuppudele */
    addEventListener(`popstate`, (ev: PopStateEvent) => {
        this.changeState(ev.state, true);
    });
    /* ühendad nupuvajutused olekutega (lehtedega) */
    this.header.addEventListener(`click`, this.clicking /*.bind(this,)*/);
    this.footer.addEventListener(`click`, this.clicking);
    };
    private readonly clicking = (e: Event) => {
         /* kontrollid kas said ankru kätte */
         const target = e.target as HTMLAnchorElement | null;
         if (target) {
            /* ei lase lingil tavalist viisi toimida */
            e.preventDefault();
             /* määrad olekut lingi aadressi abil  */
             this.changeState(target.getAttribute(`href`));
        }
         /* katkestad javascripti sügavamat propageerimist */
         e.stopPropagation();
    }
         private readonly changeState = (state: string | null, doesPop = false) => {
         /* Kui olekut ei eksisteeri siis viib profiilile */
         if(!state) {
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
		} else if (state === `#!privacy`) {
			this.page = new Privacy(this.main);
		} else {
			this.page = new PageNotFound(this.main); //Page not found 404
        }
    };
}

/* veebilehe käivitamine */
const main = new Main();
main;
