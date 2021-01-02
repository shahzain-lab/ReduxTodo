import React from 'react'

export const TodoItems = () => {
    return (
        <div className="row mx-3 align-items-center">
         <h3>#1</h3>
         <div className="col">
         <h3>Title</h3>
         </div>
         <button className="btn btn-success px-3"> Edit</button>
         <button className="btn btn-danger m-2">Delete</button>
        </div>
    )
}
