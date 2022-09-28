import React from 'react';

export default function Book(props) {
    return (
        <div className='w-[12.5rem] m-4 float-left'>
            <div className='bg-black relative'>
                <img src={props.imgURL} className='hover:opacity-20' alt={props.nameofBook} />
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
    )
}
