import React from 'react'
import DeptPage from './DeptPage'
import ArtDetails from './ArtDetails'

const Main = (props) => {
    console.log(props.deptList)
    return (
        <div>
            <h2>Main</h2>
            <div className="department-list">
                {props.deptList.departments && props.deptList.departments.map((department, index) => {
                    return (
                        <p key={index}>{department.displayName}</p>
                    )
                })}
            </div>
            <DeptPage />
            <ArtDetails />
        </div>
    )
}

export default Main