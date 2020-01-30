import React, { useState, useEffect } from 'react'
import { getObjDetails } from '../services/apiHelper'
import { Route } from 'react-router-dom'
import MetLink from '../components/MetLink'
import InfoTable from '../components/InfoTable'
import ArtistTable from '../components/ArtistTable'

const ArtDetails = (props) => {

    const [newObject, setNewObject] = useState([])

    useEffect(() => {
        objDetails()
    }, [])

    const objDetails = async () => { 
        const response = await getObjDetails()
        setNewObject(response)
    }

    const objectID = props.match.params.obj_index

    if(props.objDetails) {
        return(
            <div className="art-details">
                <h1 className="department-title">{props.objDetails && props.objDetails.department}</h1>
                <h1 className="art-title">{props.objDetails && props.objDetails.title}</h1>
                <h4>{props.objDetails && props.objDetails.objectName}</h4>

                <h4 className="artist">
                    {
                        (props.objDetails && props.objDetails.artistDisplayName) ?
                        (`By: ${props.objDetails && props.objDetails.artistDisplayName}`) :
                        ('')
                    }
                </h4>
                <div className="primary-image-container">
                    <img className="primary-image" src={`${(props.objDetails && props.objDetails.primaryImage) ? (props.objDetails && props.objDetails.primaryImage) : ("../images/No_Image_Available.png")}`} alt='' />
                </div>

                <h5>Object ID: {objectID}</h5>


                <InfoTable objDetails={props.objDetails} />
                <ArtistTable objDetails={props.objDetails} />
                <MetLink objDetails={props.objDetails} />

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