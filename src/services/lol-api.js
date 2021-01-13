const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/';

// functions

function getChampions() {
    return fetch(BASE_URL + 'champion.json')
    .then(res => res.json());
}


function getSingleChampion(championName) {
    return fetch(BASE_URL + 'champion/' + championName + '.json')
    .then(res => res.json());
}

export {
    getChampions,
    getSingleChampion
}