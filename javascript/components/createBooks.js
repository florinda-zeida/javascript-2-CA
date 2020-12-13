
import displayMessage from "./displayMessage.js";
import { getFavoritelist} from "../utiliti/favoritFunction.js";
import favoritToggle from "../utiliti/favoritToggle.js"


export default function createBooks(books) {
  const container = document.querySelector(".books-container");

  container.innerHTML = "";

  if (books.length === 0) {
    displayMessage("warning", "No books found", ".books-container");
}

const curentFavoriteList = getFavoritelist();
books.forEach(function(book){
  let cssClass = "far";

  const inHeart = curentFavoriteList.find(function(item){
    return parseInt(item.id) === book.id;
  });
  console.log(inHeart);

  if(inHeart !== undefined) {
    cssClass ="fa";
  }
    container.innerHTML +=  `<div class="book">
    <i class="${cssClass} fa-heart" data-id="${book.id}" data-title="${book.title}" data-author="${book.author}" data-summary="${book.summary}"></i>
    <h2>${book.title}</h2>
    <h3><span>Author:</span>${book.author}</h3>
    <p>${book.summary}</p> 
</div>`;

  });

  favoritToggle();
}