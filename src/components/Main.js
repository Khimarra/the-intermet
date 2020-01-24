import React from 'react'
import ArtDetails from './ArtDetails'
import DeptPage from './DeptPage'

class Main extends React.Component {
    render () {
        return (
            <div>
                <h2>Main</h2>
                <DeptPage />
                <ArtDetails />
            </div>
        )
    }
}

export default Main