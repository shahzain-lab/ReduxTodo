import {addTodo, deleteTodo, updateTodo} from './Action';
import {ActionTypes} from '../interface/types';
import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './Action'
import { todos } from './State';


export const Reducer =(state:any = todos,action:any) => {
   switch(action.type){
       case ADD_TODO:
           break;
           case DELETE_TODO:
               let newTodo = [...state];
               newTodo = newTodo.filter((todo:any) => todo.id != action.payload) 
               return newTodo;
               case UPDATE_TODO:
                   break;
                       
   }
   return state
}