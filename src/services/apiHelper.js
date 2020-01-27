import axios from 'axios'

const base = "https://collectionapi.metmuseum.org/public/collection/v1/"


export const getDepts = async () => {
    const response = await axios.get(`${base}departments`)
    return response
}

const getObjList = async () => {
    let objList = await axios.get(`${base}objects`)
    return objList.data.objectIDs
}

export const getObjDetails = async () => {
    const objList = await getObjList()
    let objId = Math.floor(Math.random() * (objList.length))
    const response = await axios.get(`${base}objects/${objList[objId]}`)
    return response.data
} 

export const getObjByDept = async (deptId) => {
    const response = await axios.get(`${base}search?departmentId=${deptId}&isHighlight=true&hasImages=true&q=the`)
    const objList = response.data.objectIDs
    let objId = Math.floor(Math.random() * (objList.length))
    const responseTwo = await axios.get(`${base}objects/${objList[objId]}`)
    return responseTwo.data
}

