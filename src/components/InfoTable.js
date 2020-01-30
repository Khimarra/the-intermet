import React from 'react'

const InfoTable = (props) => {

    return(
        <div>
            <table className="info-table">
                <tbody>
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
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable