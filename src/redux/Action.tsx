//types
import {ActionTypes} from '../interface/types';


const DELETE_TODO = "DELETE_TODO";
const ADD_TODO = "ADD_TODO"
const UPDATE_TODO = "UPDATE_TODO"

//add todoes
export const addTodo =(todo:ActionTypes)=> {
  return{
      type: ADD_TODO,
      payload: todo
  }
}

//delete todoes

export function deleteTodo(todoId:ActionTypes){
    return{
        type: DELETE_TODO,
        payload: todoId
    }
}
///updated todo
export function updateTodo(todo:ActionTypes){
    return{
        type: UPDATE_TODO,
        payload: todo,
    }
}