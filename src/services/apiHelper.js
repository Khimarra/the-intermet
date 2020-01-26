import axios from 'axios'

const base = "https://collectionapi.metmuseum.org/public/collection/v1/"

export const getDepts = async () => {
    const response = await axios.get(`${base}departments`)
    return response
}