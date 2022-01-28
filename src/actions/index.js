export const addToDo = (data) => {
    const generateRandomNumber = new Date().getTime().toString()+(Math.floor(Math.random()*100000));
    return {
        type: "ADD_TODO",
        payload: {
            id: generateRandomNumber,
            isCompleted: false,
            data: data
        }
    }
}

export const updateTodo = (isCompleted, id) => {
    return {
        type: "UPDATE_TODO",
        isCompleted,
        id
    }
}

export const deleteToDo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    }
}

export const setListType = (listType) => {
    return {
        type: "SET_LIST_TYPE",
        listType: listType
    }
}
