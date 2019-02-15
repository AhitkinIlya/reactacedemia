import React, {Component} from 'react';
import BestPage from '../pages/bestPage/bestPage'
import CoffeePage from '../pages/coffeePage/coffeePage'
import PleasurePage from '../pages/pleasurePage/pleasurePage'
import CoffeeDetails from '../pages/coffeeDetails/coffeeDetails'
import Footer from '../footer/footer'
import ErrorMessage from '../errorMessage/errorMessage'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }
    
    render() {
        if(this.state.error) {
            return <ErrorMessage error="errorPage"
                                 errorText="errorText"
                                 errorMessage="Ошибка на странице"/>
        }
        return (
            <Router>
                <>
                    <Route path='/' exact component={BestPage}/>
                    <Route path='/coffee/' exact component={CoffeePage}/>
                    <Route path='/forYourPleasure' component={PleasurePage}/>
                    <Route path='/coffee/:id' render={
                        ({match}) => {
                            const {id} = match.params
                            console.log(id)
                            return <CoffeeDetails name={id}/>
                        }
                    }/>
                    <Footer/>
                </>
            </Router>
        )
    }
}