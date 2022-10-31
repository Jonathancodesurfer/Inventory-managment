import { INIT_ITEMS } from "../actions/action-types";

export default (state, action) => {
    let newState = {...state};

    switch (action.type) {
        case INIT_ITEMS:
            newState.items = action.payload;
            break;

            default:
                break;
    }

    return newState;
}