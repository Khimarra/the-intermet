import React from 'react'

const ArtistTable = (props) => {
    return(
        <div>
            <table className="artist-table">
                <tbody>
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
                </tbody>
            </table>
        </div>
    )
}

export default ArtistTable