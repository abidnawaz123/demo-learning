export const addTodo = (todoText) => ({
    type: "ADDTODO",
    payload: todoText
})

export const deleteTodo = (todoTextToDelete) => ({
    type: "DELETETODO",
    payload: todoTextToDelete
})
export const updateTodo = (item, index, newItem) => ({
    type: "UPDATETODO",
    payload: { item, index, newItem }
})