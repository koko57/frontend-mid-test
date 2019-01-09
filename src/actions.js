import axios from 'axios';

export const getHouses = () => dispatch => {
  axios.get('http://mr-test-backend.sadek.usermd.net/houses').then(res => {
    console.log(res.data.houses);
    dispatch({
      type: 'GET_HOUSES',
      payload: res.data.houses
    });
  });
};

export const addHouse = house => dispatch => {
  axios
    .post('http://mr-test-backend.sadek.usermd.net/houses', house)
    .then(res => {
      dispatch({
        type: 'ADD_HOUSE',
        payload: res.data
      });
    });
};

export const deleteHouse = id => dispatch => {
  axios
    .delete(`http://mr-test-backend.sadek.usermd.net/houses/${id}`)
    .then(res => {
      dispatch({
        type: 'DELETE_HOUSE',
        payload: id
      });
    });
};
