const favoriteListKey = "favoritelist";

export function getFavoritelist() {
    const favoritelist = localStorage.getItem(favoriteListKey);

    if (favoritelist === null) {
        return [];
    }

    return JSON.parse(favoritelist);
}

export function saveFavoritelist(favoritelist) {
    localStorage.setItem(favoriteListKey, JSON.stringify(favoritelist));
}



