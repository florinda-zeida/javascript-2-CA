import { getFavoritelist } from "./favorits/favoritFunction.js";
import clearItem from "./favorits/clearItem.js";
import displayMessage from "./components/displayMessage.js";

const favoriteList = getFavoritelist();

clearItem();

if(favoriteList.length === 0){
  displayMessage("warning", "No books in favorite list", ".books-container");
}


const container = document.querySelector(".books-container");

favoriteList.forEach(function(book){
    container.innerHTML += `<div class="book">
                            <i class="fa fa-heart"></i>
                            <h2>${book.title}</h2>
                            <h3><span>Author:</span>${book.author}</h3>
                            <p>${book.summary}</p>
                        </div>`;
});

