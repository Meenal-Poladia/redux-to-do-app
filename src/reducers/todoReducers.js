const initialData = {
    list: [],
    listType: "All"
}

const todoReducers = (state= initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const {id, isCompleted, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id,
                        isCompleted,
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
                list: newList
            }
        case "SET_LIST_TYPE":
           return {
               ...state,
               listType: action.listType
           }
        case "UPDATE_TODO":
            const item = state.list.find(item => action.id === item.id)
            item.isCompleted = action.isCompleted;

            const itemIndex = state.list.findIndex(item => action.id === item.id)

            const updatedList = [...state.list];
            updatedList[itemIndex] = item;

            return {
                ...state,
                list: updatedList
            }
        default: return state;
    }
}
export default todoReducers;