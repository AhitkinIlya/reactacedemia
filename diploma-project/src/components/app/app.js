import React, {Component} from 'react';
import BestPage from '../pages/bestPage/bestPage'
import CoffeePage from '../pages/coffeePage/coffeePage'
import PleasurePage from '../pages/pleasurePage/pleasurePage'
import Footer from '../footer/footer'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    
    render() {
        return (
            <Router>
                <>
                    <Route path='/' exact component={BestPage}/>
                    <Route path='/coffee' component={CoffeePage}/>
                    <Route path='/goods' component={PleasurePage}/>
                    <Footer/>
                </>
            </Router>
        )
    }
}