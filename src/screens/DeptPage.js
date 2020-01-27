import React from 'react'
import { NavLink } from 'react-router-dom'
import DeptButton from '../components/DeptButton'

const DeptPage = (props) => {
    return (
        <div>
            <h4>Specific Department Page</h4>
            {/* {props.deptList.departments && props.deptList.departments.map((department, index) => {
                return (
                    <NavLink key={index} exact to={`/DeptPage/${index}`}>
                        <p>Hi</p>
                    </NavLink>
                )
            })} */}
        </div>
    )
}

export default DeptPage