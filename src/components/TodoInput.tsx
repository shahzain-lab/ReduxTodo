import React from 'react'

export const TodoInput = () => {
    return (
        <div>
            <h3>Todo input</h3>
            <div className="row my-3 mx-5">
                <input type="text" className="col form-control"/>
                <button className="btn btn-primary mx-1 px3">Add</button>
            </div>
        </div>
    )
}
