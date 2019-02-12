import React from 'react'
import './mainText.css'

const MainText = () => {
    return(
        <div className="mainText">
            <img src="/logo/Line.png" alt="logo"/>
            <img src="/logo/Group3.png" alt="logo"/>
            <img src="/logo/Line.png" alt="logo"/>
            <p className="makes">We makes every day full of energy and taste</p>
            <p className="try">Want to try our beans?</p>
            <button><span>More</span></button>
        </div>
    )
}

export default MainText