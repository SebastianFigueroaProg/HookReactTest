import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

import './useReducer.css';

const init = () => {
        
    return JSON.parse(localStorage.getItem('todos')) || [];   
    
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);    

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));    
    }, [todos])
    
    const handlerDelete = ( todoId )=>{
        
        const action = {
            type:'delete',
            payload: todoId
        }

        dispatch(action)                
    }

    const handlerToggle = (todoId) => {

        dispatch({
            type:'toggle',
            payload:todoId
        })
    }

    const handlerAdd = (newTodo) =>{
    
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }



    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className=' col-7'>
                    <TodoList
                        todos={todos}
                        handlerDelete={handlerDelete}
                        handlerToggle={handlerToggle}
                    />
                </div>

                <div className='col-5'>
                    <TodoAdd
                        handlerAddTodo={handlerAdd}
                    />
                </div>
            </div>



        </div>
    )
}
