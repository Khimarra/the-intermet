import React from 'react'
import { NavLink } from 'react-router-dom'

const DeptButton = (props) => {
    console.log(props.data)
    return (
        <div className='dept-button'>
            <h4>Department NavLink</h4>
        </div>
    )
}

{/* <ul className='heroList'>
{props.heroes.map((hero, index) => {
    return (
        <NavLink key={index} exact to={`/Profile/${hero.hero_id}`}>
            <li className='heroCard'>
                <img src={hero.image_url} alt="" ></img>
                <h2>{hero.name}</h2>
            </li>
        </NavLink>
    )
})} 

</ul> */}

export default DeptButton