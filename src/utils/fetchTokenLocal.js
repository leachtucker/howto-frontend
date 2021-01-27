// Fetches token from localstorage
function fetchTokenLocal() {
    const token = localStorage.getItem('token');
    return token;
}

export default fetchTokenLocal;