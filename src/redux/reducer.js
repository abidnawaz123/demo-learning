const initialState = {
    todos: []
}
function todosReducer(state = initialState, action) {
    switch (action.type) {
        case "ADDTODO":
            return {
                todos: [...state.todos, action.payload]
            }
        case "DELETETODO":
            return {
                todos: [...state.todos.filter((item) => item !== action.payload)]
            }
        case "UPDATETASK":
            return {
                todos: [...state.todos.find((item) => {
                    if (item == action.payload.item) {
                        item[action.payload.index] = action.payload.newItem
                    }
                })]
            }
        default:
            return state;
    }
}
export default todosReducer;