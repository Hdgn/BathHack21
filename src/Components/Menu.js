import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (

        <div class="ui menu">
            <div class="right menu">
                <Link  class="item" to="/Main">Main Buttons</Link>
            </div>
            {props.children}
        </div>
    )
}

export default Menu;