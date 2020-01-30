import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getObjByDept } from '../services/apiHelper'

const ArtCard = (props) => {

    const deptIndex = useParams().dept_index
    const deptId = props.deptList.departments[deptIndex].departmentId
    const [objects, setObjects] = useState([])

    useEffect(() => {
        objByDept()
    }, [])

    const objByDept = async () => {
        const response = await getObjByDept(deptId)
        setObjects(response)
    }

    return (
        <div className='art-cards'>
            <NavLink exact to={`/ArtPage/${objects.objectID}`} objectinfo={objects} onClick={() => { props.onClick(objects) }}>

                <div className='dp-image-container'>
                    <img src={`${objects && objects.primaryImage}`} alt='' className='dept-images' />
                </div>

                <h2 className='object-name'>{objects && objects.title}</h2>

                <h2 className='artist-name'>
                    {(objects && objects.artistDisplayName) ?
                    (`By: ${objects && objects.artistDisplayName}`) :
                    ('')}
                </h2>

            </NavLink>        
        </div>
    )
}

export default ArtCard