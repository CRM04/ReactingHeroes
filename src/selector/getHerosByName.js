import { heroes } from "../data/heroes"

export const getHerosByName = ( name ) => {
    if ( name === '') {
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter( h => h.superhero.toLocaleLowerCase().includes(name))
}