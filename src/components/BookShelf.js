
import { useState } from "react";
import BookItem from "./BookItem";

function Bookshelf({bookShelfTilte,booksInShelf,updateShelf}) {


return (

        <div key={Bookshelf.id} className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTilte}</h2>
            <div className="bookshelf-books">
                        <ol className="books-grid">
                    
            {
                booksInShelf.map(book=>{
                    return(
                            <li key={book.id}>
                                <BookItem  bookItem={book} onChangeShelf={updateShelf} />
                            </li>
                    )
                })
            }

                </ol>
            </div>   
        </div>
                        
                        
                        
);
}

export default Bookshelf;
