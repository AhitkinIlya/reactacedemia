import React, {Component} from 'react'
import './itemList.css'
import getDB from '../../services/getDB'

export default class ItemList extends Component {
    getDB = new getDB();

    state = {
        listItems: null
    }

    componentDidMount() {
        const {getData} = this.props
        getData() // or this.getDB.getGoods
            .then((listItems) => {
                this.setState({
                    listItems
                })
            })
    }

    renderList(arr) {
        return arr.map((item) => {
            const {id, name, url, price, country} = item
            return (
                <div
                    key={id}
                    className="item">
                    <img src={url} alt="item"/>
                    <span>{name}</span>
                    {country !== undefined ? <span className="country">{country}</span> : null}
                    <small>{price}</small>
                </div>
            )

        })
    }

    render() {
        const {listItems} = this.state
        if(!listItems) {
            return null
        }
        const items = this.renderList(listItems)
        return (
            <div className="containerList">
                <div className="itemList">
                    {items}
                </div>
            </div>
        )
    }
}
