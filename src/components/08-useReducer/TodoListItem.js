import React from "react";

export const TodoListItem = ({todo, index, handlerDelete, handlerToggle}) => {
    return (
        <li key={todo.id} className="list-group-item">
            <p
                className={`${todo.done && "complete"}`}
                onClick={() => handlerToggle(todo.id)}
            >
                {index + 1}. {todo.desc}
            </p>
            <button className="btn btn-danger" onClick={() => handlerDelete(todo.id)}>
                Borrar
            </button>
        </li>
    );
};
