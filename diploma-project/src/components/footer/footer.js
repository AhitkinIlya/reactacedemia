import React from 'react'
import Menu from '../menu/menu'
import Grain from '../grain/grain'
import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <Menu color={'GroupBlack.png'}/>
            <Grain/>
        </div>
    )
}

export default Footer