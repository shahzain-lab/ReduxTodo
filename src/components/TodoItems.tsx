import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo, addTodo } from '../redux/Action';

export const TodoItems = ({todo}:any) => {
    const dispatch = useDispatch();
    return (
        <div className="row mx-3 align-items-center">
         <h3>{todo.id.length > 1 ? todo.id[2] : todo.id}</h3>
         <div className="col">
         <h3>{todo.name}</h3>
         </div>
         <button className="btn btn-success px-3" > Edit</button>
         <button className="btn btn-danger m-2"onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    )
}
