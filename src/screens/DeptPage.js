import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { getObjDetails } from '../services/apiHelper'

// export const getDepts = async () => {
//     const response = await axios.get(`${base}departments`)
//     return response
// }

const DeptPage = (props) => {
    const deptIndex = props.match.params.dept_index

    const [objDetails, setDept] = useState(null)
    useEffect(() => {
        getObj()
    }, [])

    const getObj = async () => {
        const response = await getObjDetails()
        setDept(response)
    }

    console.log(objDetails)

    return (
        <div>
            <h2 className='dept-name'>
                {props.deptList.departments[deptIndex].displayName}
            </h2>
            <h2>{objDetails && objDetails.objectID}</h2>
            <img src={`${objDetails && objDetails.primaryImage}`} />
            <Button />
        </div>
    )
}

export default DeptPage