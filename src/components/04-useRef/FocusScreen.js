import React, { useRef } from 'react';

import './useRef.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handlerClick = () =>{
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />

            <button 
                className='btn btn-outline-primary mt-5'
                onClick={handlerClick}
                >
                Focus
            </button>

        </div>
    )
}
