import React from 'react'
import DeptPage from './DeptPage'
import ArtDetails from './ArtDetails'

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