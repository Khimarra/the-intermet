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
            
            <h2 className='dept-title'>{props.deptList.departments[deptIndex].displayName}</h2>

            <div className='dept-grid'>
                <NavLink className='art-cards' exact to={`/ArtPage/${objects.objectID}`} objectinfo={objects} onClick={() => {props.onClick(objects)}}>

                    <div className='dp-image-container'>
                        <img src={`${objects && objects.primaryImage}`} alt='' className='dept-images' />
                    </div>

                    <h2 className='object-name'>{objects && objects.title}</h2>

                    <h2 className='artist-name'>
                        {
                            (objects && objects.artistDisplayName) ?
                            (`By: ${objects && objects.artistDisplayName}`) : 
                            ('')
                        }
                    </h2>

                </NavLink>

                <NavLink className='art-cards' exact to={`/ArtPage/${objectsTwo.objectID}`} objectinfo={objectsTwo} onClick={() => {props.onClick(objectsTwo)}}>

                    <div className='dp-image-container'>
                        <img src={`${objectsTwo && objectsTwo.primaryImage}`} alt='' className='dept-images' />
                    </div>

                    <h2 className='object-name'>{objectsTwo && objectsTwo.title}</h2>
                    
                    <h2 className='artist-name'>
                        {
                            (objectsTwo && objectsTwo.artistDisplayName) ?
                            (`By: ${objectsTwo && objectsTwo.artistDisplayName}`) : 
                            ('')
                        }
                    </h2>

                </NavLink>

                <NavLink className='art-cards' exact to={`/ArtPage/${objectsThree.objectID}`} objectinfo={objectsThree} onClick={() => {props.onClick(objectsThree)}}>
                    
                    <div className='dp-image-container'>
                        <img src={`${objectsThree && objectsThree.primaryImage}`} alt='' className='dept-images' />
                    </div>
                    
                    <h2 className='object-name'>{objectsThree && objectsThree.title}</h2>
                    
                    <h2 className='artist-name'>
                        {
                            (objectsThree && objectsThree.artistDisplayName) ?
                            (`By: ${objectsThree && objectsThree.artistDisplayName}`) : 
                            ('')
                        }
                    </h2>

                </NavLink>
            </div>

        </div>
    )
}

export default DeptPage