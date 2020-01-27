import React from 'react'
import Title from './Title'
import Nav from './Nav'

const Header = () => {
    return(
        <div>
            <h1>Welcome to the Inter<span>Met</span>!</h1>
            <Nav />
            <Title />
        </div>
    )
}

export default Header