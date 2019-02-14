import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'
const Menu = ({color}) => {
    return (
        <div className="menu">
            <Link to='/'><img src={`${/logo/}${color}`} alt="зерно"/>Coffee house</Link>
            <Link to='/coffee/'>Our coffee</Link>
            <Link to='/goods'>For your pleasure</Link>
        </div>
    )
}

export default Menu