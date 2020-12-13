import { getFavoritelist } from "../utiliti/favoritToggle.js";

export default function clearItem() {
    const clearBtn = document.querySelector("#clear-btn");

    clearBtn.addEventListener("click", clearFavorit);

    function clearFavorit() {
        if (confirm("Are you sure you want to delete all items?")) {
            // clear the localstorage
            localStorage.clear();
          
            getFavoritelist([]);
        }
    }
}