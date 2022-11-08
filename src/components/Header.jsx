import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../config/firebase';

export default function Header(props) {
    const [user] = useAuthState(auth);

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
    };

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <header className='py-5 px-2 2xl:px-44 xl:px-20 text-white bg-[#534340] flex'>
            <a href="https://github.com/xtechilad/mylibrary" target="_blank" rel='noreferrer'>
                <h1 className='font-extralight text-[1.7rem] ml-4 xl:ml-0 overflow-hidden'>MyLibrary</h1>
            </a>

            {user ?
                <>
                    <button id='HeaderButton' className='ml-auto mr-8 text-white font-bold rounded hidden sm:block' onClick={signUserOut}>Logout</button>
                    <button id='HeaderButton' className='mr-4 py-2 px-4 bg-white hover:bg-gray-100 text-black font-bold rounded hidden sm:block' onClick={props.showForm}>Add a Book</button>
                    <button className='ml-auto mr-4 text-black font-bold rounded-full visible sm:hidden' onClick={() => {props.showForm(); props.rotate()}}>
                        <FontAwesomeIcon style={props.animation} icon={faCirclePlus} className='text-white hover:text-gray-100 bg-black rounded-full h-10 w-auto' />
                    </button>
                    <img src={user?.photoURL} className='mr-4 xl:mr-0 text-black font-bold h-[40px] rounded-full' alt='profile page' />
                </> : 
                <button id='HeaderButton' className='ml-auto mr-4 xl:mr-0 bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded' onClick={signIn}>Login</button>
            }
        </header>
    );
}
