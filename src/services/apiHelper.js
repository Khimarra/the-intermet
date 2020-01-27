import axios from 'axios'

const base = "https://collectionapi.metmuseum.org/public/collection/v1/"

export const getDepts = async () => {
    const response = await axios.get(`${base}departments`)
    return response
}

export const getObjDetails = async () => {
    let objId = Math.floor(Math.random() * 471885)
    const response = await axios.get(`${base}objects/${objId}`)
    return response
} 

// export const getObjByDept = async () => {
//     const response = await axios.get(`${base}objects?departmentIds=${deptId}`)
//     return response
// }

