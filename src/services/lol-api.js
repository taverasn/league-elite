// Variables
const BASE_URL = 'https://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/';

// Functions

// Retrieves Champions from API
function getChampions() {
    return fetch(BASE_URL + 'champion.json')
    .then(res => res.json());
}

// Retrieves a Single Champion from API
function getSingleChampion(championId) {
    return fetch(BASE_URL + 'champion/' + championId + '.json')
    .then(res => res.json());
}

// Export Functions

export {
    getChampions,
    getSingleChampion
}