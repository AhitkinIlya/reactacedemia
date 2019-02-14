import React, {Component} from 'react'
import About from '../../about/about'
import Header from '../../header/header'
import ItemList from '../../itemList/itemList'
import getDB from '../../../services/getDB'

class PleasurePage extends Component {
    data = new getDB()
    render() {
        const text = <p>Extremity sweetness difficult behavior he of. On disposal of as landlord horrible<br/><br/> Afraid at higly months do things on at. Situation<br/> reccommend objection do intention<br/> so questions.<br/> As greatly removed calling pleased improve an.<br/> Last ask him cold feel<br/> met spot shy want. Children me laughing we<br/> prospect answered followed. At it went<br/> is song that held help face.</p>
        return (
            <>
                <Header classStyle="forYourPleasure"
                        title={`For your pleasure`}
                        pageCoffe={true}/>
                <About about={false}
                        src="/img/goods.png"
                        title={`About our goods`}
                        text={text}/>
                <ItemList getData={() => this.data.getGoods()}/>
            </>
        )
    }
}

export default PleasurePage