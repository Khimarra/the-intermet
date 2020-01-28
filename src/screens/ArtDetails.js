import React from 'react'

const ArtDetails = (props) => {
    const objectID = props.match.params.obj_index

    console.log(objectID)
    return(
        <div className="art-details">
            <h4>Art Details</h4>
        </div>
    )
}

export default ArtDetails