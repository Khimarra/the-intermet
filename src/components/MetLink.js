import React from 'react'

const MetLink = (props) => {

    console.log(props.objDetails)

    return(

        <div>

            <table className="link-table">
                <tbody>
                    <tr>
                        <td>View this object on the Met's site</td>
                        <td><a href={`${props.objDetails && props.objDetails.objectURL}`}>{props.objDetails.objectURL}</a></td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default MetLink 