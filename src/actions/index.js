export const addToDo = (data) => {

    const generateRandomNumber = new Date().getTime().toString()+(Math.floor(Math.random()*100000));

    return {
        type: "ADD_TODO",
        payload: {
            id: generateRandomNumber,
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
