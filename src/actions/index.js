export const addToDo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            data: data
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id,
    }
}

export const removeToDo = () => {
    return {
        type: "REMOVE_TODO"
    }
}
