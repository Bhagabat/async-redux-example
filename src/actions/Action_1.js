import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

function getData1(value) {
	  return {
	    type: 'ACTION_1',
	    value:value
	  };
	}
export function getDataAjax(value){
	return function (dispatch) {
		console.log('Ajax call..................');
		
	    return  dispatch(getData1('1234'));
	  }
}