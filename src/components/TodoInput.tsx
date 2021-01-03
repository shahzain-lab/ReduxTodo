import React from 'react'
import { useState } from 'react'
import { addTodo } from '../redux/Action';
///
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

export const TodoInput = () => {
    const [name,setName] = useState<any>();
   let dispatch = useDispatch();
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
                 onClick ={() => {
                   dispatch( addTodo({
                    id: uuid(),
                    name: name
                }))
                   setName(''); 
                }
                }
                 >Add</button>
            </div>
        </div>
    )
}
