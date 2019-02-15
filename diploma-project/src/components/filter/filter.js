import React, {Component} from 'react'
import './filter.css'

export default class Filter extends Component {

    buttons = [
        {name: 'brazil', label: 'Brazil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'}
    ]
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props
            const active = filter === name
            const clazz = active ? 'active' : 'unActive'
            return (
                <button 
                key={name} 
                type="button" 
                className={`${clazz}`}
                onClick={() => onFilterSelect(name)}>{label}</button>
            )
        })
        return (
            <div className="group">
                <span className="filter">Or filter</span>
                {buttons}
            </div>
        )
    }
}