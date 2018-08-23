/**
 * Created by gitsad on 05.01.17.
 */
import { combineReducers } from 'redux';

const reducerToDelete = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    reducerToDelete,
});