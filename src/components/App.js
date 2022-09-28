import React, { useState } from 'react';
import Book from './Book';
import Header from './Header';
import SearchBar from './SearchBar';
import AddBook from './AddBook';

export default function App() {
    const [books, setBooks] = useState([]);
    const [formCSS, setFormCSS] = useState({
        display: 'none'
    });

    function addBook(newBook) {
        if(newBook.title !== "" && newBook.author !== "" && newBook.imgURL !== "") {
            setBooks(prevBooks => {
                return [...prevBooks, newBook];
            });
            setFormCSS({
                display: 'none'
            });
        } else {
            alert("Book could not be added!");
        }
    }

    const formAppear = () => {
        if(formCSS.display === 'none') {
            setFormCSS({
                display: 'block'
            });
        } else {
            setFormCSS({
                display: 'none'
            });
        }
    }

    return (
        <div>
            <Header 
                showForm={formAppear}
            />

            <div id='addbook' className='mt-8' style={formCSS}>
                <AddBook 
                    onAdd={addBook}
                />
            </div>

            <SearchBar />

            <div className='2xl:mx-40 mt-12'>
                {books.map((aBook, index) => {
                    return (
                        <Book 
                            key={index}
                            id={index}
                            nameOfBook={aBook.title}
                            authorOfBook={"~ " + aBook.author}
                            imgURL={aBook.imgURL}
                        />
                    );
                })}
            </div>
        </div>
    );
}




    // function getChange(event) {
    //     for (let i = 0; i < Books.length; i++) {
    //         for(let j=0; j < Books[i].name[j].length; j++) {
    //             if(event.target.value === Books[i].name[j]) {
    //                 console.log(Books[i].name);
    //             }
    //         }
    //     }
    // }