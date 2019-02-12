import React, {Component} from 'react'
import './bestSellers.css'
import getDB from '../../services/getDB'
export default class BestSellers  extends Component {
    getDB = new getDB();

    state = {
        bestItems: null
    }

    componentDidMount() {
        this.getDB.getBest()
            .then((bestItems) => {
                this.setState({
                    bestItems
                })
            })
    }

    renderBest(arr) {
        return arr.map((item) => {
            const {id, name, url, price} = item
            return (
                <div
                    key={id}
                    className="bestItem">
                    <img src={url} alt="bestItem"/>
                    <span>{name}</span>
                    <small>{price}</small>
                </div>
            )

        })
    }


    render() {
        const {bestItems} = this.state
        if(!bestItems) {
            return null
        }
        const items = this.renderBest(bestItems)
        return (
            <div className="containerBest">
                <h4 className="titleBest">Our best</h4>
                <div className="bestGoods">
                    {items}
                </div>
            </div>

        )
    }
}
