import React from 'react'
import './menu.css'
const Menu = ({color}) => {
    return (
        <div className="menu">
            <a href="#"><img src={`${/logo/}${color}`} alt="зерно"/>Coffee house</a>
            <a href="#">Our coffee</a>
            <a href="#">For your pleasure</a>
        </div>
    )
}

export default Menu