import React from 'react'
import ArtButton from '../components/ArtButton'

const DeptPage = (props) => {

    return (
        <div className='dept-page-images'>
            <h1>Dept Page</h1>

            {/* component={(navProps) => (
              <DeptPage {...navProps} deptList={this.state.departmentList} onClick={this.handleNavToArtDetails} />
          )} */}


            <ArtButton deptList={props.deptList} onClick={props.onClick} />
            
        </div>
    )
}

export default DeptPage