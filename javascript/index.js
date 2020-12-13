import createBooks from "./components/createBooks.js";
import searchBooks from "./components/searchBooks.js";
import displayMessage from "./components/displayMessage.js";
import {booksUrl} from "./components/api.js";

(async function () {
  
  try {
      const response = await fetch(booksUrl);
      const results = await response.json ();

      console.log (results );
      const bookItem = results;
      createBooks(bookItem);
      searchBooks(bookItem);
      
  } catch (error) {
      console.log(error);
      displayMessage("error", error, ".books-container");
  }

})();



