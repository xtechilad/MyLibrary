import React from 'react';

export default function Header(props) {
    return (
        <header className='
            py-5 
            px-0 
            2xl:px-44 
            xl:px-20
            text-white 
            bg-[#534340] flex'>
            <h1 className='font-extralight text-[1.7rem] ml-4 sm:ml-0 overflow-hidden'>MyLibrary</h1>

            <button className='ml-auto bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded invisible sm:visible' onClick={props.showForm}>Add a Book</button>
        </header>
    );
}

// Header light mode : #967E76
