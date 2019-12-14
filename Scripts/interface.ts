console.log(`interface.ts`);

/* Antud interfaceid on vajalikud JSON andmefailidele struktuuri andmiseks */
interface ProfileData {
    name: Name;
    image: Image;
    description: string;
    descContinue: string;
    /* [] näitavad, et tegu on massiiviga */
    contacts: Contact[];
    education: Education[];
    xp: XP[];
}
interface Name {
    first: string;
    last: string;
}
interface Image {
    src: string;
    alt: string;
}
interface Contact {
	name: string;
	/* Küsimärk näitab, et väärtust ei pruugi eksisteerida. */
	itemprop?: string;
	href: string;
	content: string;
}
interface Education {
    school: string;
    title:string;
    year: number;
}
interface XP {
    title: string;
    level: number;
}

export { ProfileData, Contact, Education, XP };





