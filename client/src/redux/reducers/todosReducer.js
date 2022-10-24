import ACTIONS from "../actions";

const todosReducer = (state = [],action) => {
    switch(action.type){
        case ACTIONS.ADD_NEW_TODO:
            return [action.payload, ...state];

        default:
        return state;
    }
}

export default todosReducer;