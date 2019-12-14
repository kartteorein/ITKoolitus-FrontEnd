console.log(`helper.ts`);
/* Helper klass sisaldab varieeruvaid abistavaid tööriistu */
class Helper {
     /* Siin hoitakse salvestatud HTMLi failide sisu RAM mälus 
	Map lubab salvestada väärtusi (faili sisu) andes neile nimetusi.
    andmestruktuur Map<nimetus(failinimi), väärtus(faili sisu)> */
    private static cacheHTML = new Map<string, string>();

    /* Fetch API on üks viis kuidas saab laadida faili sisu JS/TSi sisse
    kasutades HTTP(s) protokolli*/
    public static fetchContent = async (file: string, isJSON = true) => {
        let response: Response | undefined;
        try {
            response = await fetch(file);
            const content = isJSON ? await response.json() : await response.text()
            return content;
        } catch (error) {
            error.response = response;
            throw error;
            
        }
    };  

    /* HTML alla laadimisele lisaks siin ka salvestame seda muutujasse 
    ja muudame seda teksti formaadist dokumendi fragmendiks (HTMli üheks formaadiks)*/
    public static getHTML = async (name: string) => {
        /* Kui ei ole salvestatud, laadi alla ja salvesta*/
        if (!Helper.cacheHTML.has(name)){
            const content = await Helper.fetchContent(name, false); 
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
    }

    /* Konstruktor jääb tühjaks, kuna antud klassist ei ole vaja luua 
	isendeid (instance) ja kuna koosneb staatilistest funktsioonidest 
	ja muutujatest 
	Staatilised muutujad pääseb ligi läbi Helper.getHTML(), 
	erinevalt isenditest (new Helper()), mis kasutas this.getHTML().*/
    constructor() {
        /**/
    }
}

export { Helper };