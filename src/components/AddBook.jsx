// Import dependencies
import React, { useState } from 'react';

export default function AddBook(props) {
    // UseState Hook
    const [book, setBook] = useState({
        title: "",
        author: "",
        imgURL: ""
    });



    // Funtion to store input values of form
    function handleChange(event) {
        const {name, value} = event.target;

        setBook(prevBook => {
            return {
                ...prevBook,
                [name]: value
            };
        });
    }



    // Function to add book to 'books' collection on firebase
    function submitBook(event) {
        props.onAdd(book);
        setBook({
            title: "",
            author: "",
            imgURL: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className='sm:w-[23rem] w-60 sm:h-64 bg-white rounded mx-auto'>
                <input 
                    name="title"
                    className='sm:w-[22rem] w-56 h-12 border-2 m-2 p-2 rounded outline-none' 
                    placeholder='Book Title' 
                    value={book.title}
                    onChange={handleChange} 
                />
                <input 
                    name="author"
                    className='sm:w-[22rem] w-56 h-12 border-2 m-2 p-2 rounded outline-none' 
                    placeholder='Author' 
                    value={book.author}
                    onChange={handleChange} 
                />
                <input 
                    name="imgURL"
                    className='sm:w-[22rem] w-56 h-12 border-2 m-2 p-2 rounded outline-none' 
                    placeholder='Image URL' 
                    value={book.imgURL}
                    onChange={handleChange} 
                />
                <button 
                    className='sm:w-[22rem] w-56 h-12 m-2 rounded border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white font-semibold'
                    onClick={submitBook}
                >
                    Add Book
                </button>
            </form>
        </div>
    );
}
