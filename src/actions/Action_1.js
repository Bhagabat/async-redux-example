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
		
		return fetch('https://api.ipify.org/?format=json')
		      .then(response => response.json())
		      .then(json =>{console.log(json); return dispatch(getData1(json.ip));})
		
	  }
}