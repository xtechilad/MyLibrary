// Import dependencies
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Book(props) {
    // UseState Hooks
    const [deleteIconCSS, setDeleteIconCSS] = useState({
        display: 'none'
    });

    const [imageCSS, setImageCSS] = useState({
        opacity: '100%'
    });



    // Function to handle delete button visibility
    const showDeleteButton = () => {
        if(deleteIconCSS.display === 'none') {
            setDeleteIconCSS({
                display: 'block'
            });
            setImageCSS({
                opacity: '70%'
            });
        } else {
            setDeleteIconCSS({
                display: 'none'
            });
            setImageCSS({
                opacity: '100%'
            });
        }
    }

    return (
        <div className='w-[12.5rem] sm:m-4 sm:float-left m-auto relative'>
            <div className='bg-black'>
                <img onClick={showDeleteButton} src={props.imgURL} style={imageCSS} alt={props.nameofBook} />
                <FontAwesomeIcon onClick={() => { props.onDelete(props.id) }} style={deleteIconCSS} icon={faCircleXmark} className='h-[2.5rem] hover:h-[2.8rem] w-[2.5rem] hover:w-[2.8rem] mt-1 rounded-full text-white bg-black absolute left-20 hover:left-[4.8rem] bottom-32 hover:bottom-[7.8rem]' />
            </div>
            <div className='mt-4'>
                <h2 className='text-lg text-white text-left'>
                    {props.nameOfBook}
                </h2>
                <h2 className='text-lg text-white text-right mt-2'>
                    {props.authorOfBook}
                </h2>
            </div>
        </div>
    );
}
