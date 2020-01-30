import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getObjByDept } from '../services/apiHelper'


const Main = (props) => {

    const deptIndex = props.deptList.departments.map(deptInfo => deptInfo.departmentId)
    const [objects, setObjects] = useState({})

    useEffect(() => {
        const fetchAllImages = async () => {
            const images = deptIndex.map(async i => await objByDept(i))
            const allObjects = await Promise.all(images)
            setObjects(allObjects) 
        }
        fetchAllImages()
    }, [])

    const objByDept = async (deptId) => {
        const response = await getObjByDept(deptId)
        return response;
    }

    return (
        <div className='main'>
            <h2>Which department would you like to visit today?</h2>
            <div className='dept-list'>
                
                {props.deptList.departments && props.deptList.departments.map((department, index) => {

                    if(Object.keys(objects).length == 0) {
                        return (
                            <div className="dept-cards">
                                <div className='image-container'>
                                    <h4 className="loading">Loading Images...</h4>
                                </div>
                            </div>
                        )
                    }

                    return (
                        <NavLink key={index} exact to={`/DeptPage/${index}`}>
                            <div className="dept-cards">
                                <div className='image-container'>
                                    <img className="home-images" src={`${(objects[index] && objects[index].primaryImageSmall) ? (objects[index] && objects[index].primaryImageSmall) : (objects[index] && objects[index].primaryImage)}`} alt='' />
                                </div>
                                <h4 className='dept-name'>{department.displayName}</h4>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Main