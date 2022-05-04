import React from 'react'
import { useForm } from '../../hook/useForm';

export const TodoAdd = ({handlerAddTodo}) => {

    const [{description}, handlerInputChange, reset ] = useForm({
        description: ''
    });

    const handlerSubmit = (e) =>{
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };        

        handlerAddTodo(newTodo);
        reset();

    }


    return (
        <>
        <h4>Agregar TODO</h4>
        <hr />

        <form onSubmit={ handlerSubmit }>
            <input
                type='text'
                name='description'
                className='form-control'
                placeholder='Aprender ...'
                autoComplete='off'
                value={ description}
                onChange={handlerInputChange}
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-3'
            >
                Agregar
            </button>

        </form>
        </>
    )
}
