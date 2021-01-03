import React from 'react'
import { TodoItems } from './TodoItems'
import { useSelector } from 'react-redux'

export const TodoLists = () => {
    const todos = useSelector((state:any) => state)
    return (
        <div className="my-3">
               {
                   todos.map((todo:any) => {
                       return <TodoItems key={todo.id} todo={todo}/>
                 })
               }   
        </div>
    )
}
