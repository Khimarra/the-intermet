import React from 'react'
import DeptPage from './DeptPage'
import ArtDetails from './ArtDetails'

const Main = (props) => {
    console.log(props.deptList)
    return (
        <div className='main'>
            <h2>Which department would you like to visit today?</h2>
            <div className='dept-list'>
                    {props.deptList.departments && props.deptList.departments.map((department, index) => {
                        return (
                            <div className='dept'>
                                <h4 key={index}>{department.displayName}</h4>
                                <div className='dept-image'>Dept Images go Here
                                </div>
                            </div>
                        )
                    })}
            </div>
            <DeptPage />
            <ArtDetails />
        </div>
    )
}

export default Main