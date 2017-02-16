import * as types from '../constants/ActionTypes';


const initialState = {
  data:''
};

export default function reducer_1(state = initialState, action) {
	console.log("reducer_1------------",action);
  switch (action.type) {
    case types.ACTION_1:
      return {
        ...state,
        data:action.value
      }
    

    default:
      return state;
  }
}
