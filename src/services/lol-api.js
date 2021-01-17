// Variables
const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/';

// Functions

// Retrieves Champions from API
function getChampions() {
    return fetch(BASE_URL + 'champion.json')
    .then(res => res.json());
}

// Retrieves a Single Champion from API
function getSingleChampion(championName) {
    return fetch(BASE_URL + 'champion/' + championName + '.json')
    .then(res => res.json());
}

// Export Functions

export {
    getChampions,
    getSingleChampion
}