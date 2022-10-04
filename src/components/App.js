import React, { useState } from 'react';
import Book from './Book';
import Header from './Header';
import SearchBar from './SearchBar';
import AddBook from './AddBook';

export default function App() {
    const [books, setBooks] = useState([]);
    const [inputText, setInputText] = useState(null);
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
            alert("Enter enough details to add a book!");
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

    function deleteBook(id) {
        setBooks(prevBooks => {
            return prevBooks.filter((bookItem, index) => {
                return index !== id;
            });
        });
    }

    function setSearchTerm(event) {
        setInputText(event.target.value);
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

            <SearchBar 
                handleChange={setSearchTerm}
                inputvalue={inputText}
            />

            <div className='2xl:mx-24 xl:px-16 px-2 mt-12'>
                {books.map((aBook, index) => {
                    return (
                        <Book 
                            key={index}
                            id={index}
                            nameOfBook={aBook.title}
                            authorOfBook={"~ " + aBook.author}
                            imgURL={aBook.imgURL}
                            onDelete={deleteBook}
                        />
                    );
                })}
            </div>
        </div>
    );
}
