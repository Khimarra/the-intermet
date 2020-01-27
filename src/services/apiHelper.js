import axios from 'axios'

const base = "https://collectionapi.metmuseum.org/public/collection/v1/"

export const getDepts = async () => {
    const response = await axios.get(`${base}departments`)
    return response
}

export const getObjects = async () => {
    const response = await axios.get(`${base}objects`)
    return response
}

export const getObjByDept = async () => {
    const response = await axios.get(`${base}objects?departmentIds=${'deptId'}`)
    return response
}