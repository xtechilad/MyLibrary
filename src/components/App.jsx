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
    
    const [degree, setDegree] = useState(0);

    var rotation = {
        transform: "rotate(" + degree + "deg)",
        transition: "transform 0.4s ease"
    }

    function rotateButton() {
        if(degree === 0) {
            setDegree(45);
        } else {
            setDegree(0);
        }
    }

    function addBook(newBook) {
        if(newBook.title !== "" && newBook.author !== "" && newBook.imgURL !== "") {
            setBooks(prevBooks => {
                return [...prevBooks, newBook];
            });
            setFormCSS({
                display: 'none'
            });
            setDegree(0);
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
                rotate={rotateButton}
                animation={rotation}
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
                {books.length !== 0 ? 
                    books.map((aBook, index) => {
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
                    }) : 
                    <div className='text-center'>
                        <h3 className='font-bold text-2xl text-white'>There's Nothing here !</h3>
                    </div>
                }
            </div>
        </div>
    );
}
