import React from 'react'
import { useState } from 'react'
import { addTodo } from '../redux/Action';

export const TodoInput = () => {
    const [name,setName] = useState();

    return (
        <div>
            <h3>Todo input</h3>
            <div className="row my-3 mx-5">
                <input 
                type="text" 
                value={name}
                onChange={(e:any) => setName(e.target.value) }
                className="col form-control"/>
                <button
                 className="btn btn-primary mx-1 px3"
                 onClick ={() => addTodo({
                     id: 34,
                     name: name
                 })}
                 >Add</button>
            </div>
        </div>
    )
}
