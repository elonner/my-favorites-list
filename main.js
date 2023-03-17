// add links to the pages

let movies = document.createElement("a");
movies.href = "movies.html";
movies.textContent = "My Favorite Movies";
movies.style.display = 'block';

let books = document.createElement("a");
books.href = "books.html";
books.textContent = "My Favorite Books";
books.style.display = 'block';

let closet = document.createElement("a");
closet.href = "closet.html";
closet.textContent = "Stuff in my Closet";
closet.style.display = 'block';

const movieForm = document.getElementById('movieForm');
const bookForm = document.getElementById('bookForm');
const closetForm = document.getElementById('closetForm');

const movieList = document.querySelectorAll('#favMovies')[0];
const bookList = document.querySelectorAll('#favBooks')[0];
const closetList = document.querySelectorAll('#closetStuff')[0];

const clearMovies = document.querySelectorAll('#clearMovies')[0];
const clearBooks = document.querySelectorAll('#clearBooks')[0];
const clearCloset = document.querySelectorAll('#clearCloset')[0];


//QUESTION: is there any way i dont have to write in the entire URL like this?
//movies
if (document.URL === 'file:///Users/elonner/Desktop/SEI-Stuff/unit-1/labs/my-favorites-list/movies.html') {
    movieForm.appendChild(books);
    movieForm.appendChild(closet);
    let movArray = [...movieList.children];

    // gather user input and add to list
    const inputs = [...document.querySelectorAll('input')];
    movieForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let newMovie = document.createElement("li");
        newMovie.textContent = inputs[0].value;
        let pos = inputs[1].value;
        let repeat = false;

        for (let i = 0; i < movArray.length; i++) {
            if (newMovie.innerText.toLowerCase() === movArray[i].innerText.toLowerCase() || newMovie.innerText.trim().length === 0) {repeat = true};
        }

        if ((!pos || pos > movieList.length) && !repeat) {
            movieList.appendChild(newMovie);
        }
        else if (!repeat) {
            let before = movieList.children[pos-1];
            movieList.insertBefore(newMovie, before);
        }

        movieForm.reset();
    }); 

    //reset list
    clearMovies.addEventListener('click', function(e) {
        for (let i = 0; i < movArray.length; i++) {
            movieList.remove(movArray[i]);
        }
    });
}
//books
else if (document.URL === 'file:///Users/elonner/Desktop/SEI-Stuff/unit-1/labs/my-favorites-list/books.html') {
    bookForm.appendChild(closet);
    bookForm.appendChild(movies);
    let bookArray = [...bookList.children];

    // gather user input and add to list
    const inputs = [...document.querySelectorAll('input')];
    bookForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let newBook = document.createElement("li");
        newBook.textContent = inputs[0].value;
        let pos = inputs[1].value;
        let repeat = false;

        for (let i = 0; i < bookArray.length; i++) {
            if (newBook.innerText.toLowerCase() === bookArray[i].innerText.toLowerCase() || newBook.innerText.trim().length === 0) {repeat = true};
        }

        if ((!pos || pos > bookList.length) && !repeat) {
            bookList.appendChild(newBook);
        }
        else if (!repeat) {
            let before = bookList.children[pos-1];
            bookList.insertBefore(newBook, before);
        }

        bookForm.reset();
    });

     //reset list
     clearBooks.addEventListener('click', function(e) {
        for (let i = 0; i < bookArray.length; i++) {
            bookList.remove(bookArray[i]);
        }
    });
} 
//closet
else if (document.URL === 'file:///Users/elonner/Desktop/SEI-Stuff/unit-1/labs/my-favorites-list/closet.html') {
    closetForm.appendChild(movies);
    closetForm.appendChild(books);
    let closetArray = [...closetList.children];

     // gather user input and add to list
     const inputs = [...document.querySelectorAll('input')];
     closetForm.addEventListener('submit', function (e) {
         e.preventDefault();
 
         let newItem = document.createElement("li");
         newItem.textContent = inputs[0].value;
         let repeat = false;
 
         for (let i = 0; i < closetArray.length; i++) {
             if (newItem.innerText.toLowerCase() === closetArray[i].innerText.toLowerCase() || newItem.innerText.trim().length === 0) {repeat = true};
         }
 
         if (!repeat) {
             closetList.appendChild(newItem);
         }
 
         closetForm.reset();
     });

    //reset list
    clearCloset.addEventListener('click', function(e) {
        for (let i = 0; i < closetArray.length; i++) {
            closetList.remove(closetArray[i]);
        }
    });
}
