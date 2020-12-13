import { getFavoritelist, saveFavoritelist } from "../utiliti/favoritFunction.js";

export default function favoritToggle(){

const  favoriteIcon = document.querySelectorAll(".book i");
  favoriteIcon.forEach(function(heart){
    heart.addEventListener("click", handClick);
  });

  function handClick(){
    this.classList.toggle("far");
    this.classList.toggle("fa");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const author = this.dataset.author;
    const summary = this.dataset.summary;

    const curentFavoriteList = getFavoritelist();

    const book = curentFavoriteList.find(function(favoriteBook){
      if (favoriteBook.id === id){
        return true;
      }

    });

    if(!book){
      const newFavoriteList = {id: id, title: title, author: author, summary: summary};
      curentFavoriteList.push(newFavoriteList);
      saveFavoritelist(curentFavoriteList);
    }

    else {
      const updateFavoriteList = curentFavoriteList.filter(function(book){
        if(book.id !== id){
          return true;
        }
      })

      saveFavoritelist(updateFavoriteList);
     
    }
  
  }
  }