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
                        <img className="imageAbout" src={this.props.src} alt="imageAbout"/>
                        <div className="aboutCoffee">
                            <h4 className="aboutTitle">{this.props.title}</h4>
                            <Grain/>
                            {this.props.text}
                        </div>
                    </div>
                    <img className="line" src="/img/lineAbout.png" alt="line"/>
                </>}
            </>
        )
    }
}

export default About