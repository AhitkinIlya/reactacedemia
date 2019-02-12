import React, {Component} from 'react';
import Header from '../header/header'
import About from '../about/about'
import BestSellers from '../bestSellers/bestSellers'
import Footer from '../footer/footer'
import ItemList from '../itemList/itemList'

export default class App extends Component {
    
    render() {
        return (
            <>
                <Header/>
                <About/>
                <BestSellers/> {/* Пока pages у меня нет можете здесь потестить компонент ItemList на наличие верстки и товаров из бд */} 
                <Footer/>
            </>
        )
    }
}