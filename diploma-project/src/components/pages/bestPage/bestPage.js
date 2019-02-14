import React, {Component} from 'react'
import About from '../../about/about'
import Header from '../../header/header'
import BestSellers from '../../bestSellers/bestSellers'
import './bestPage.css'

class BestPage extends Component {
    render() {
        const text = <p className="aboutText">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br/><br/> Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
        return(
            <>
                <Header title={`Everything You Love About Coffee`}
                        mainText={true}
                        classStyle="main"
                        pageCoffee={false}/>
                <About title={`About us`}
                       about={true}
                       text={text}/>
                <BestSellers/>
            </>
        )
    }
}

export default BestPage