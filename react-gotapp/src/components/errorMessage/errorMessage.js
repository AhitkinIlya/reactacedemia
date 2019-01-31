import React, {Component} from 'react';
import './errorMessage.css'
import img from './error.jpg'

class ErrorMessage extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: !this.state.error
        })
    }

    render() {
        const {error} = this.state
        if (error) {
            return (
                <>
                    <img src={img} alt='error'></img>
                    <span>Something goes wrong</span>
                </>
            )
        }
        return (
            this.props.children
        )
    }
}

export default ErrorMessage