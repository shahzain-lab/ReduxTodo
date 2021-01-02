import React from 'react'

export const TodoInput = () => {
    return (
        <div>
            <h3>Todo input</h3>
            <div className="row">
                <input type="text" className="form-control"/>
                <button className="btn btn-primary m-2">Add</button>
            </div>
        </div>
    )
}
