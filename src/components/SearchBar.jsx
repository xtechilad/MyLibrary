import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
    return (
        <div className='relative pt-12 px-[1.5rem] xl:px-20 2xl:px-44'>
            <input 
                onChange={props.handleChange} 
                className='rounded-[4px] w-full h-12 p-4 z-0 outline-none' 
                placeholder='Search the Library' 
                value={props.inputValue}
            />
            <div className='absolute top-12 right-[1.5rem] xl:right-20 2xl:right-44 border-l-gray-400 border-l-2'>
                <button className='h-12 w-12' >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black' />
                </button>
            </div>
        </div>
    );
}