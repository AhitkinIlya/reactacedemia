import React, {Component} from 'react'
import './searchItem.css'

export default class SearchItem extends Component {

    state = {
        term: ''
    }

    onUpdateSearch = e => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className="searchFilter">
                <span className="text">Lookiing for</span>
                <input
                className="searchItem"
                type="text"
                placeholder="start typing here..."
                onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}