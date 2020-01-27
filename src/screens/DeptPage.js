import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { getObjByDept } from '../services/apiHelper'

// export const getDepts = async () => {
//     const response = await axios.get(`${base}departments`)
//     return response
// }

const DeptPage = (props) => {
    const deptIndex = props.match.params.dept_index
    const deptId = props.deptList.departments[deptIndex].departmentId

    const [object, setObject] = useState(null)

    useEffect(() => {
        objByDept()
    }, [])

    const objByDept = async () => {
        const response = await getObjByDept(deptId)
        setObject(response)
    }

    console.log(getObjByDept(deptId))

    return (
        <div>
            <h2 className='dept-name'>
                {props.deptList.departments[deptIndex].displayName}
            </h2>
            <h2>{object && object.objectID}</h2>
            <img src={`${object && object.primaryImage}`} alt='' className='dept-images' />
            <Button />
        </div>
    )
}

export default DeptPage