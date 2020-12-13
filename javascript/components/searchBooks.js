
import createBooks from "./createBooks.js";
export default function searchBooks(books) {

  const search = document.querySelector("input.filter-books");
  search.onkeyup = function (event) {
   
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredBooks = books.filter(function (book) {
        if (book.author.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    });

    createBooks(filteredBooks);
     // console.log(filteredBooks);
   
};
}
