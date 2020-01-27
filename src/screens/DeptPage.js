import React from 'react'

const DeptPage = (props) => {
    const deptIndex = props.match.params.dept_index

    return (
        <div>
            <h2 className='dept-name'>{props.deptList.departments[deptIndex].displayName}</h2>
        </div>
    )
}

export default DeptPage