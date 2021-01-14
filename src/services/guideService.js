import { getToken } from './tokenService';

const BASE_URL = 'http://localhost:3001/api/guides';

function fetchGuideData() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    }

    return fetch(BASE_URL, options).then(res => res.json());
};

function addGuideData(guide) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(guide)
        }

        return fetch(BASE_URL + '/create', options).then(res => res.json());
};


export {
    fetchGuideData,
    addGuideData
}