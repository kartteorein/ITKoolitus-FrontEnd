console.log(`page.ts`);
/* Page on klass, mis toimib virtuaalse sisu pakkujana,
mis aksepteerib sisuks kõki kes teda pärivad. */
class Page {
    constructor(main) {
        this.bind = () => {
            /* add listeners */
        };
        this.unbind = () => {
            /* add listeners */
        };
        this.main = main;
        this.bind();
    }
}
export { Page };
//# sourceMappingURL=page.js.map