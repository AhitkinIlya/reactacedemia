import React, {Component} from 'react'
import Header from '../../header/header'
import './coffeeDetails.css'
import getDB from '../../../services/getDB'
import About from '../../about/about'
import ErrorMessage from '../../errorMessage/errorMessage'
import Spinner from '../../spinner/spinner';

export default class CoffeeDetails extends Component {
    data = new getDB()

    state = {
        item: '',
        error: false
    }

    componentDidMount() {
        this.data.getCoffeeDetails(this.props.name)
            .then((item1) => {
                console.log(item1)
                const item = item1[0]
                this.setState({
                    item
                })
            })
            .catch(() => {
                this.setState({error: true})
            })
    }

    render() {
        if(this.state.item === '' && !this.state.error) {
            return <Spinner/>
        }
        return(
            <>
                <Header classStyle="ourCoffee"
                        title="Our Coffee"
                        pageCoffe={true}/>
                {this.state.error ? <ErrorMessage error="errorItem" 
                                                errorText="errorTextItem"
                                                errorMessage="Ошибка при загрузке данных"/> 
                                                : <About item={this.state.item}
                       title="About it"
                       src={this.state.item.url}
                       about={false}
                       imageAbout="imageIt"/>}
            </>
        )
    }
}