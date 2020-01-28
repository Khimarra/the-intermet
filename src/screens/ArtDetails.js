import React from 'react'

const ArtDetails = (props) => {
    const objectID = props.match.params.obj_index
    console.log(props.objDetails)

    return(
        <div className="art-details">
            <h1 className="object-name">{props.objDetails && props.objDetails.title}</h1>
            <h4 className="artist">By: {props.objDetails && props.objDetails.artistDisplayName}</h4>
            <h4>{props.objDetails && props.objDetails.objectName}</h4>
            <img className="primary-image" src={`${props.objDetails && props.objDetails.primaryImage}`} alt='' />
            <ul className="object-info">Title: {props.objDetails && props.objDetails.title}
                <li>Medium: {props.objDetails && props.objDetails.medium}</li>
                <li>Dimensions: {props.objDetails && props.objDetails.dimensions}</li>
                <li>Created: {props.objDetails && props.objDetails.objectDate}</li>
                <li>Credits: {props.objDetails && props.objDetails.creditLine}</li>
                <li>Current Location: {props.objDetails && props.objDetails.repository}</li>
            </ul>

            <ul className="artist-bio">Artist: {props.objDetails && props.objDetails.artistDisplayName}
                <li>Bio: {props.objDetails && props.objDetails.artistDisplayBio}</li>
                <li>Born: {props.objDetails && props.objDetails.artistBeginDate}</li>
                <li>Died: {props.objDetails && props.objDetails.artistEndDate}</li>
            </ul>
            
            <h5>Object ID: {objectID}</h5>
        </div>
    )
}

export default ArtDetails