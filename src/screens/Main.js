import React from 'react'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'

const Main = (props) => {
    return (
        <div className='main'>
            <h2>Which department would you like to visit today?</h2>
            <div className='dept-list'>
                
                {props.deptList.departments && props.deptList.departments.map((department, index) => {
                    return (
                        <NavLink key={index} exact to={`/DeptPage/${index}`}>
                            <h4 className='dept-name'>{department.displayName}</h4>
                            <Button deptList={props.deptList} />              
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Main