import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo} from '../redux/Action';
import { useState } from 'react';

export const TodoItems = ({todo}:any) => {
    const dispatch = useDispatch();
    const [editAble , setEditAble] = useState(false);
    const [name , setName] = useState(todo.name);
    return (
        <div className="row mx-3 align-items-center">
         <h3>{todo.id.length > 1 ? todo.id[2] : todo.id}</h3>
         <div className="col">
         {editAble ?<input type="text" className="form-caption" value={name} onChange={((e:any) => setName(e.target.value))}/> :<h3>{todo.name}</h3>}
         
         </div>
    
         <button className="btn btn-danger m-2"onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    )
}
