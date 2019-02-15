import React, {Component} from 'react'
import './bestSellers.css'
import getDB from '../../services/getDB'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../errorMessage/errorMessage'
export default class BestSellers  extends Component {
    getDB = new getDB();

    state = {
        bestItems: '',
        error: false
    }

    componentDidMount() {
        this.getDB.getBest()
            .then((bestItems) => {
                this.setState({
                    bestItems
                })
            })
            .catch(() => {
                this.setState({error: true})
            })
    }

    renderBest(arr) {
        return arr.map((item) => {
            const {id, name, url, price} = item
            return (
                <div
                    key={id}
                    className="bestItem"
                    onClick={() => this.props.onItemSelected(id)}>
                    <img src={url} alt="bestItem"/>
                    <span>{name}</span>
                    <small>{price}</small>
                </div>
            )

        })
    }


    render() {
        const {bestItems} = this.state
        if(bestItems === '' && !this.state.error) {
            return <Spinner/>
        }
        const items = this.state.error ? <ErrorMessage
                                            error="errorItem" 
                                            errorText="errorTextItem"
                                            errorMessage="Ошибка при загрузке данных"/> 
                                            : this.renderBest(bestItems)
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
