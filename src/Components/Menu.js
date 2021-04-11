import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


const Menu = (props) => {
    return (

        <div style={{backgroundColor: 'black'}}
        class="ui menu">
<<<<<<< HEAD
            {/* <div class="right menu" > */}
                <button class="ui fluid button secondary">
                    <Link class="item" to="/Main" style={{textAlign: "center", color: 'white', fontWeight: 'bold'}}>Home</Link>
                </button>
            {/* </div> */}
=======
            <div class="right menu" >
                <Link class="item" to="/Main" style={{color: 'white', fontWeight: 'extra-bold'}}>Home</Link>
            </div>
>>>>>>> 0cc09c6a142b00c8e1cd4368a81f19d675813326
            {props.children}
        </div>
    )
}

export default Menu;