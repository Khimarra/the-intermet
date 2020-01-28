import React from 'react'

const ArtDetails = (props) => {
    const objectID = props.match.params.obj_index
    console.log(props.objDetails)

    return(
        <div className="art-details">
            <h1 className="object-name">{props.objDetails && props.objDetails.title}</h1>
            <h4>{props.objDetails && props.objDetails.objectName}</h4>
            <h5>Object ID: {objectID}</h5>
        </div>
    )
}

export default ArtDetails