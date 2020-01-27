import React from 'react'

const DeptButton = (props) => {
    console.log(props.deptList.departments)
    return (
        <div className='dept-button'>
            <div className='dept-image'>Dept Images go Here</div>
        </div>
    )
}

export default DeptButton