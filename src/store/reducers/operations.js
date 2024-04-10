import {ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX} from "../actions/actions";

const initialState = [
    {id: 1, todo: "Todo1", completed: false},
    {id: 2, todo: "Todo2", completed: true},
    {id: 3, todo: "Todo3", completed: false}, 
];

export const operationsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_ALL:
            return []
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload)
            return filteredTodos
        case UPDATE_CHECKBOX:
            const updatedTodos = state.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed}
                }
            })
            return updatedTodos
    }
    return state
};