import "../App.css";
import { useState, useEffect } from "react";
import BookShelfManager from "./BookShelfManager";
import * as BooksAPI from "../BooksAPI";

function HomePage() {
//const [showSearchPage, setShowSearchpage] = useState(false);


const [Books, setBooks] = useState([]);

console.log(Books);

useEffect(() => {
    const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
    };

    getBooks();
}, []);

const updateShelf = (newBook,book,shelf) => {
    
    BooksAPI.update(book,shelf);
    
    const updatedBooks = Books.filter((bookItem)=>
        bookItem.id !==book.id
    ) 

    setBooks(updatedBooks.concat(newBook));

};

const BookShelves = [{
    id: 1,
    title: "Currently Reading",
    name:"currentlyReading"
},
{
    id: 2,
    title: "Want To Read",
    name:"wantToRead"
},
{
    id: 3,
    title: "Read",
    name:"read"
    
},

]

return (
    
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div> 
            <BookShelfManager BookShelves={BookShelves} BookData={Books} updateShelf={updateShelf} />
        
        </div>
    
);
}

export default HomePage;
