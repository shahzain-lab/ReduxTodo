
import {ADD_TODO, DELETE_TODO} from './Action'
import { todos } from './State';


export const Reducer =(state:any = todos,action:any) => {
   let newTodo;
    switch(action.type){
       case ADD_TODO:
           newTodo = [...state]
           newTodo.push(action.payload)
           return newTodo
           case DELETE_TODO:
                newTodo = [...state];
               newTodo = newTodo.filter((todo:any) => todo.id != action.payload) 
               return newTodo;
                       
   }
   return state
}