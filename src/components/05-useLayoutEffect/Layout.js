import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hook/useFetch';
import { useCounter } from '../../hook/useCounter';
import './layout.css';


export const Layout = () => {

    const {counter, increment} = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {data} = useFetch(url);

    const{quote} = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({})

    
    useLayoutEffect(() => {
        
        setBoxSize(pTag.current.getBoundingClientRect());
        

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={pTag}
                >
                    {quote} </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            
            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente Quote
            </button>
                        
        </div>
    )
}
