import React, {Component} from 'react'
import './post-list-item.css'

export default class PostListItem extends Component {
    state = {
        important: false,
        like: false
    }

    onImportant = () => {
        this.setState({
            important: !this.state.important
        })
    }

    onLike = () => {
        this.setState({
            like: !this.state.like
        })
    }
    render() {
        const {label, onDelate} = this.props
        const {important, like} = this.state
        let classNames = "app-list-item d-flex justify-content-between"

        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }

        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm"
                    onClick={onDelate}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
