import React, {Component} from 'react'
import About from '../../about/about'
import Header from '../../header/header'
import ItemList from '../../itemList/itemList'
import getDB from '../../../services/getDB'
import './coffePage.css'

class CoffeePage extends Component {
    data = new getDB()
    render() {
    const text = <p className="aboutTextCoffee">Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.<br/><br/> Afraid at highly months do things on at. Situation<br/> recommend objection do intention<br/> so questions.<br/> As greatly removed calling pleased improve an. Last ask him cold feel<br/> met spot shy want. Children me laughing we prospect answered followed. At it went<br/> is song that held help face.</p>    
        return (
            <>
                <Header classStyle="ourCoffee"
                        title={`Our Coffee`}
                        pageCoffe={true}/>
                <About about={false}
                       src="/img/ourCoffee.png"
                        title={`About our beans`}
                       text={text}/>
                <ItemList getData={() => this.data.getCoffee()}/>
            </>
        )
    }
}

export default CoffeePage
