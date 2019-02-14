import React, {Component} from 'react';
import Menu from '../menu/menu'
import MainText from '../mainText/mainText'
import './header.css'

export default class Header extends Component {
    render() {
        return(
            <div className={this.props.classStyle}>
                <Menu color={'Group.png'}/>
                <h3 className={!this.props.pageCoffe ? "title" : "titleCoffe"}>{this.props.title}</h3>
                {this.props.mainText !== undefined ? <MainText/> : null}
            </div>
        )
    }
}