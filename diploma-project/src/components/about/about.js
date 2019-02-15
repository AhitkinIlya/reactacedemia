import React, {Component} from 'react'
import './about.css'
import Grain from '../grain/grain'

class About extends Component {
    render() {
        return(
            <>
                {this.props.about 
                ? 
                <div className="about">
                    <h4 className="aboutTitle">{this.props.title}</h4>
                    <Grain/>
                    {this.props.text}
                </div> 
                : 
                <>
                    <div className="aboutParent">
                        <img className={this.props.imageAbout}  src={this.props.src} alt="imageAbout"/>
                        <div className="aboutCoffee">
                            <h4 className="aboutTitle">{this.props.title}</h4>
                            <Grain/>
                            {this.props.text !== undefined ? <div className="da">{this.props.text}</div>
                                : <div className="aboutIt">
                                    <p className="countryCoffee"><b>Country:</b> {this.props.item.country}</p>
                                    <span className="textCoffee"><b>Description:</b> {this.props.item.description}</span><br/><br/>
                                    <small className="priceCoffee"><b>Price:</b> {this.props.item.price}</small>
                                  </div>}
                        </div>
                    </div>
                    { this.props.text !== undefined ? <img className="line" src="/img/lineAbout.png" alt="line"/>: null}
                </>}
            </>
        )
    }
}

export default About