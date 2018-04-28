const TokenKey = 'adminCAC-token'

export function getToken() {
    const info = window.localStorage.getItem(TokenKey);
    return info == null ? null : JSON.parse(info);
}

export function setToken(token) {
    window.localStorage.setItem(TokenKey, token);
}

export function removeToken() {
    window.localStorage.removeItem(TokenKey);
}