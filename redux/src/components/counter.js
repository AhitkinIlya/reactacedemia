import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div id="conteiner">
            <span id="counter">{counter}</span>
            <div id="buttons">
                <button onClick={inc} id="inc" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"></i></button>
                <button onClick={dec} id="dec" className="btn btn-primary"><i className="fa fa-minus" aria-hidden="true"></i></button>
                <button onClick={rnd} id="rnd" className="btn btn-primary"><i className="fa fa-retweet" aria-hidden="true"></i></button>
            </div>
        </div> 
    )
}
const mapStateToProps = (state) => {
    return {
         counter: state
    }
}
export default connect(mapStateToProps, actions)(Counter);