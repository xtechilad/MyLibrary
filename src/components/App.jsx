// Import components
import Book from './Book';
import Header from './Header';
import SearchBar from './SearchBar';
import AddBook from './AddBook';

// Import dependencies
import React, { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

// Import from other files
import { auth, db } from '../config/firebase';

export default function App() {
    // UseState Hooks
    const [books, setBooks] = useState([]);

    const [degree, setDegree] = useState(0);

    const [formCSS, setFormCSS] = useState({
        display: 'none'
    });

    const [user] = useAuthState(auth);



    // Data
    const booksCollectionRef = collection(db, 'books');

    var rotation = {
        transform: "rotate(" + degree + "deg)",
        transition: "transform 0.4s ease"
    }



    // Function to handle button rotation
    function rotateButton() {
        if(degree === 0) {
            setDegree(45);
        } else {
            setDegree(0);
        }
    }



    // Funtion to handle visibility of Form
    function formAppear() {
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



    // Function to add new books to the list
    const addBook = async (newBook) => {
        if(newBook.title !== "" && newBook.author !== "" && newBook.imgURL !== "") {
            await addDoc(booksCollectionRef, {title: newBook.title, author: newBook.author, imgURL: newBook.imgURL});
            setFormCSS({
                display: 'none'
            });
            setDegree(0);
        } else {
            alert("Enter enough details to add a book!");
        }
    }



    // Function to delete a book
    const deleteBook = async (id) => {
        const bookDoc = doc(db, 'books', id);
        await deleteDoc(bookDoc);
    }



    // UseEffect Hooks
    useEffect(() => {
        const getBooks = async () => {
            const data = await getDocs(booksCollectionRef);
            setBooks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        }

        getBooks();
    }, [booksCollectionRef]);

    return (
        <div>

            {/* Header Component */}
            <Header 
                showForm={formAppear}
                rotate={rotateButton}
                animation={rotation}
            />



            {/* Invisible form to add Book */}
            <div className='mt-8' style={formCSS}>
                <AddBook 
                    onAdd={addBook}
                />
            </div>



            {/* Search Bar Component */}
            <SearchBar />



            {/* Area to display Books */}
            <div className='2xl:mx-24 xl:px-16 px-2 mt-12'>
                {books.length !== 0 && user ? 
                    books.map((aBook, index) => {
                        return (
                            <Book 
                                key={index}
                                id={aBook.id}
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
