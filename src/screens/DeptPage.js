import React from 'react'
import ArtCard from '../components/ArtCard'

const DeptPage = (props) => {

    const deptIndex = props.match.params.dept_index

    return (

        <div>
            <h2 className='dept-title'>{props.deptList.departments[deptIndex].displayName}</h2>

            <div className='dept-grid'>

                <ArtCard deptList={props.deptList} onClick={props.onClick} />
                <ArtCard deptList={props.deptList} onClick={props.onClick} />
                <ArtCard deptList={props.deptList} onClick={props.onClick} />

            </div>
            
        </div>
    )
}

export default DeptPage