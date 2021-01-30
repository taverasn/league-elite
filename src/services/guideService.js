// Imports
import { getToken } from './tokenService';

// Variables
const GUIDES_BASE_URL = 'http://localhost:3001/api/guides/';
// const GUIDES_BASE_URL = 'https://league-elite-backend.herokuapp.com/api/guides/';

//Functions

// Returns All Guides from API
function fetchGuideData() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    }

    return fetch(GUIDES_BASE_URL, options).then(res => res.json());
};

// Sends New Guides to API
function addGuideData(guide) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(guide)
        }

        return fetch(GUIDES_BASE_URL, options).then(res => res.json());
};

// Deletes Guides by ID and Removes them from API
function deleteGuideData(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    }

    return fetch(GUIDES_BASE_URL + id, options).then(res => res.json());
};

// Returns a Single Guide
function editGuideData(id) {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    }

    return fetch(GUIDES_BASE_URL + id, options).then(res => res.json());
}

// Sends an Updated Guide to the API by ID
function updateGuideData(id, updatedGuide) {
    const options = {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedGuide)
    }

    return fetch(GUIDES_BASE_URL + id, options).then(res => res.json());
};

// Export Functions

export {
    fetchGuideData,
    addGuideData,
    deleteGuideData,
    updateGuideData,
    editGuideData
}