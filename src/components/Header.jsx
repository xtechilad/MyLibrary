import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
    return (
        <header className='py-5 px-2 2xl:px-44 xl:px-20 text-white bg-[#534340] flex'>
            <a href="https://github.com/xtechilad/mylibrary" target="#">
                <h1 className='font-extralight text-[1.7rem] ml-4 xl:ml-0 overflow-hidden'>MyLibrary</h1>
            </a>

            <button id='addButton' className='ml-auto mr-4 xl:mr-0 bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded hidden sm:block' onClick={props.showForm}>Add a Book</button>
            <button className='ml-auto mr-4 text-black font-bold rounded-full visible sm:hidden' onClick={() => {props.showForm(); props.rotate()}}>
                <FontAwesomeIcon style={props.animation} icon={faCirclePlus} className='text-white hover:text-gray-100 bg-black rounded-full h-10 w-auto' />
            </button>
        </header>
    );
}
