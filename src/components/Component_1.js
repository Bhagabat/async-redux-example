import React, { Component, PropTypes } from 'react';
import style from '../css/main.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as Action_1 from '../actions/Action_1';

@connect(state => {return({
	  data: state.reducer_1
	})})
export default class Component_1 extends Component {
  onClickButton=()=>{
	  console.log("onclick called...............");
	  this.props.dispatch(Action_1.getDataAjax(123));
  }
  render () {
	  console.log("component1 render ",this.props);
	  const { data, dispatch } = this.props;
	    //const actions = bindActionCreators(Action_1, dispatch);
	   
    return (
    		<div><button onClick={this.onClickButton}>Component_1</button>{this.props.data.data}</div>
    );
  }

  constructor (props, context) {
    super(props, context);
    //this.state = this.props.data;
    
  }
  /*componentWillReceiveProps(nextProp){
	  this.setState(nextProp.data);
  }*/
  

}