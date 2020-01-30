import React, { useState, useEffect } from 'react'
import { getObjDetails } from '../services/apiHelper'
import { Route } from 'react-router-dom'

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

                <table className="info-table">
                    <tr>
                        <td>Title</td>
                        <td>{props.objDetails && props.objDetails.title}</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>
                            {(props.objDetails && props.objDetails.medium) ?
                            (props.objDetails && props.objDetails.medium) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>
                            {(props.objDetails && props.objDetails.dimensions) ?
                            (props.objDetails && props.objDetails.dimensions) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Date Created</td>
                        <td>
                            {(props.objDetails && props.objDetails.objectDate) ?
                            (props.objDetails && props.objDetails.objectDate) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Associated Culture</td>
                        <td>
                            {(props.objDetails && props.objDetails.culture) ?
                            (props.objDetails && props.objDetails.culture) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Credits</td>
                        <td>
                            {(props.objDetails && props.objDetails.creditLine) ?
                            (props.objDetails && props.objDetails.creditLine) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Current Location</td>
                        <td>
                            {(props.objDetails && props.objDetails.repository) ?
                            (props.objDetails && props.objDetails.repository) :
                            ('')}
                        </td>
                    </tr>

                </table>

                <table className="artist-table">
                    <tr>
                        <td>Artist</td>
                        <td>
                            {(props.objDetails && props.objDetails.artistDisplayName) ?
                            (props.objDetails && props.objDetails.artistDisplayName) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>
                            {((props.objDetails && props.objDetails.artistDisplayName) && (props.objDetails && props.objDetails.artistDisplayBio)) ?
                            (props.objDetails && props.objDetails.artistDisplayBio) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Born</td>
                        <td>
                            {((props.objDetails && props.objDetails.artistDisplayName) && (props.objDetails && props.objDetails.artistBeginDate)) ?
                            (props.objDetails && props.objDetails.artistBeginDate) :
                            ('')}
                        </td>
                    </tr>
                    <tr>
                        <td>Died</td>
                        <td>
                            {((props.objDetails && props.objDetails.artistDisplayName) && (props.objDetails && props.objDetails.artistEndDate)) ?
                            (props.objDetails && props.objDetails.artistEndDate) :
                            ('')}
                        </td>
                    </tr>
                </table>
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