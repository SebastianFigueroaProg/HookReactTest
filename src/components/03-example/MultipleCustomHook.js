import React from 'react';
import { useFetch } from '../../hook/useFetch';
import { useCounter } from '../../hook/useCounter';
import './fetch.css';


export const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {loading, data} = useFetch(url);

    const{author, quote} = !!data && data[0];
    
    

    return (
        <div>
            <h1>breakingbad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )
                :
                    (
                        <blockquote className='blockquote text-right'>
                        <p className='mb-2'> {quote} </p>
                        <footer className='blockquote-footer'> {author} </footer>
                        </blockquote>
                    )    
                
            }
            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente Quote
            </button>
                        
        </div>
    )
}
