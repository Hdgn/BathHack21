import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


const Menu = (props) => {
    return (

        <div style={{backgroundColor: 'black'}}
        class="ui menu">
            {/* <div class="right menu" > */}
                <button class="ui fluid button secondary">
                    <Link class="item" to="/Main" style={{textAlign: "center", color: 'white', fontWeight: 'bold'}}>Home</Link>
                </button>
            {/* </div> */}
            {props.children}
        </div>
    )
}

export default Menu;