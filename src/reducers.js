import { combineReducers } from 'redux';

const initialState = {
  houses: [],
  currentHouse: {}
};

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOUSES':
      return {
        ...state,
        houses: action.payload
      };
    case 'GET_CURRENT_HOUSE':
      return {
        ...state,
        currentHouse: state.houses.find(house => house._id === action.payload)
      };
    case 'ADD_HOUSE':
      return {
        ...state,
        houses: [action.payload, ...state.houses]
      };
    case 'DELETE_HOUSE':
      return {
        ...state,
        houses: [state.houses.filter(house => house._id !== action.payload)]
      };
    default:
      return state;
  }
};

export default combineReducers({
  houses: housesReducer
});
