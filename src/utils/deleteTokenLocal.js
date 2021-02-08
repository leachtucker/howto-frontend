// Deletes auth token from local storage
function deleteTokenLocal() {
    localStorage.removeItem('token');
}

export default deleteTokenLocal;