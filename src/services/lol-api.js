const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json';

// functions

export function getChampions() {
    return fetch(BASE_URL)
    .then(res => res.json());
}