console.log(`page.ts`);
/* Page on klass, mis toimib virtuaalse sisu pakkujana,
mis aksepteerib sisuks kõki kes teda pärivad. */
class Page {
     /* main on viide elemendile kuhu me sisu topime */
     protected main: HTMLElement;
     constructor(main: HTMLElement) {
         this.main = main;
         this.bind();
     }
     public readonly bind = () => {
         /* add listeners */
     }
     public readonly unbind = () => {
        /* add listeners */
    }
}
export { Page };