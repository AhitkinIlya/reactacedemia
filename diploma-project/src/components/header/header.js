import React, {Component} from 'react';
import Menu from '../menu/menu'
import MainText from '../mainText/mainText'
import './header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="main">
                <Menu color={'Group.png'}/>
                <h3>Everything You Love About Coffee</h3>
                <MainText/>
            </div>
        )
    }
}