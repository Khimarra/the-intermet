import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <div className='nav'>
            <nav>
                <NavLink exact to='/'>
                    <h4>The Inter<span>Met</span></h4>
                </NavLink>
            </nav>
        </div>
    )
}

export default Nav