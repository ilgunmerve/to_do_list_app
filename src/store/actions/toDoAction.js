export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

let nextTodoId = 0;
//export const
export const addToDo = todoText => ({
    type: ADD_TODO,
    toDoItem: {itemId: nextTodoId++ , text: todoText} 
})

export const deleteTodo = itemId => ({
    type: DELETE_TODO,
    itemId
})