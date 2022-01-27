const initialData = {
    list: []
}

const todoReducers = (state= initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id,
                        data
                    }
                ]
            }
        case "DELETE_TODO":
            const newList = state.list.filter((item) => {
                return item.id !== action.id
            })
            return {
                ...state,
                list: newList,
            }
        default: return state;
    }
}
export default todoReducers;