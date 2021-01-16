import { getToken } from './tokenService';

const BASE_URL = 'http://localhost:3001/api/guides/';

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

        return fetch(BASE_URL, options).then(res => res.json());
};

function deleteGuideData(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    }

    return fetch(BASE_URL + id, options).then(res => res.json());
};

function editGuideData(id) {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    }

    return fetch(BASE_URL + id, options).then(res => res.json());
}

function updateGuideData(id, updatedGuide) {
    const options = {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedGuide)
    }

    return fetch(BASE_URL + id, options).then(res => res.json());
};


export {
    fetchGuideData,
    addGuideData,
    deleteGuideData,
    updateGuideData,
    editGuideData
}