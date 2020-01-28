import React, { useState, useEffect } from 'react'
import { getObjDetails } from '../services/apiHelper'
import { Route } from 'react-router-dom'

const ArtDetails = (props) => {

    const [newObject, setNewObject] = useState([])
    const image = props.objDetails && props.objDetails.primaryImage
    const defaultImage = 'images/No_Image_Available.png'

    useEffect(() => {
        objDetails()
    }, [])

    const objDetails = async () => { 
        const response = await getObjDetails()
        setNewObject(response)
    }

    const objectID = props.match.params.obj_index

    if(props.objDetails) {
        console.log(props.objDetails)
    return(
        <div className="art-details">
            <h1 className="object-name">{props.objDetails && props.objDetails.title}</h1>
            <h4>{props.objDetails && props.objDetails.objectName}</h4>

            <h4 className="artist">
                {
                    (props.objDetails && props.objDetails.artistDisplayName) ?
                    (`By: ${props.objDetails && props.objDetails.artistDisplayName}`) :
                    ('')
                }
            </h4>
            
            <img className="primary-image" src="../images/No_Image_Available.png" alt='' />
            <ul className="object-info">Title: {props.objDetails && props.objDetails.title}
                <li>
                    {
                        (props.objDetails && props.objDetails.medium) ?
                        (`Medium: ${props.objDetails && props.objDetails.medium}`) :
                        ('')
                    }
                </li>
                <li>
                    {
                        (props.objDetails && props.objDetails.dimensions) ?
                        (`Dimensions: ${props.objDetails && props.objDetails.dimensions}`) :
                        ('')
                    }
                </li>
                <li>
                    {
                        (props.objDetails && props.objDetails.objectDate) ?
                        (`Created: ${props.objDetails && props.objDetails.objectDate}`) :
                        ('')
                    }
                </li>
                <li>
                    {
                        (props.objDetails && props.objDetails.culture) ?
                        (`Culture: ${props.objDetails && props.objDetails.culture}`) :
                        ('')
                    }
                </li>
                <li>
                    {
                        (props.objDetails && props.objDetails.creditLine) ?
                        (`Credits: ${props.objDetails && props.objDetails.creditLine}`) :
                        ('')
                    }
                </li>
                <li>
                    {
                        (props.objDetails && props.objDetails.repository) ?
                        (`Current Location: ${props.objDetails && props.objDetails.repository}`) :
                        ('')
                    }
                </li>
            </ul>

            <ul className="artist-bio">
                {
                    (props.objDetails && props.objDetails.artistDisplayName) ?
                    (`Artist: ${props.objDetails && props.objDetails.artistDisplayName}`) :
                    ('')
                }
                <li>
                    {
                        ((props.objDetails && props.objDetails.artistDisplayName) && (props.objDetails && props.objDetails.artistDisplayBio)) ?
                        (`Bio: ${props.objDetails && props.objDetails.artistDisplayBio}`) :
                        ('')
                    }
                </li>
                <li>
                    {
                        ((props.objDetails && props.objDetails.artistDisplayName) && (props.objDetails && props.objDetails.artistBeginDate)) ?
                        (`Born: ${props.objDetails && props.objDetails.artistBeginDate}`) :
                        ('')
                    }
                </li>
                <li>
                    {
                        ((props.objDetails && props.objDetails.artistDisplayName) && (props.objDetails && props.objDetails.artistEndDate)) ?
                        (`Died: ${props.objDetails && props.objDetails.artistEndDate}`) :
                        ('')
                    }
                </li>
            </ul>
            
            <h5>Object ID: {objectID}</h5>
        </div>
    )

    } else {

        return(
            <Route
                exact
                path='/ArtPage/:obj_index'
                component={(navProps) => (
              <div>
                <ArtDetails {...navProps} objDetails={newObject} />
              </div>
            )}
          />
        )
    }



}

export default ArtDetails