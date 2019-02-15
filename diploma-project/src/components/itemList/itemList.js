import React, {Component} from 'react'
import './itemList.css'
import getDB from '../../services/getDB'
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {
    getDB = new getDB();

    state = {
        listItems: '',
        error: false
    }

    componentDidMount() {
        const {getData} = this.props
        getData()
            .then((listItems) => {
                this.setState({
                    listItems
                })
            })
            .catch((error) => {
                this.setState({error: true})
            })
    }


    renderList(arr) {
        return arr.map((item) => {
            const {id, name, url, price, country} = item
            return (
                <div
                    key={id}
                    className="item">
                    <img src={url} alt="item"
                    onClick={this.props.coffePage 
                    ? () => this.props.onItemSelected(id) : null}/>
                    <span>{name}</span>
                    {country !== undefined ? <span className="country">{country}</span> : null}
                    <small>{price}</small>
                </div>
            )

        })
    }

    render() {
        const {listItems} = this.state
        if(listItems === '' && !this.state.error) {
            return <Spinner/>
        }
        const items = this.props.coffePage ? this.renderList(this.props.visibleItem(listItems)) : this.renderList(listItems)
        return (
            <div className="containerList">
                <div className="itemList">
                    {this.state.error ? <ErrorMessage
                                                error="errorItem" 
                                                errorText="errorTextItem"
                                                    errorMessage="Ошибка при загрузке данных"/> : items}
                </div>
            </div>
        )
    }
}
