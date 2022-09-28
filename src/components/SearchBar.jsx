import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
    return (
        <div className='relative px-4 md:pt-12 md:px-40 lg:px-44'>
            <input 
                className='rounded-[4px] w-full h-12 p-4 z-0 outline-none' 
                placeholder='Search the Library' 
                value={props.inputTextValue}
            />
            <div className='absolute top-0 right-4 md:top-12 md:right-40 lg:right-44 border-l-gray-400 border-l-2'>
                <button onClick={props.handleClick} className='h-12 w-12'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black' />
                </button>
            </div>
        </div>
    );
}