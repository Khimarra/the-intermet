import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <nav>
                <NavLink exact to='/'>
                    <div className='nav'>
                    <h4>The Inter<span>Met</span></h4>
                    </div>
                </NavLink>
            </nav>
        </div>
    )
}

export default Nav