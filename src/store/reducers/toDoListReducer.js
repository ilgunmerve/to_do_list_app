const initialState = {
    toDoList: []
}

const reducer =(state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, toDoList: [...state.toDoList, action.toDoItem]}; 
           // return [...state.toDoList, action.toDoItem];
        case 'DELETE_TODO':
            return {...state, toDoList: state.toDoList.filter(listItem => listItem.itemId !== action.itemId)};
        default:
            return state;
    }
};
//Object.assign({}, state, {posts: action.posts})
export default reducer;
