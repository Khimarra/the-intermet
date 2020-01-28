import React, { useState, useEffect } from 'react'
import { getObjByDept } from '../services/apiHelper'
import { NavLink } from 'react-router-dom'

const DeptPage = (props) => {
    const deptIndex = props.match.params.dept_index
    const deptId = props.deptList.departments[deptIndex].departmentId
    const [objects, setObjects] = useState([])
    const [objectsTwo, setObjectsTwo] = useState([])
    const [objectsThree, setObjectsThree] = useState([])

    useEffect(() => {
        objByDept()
        objByDeptTwo()
        objByDeptThree()
    }, [])

    const objByDept = async () => {
        const response = await getObjByDept(deptId)
        setObjects(response)
    }

    const objByDeptTwo = async () => {
        const response = await getObjByDept(deptId)
        setObjectsTwo(response)
    }

    const objByDeptThree = async () => {
        const response = await getObjByDept(deptId)
        setObjectsThree(response)
    }


    return (
        <div className='dept-page-images'>
            
            <h2 className='dept-name'>{props.deptList.departments[deptIndex].displayName}</h2>
            <NavLink exact to={`/ArtPage/${objects.objectID}`} objectinfo={objects} onClick={() => {props.onClick(objects)}}>
                <h2 className='object-id'>{objects && objects.objectID}</h2>
                <img src={`${objects && objects.primaryImage}`} alt='' className='dept-images' />
            </NavLink>

            <NavLink exact to={`/ArtPage/${objectsTwo.objectID}`} objectinfo={objectsTwo} onClick={() => {props.onClick(objectsTwo)}}>
                <h2 className='object-id'>{objectsTwo && objectsTwo.objectID}</h2>
                <img src={`${objectsTwo && objectsTwo.primaryImage}`} alt='' className='dept-images' />
            </NavLink>

            <NavLink exact to={`/ArtPage/${objectsThree.objectID}`} objectinfo={objectsThree} onClick={() => {props.onClick(objectsThree)}}>
                <h2 className='object-id'>{objectsThree && objectsThree.objectID}</h2>
                <img src={`${objectsThree && objectsThree.primaryImage}`} alt='' className='dept-images' />
            </NavLink>

        </div>
    )
}

export default DeptPage