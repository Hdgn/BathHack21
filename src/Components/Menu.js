import React from 'react'
import { Link } from 'react-router-dom'


const Menu = (props) => {
    return (

        <div style={{backgroundColor: 'black'}}
        class="ui menu">
            <div class="right menu" >
                <Link class="item" to="/Main" style={{color: 'white', fontWeight: 'bold'}}>Home</Link>
            </div>
            {props.children}
        </div>
    )
}

export default Menu;