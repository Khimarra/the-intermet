import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';
import { getDepts, getObjDetails } from './services/apiHelper'
import { Route } from 'react-router-dom'
import DeptPage from './screens/DeptPage'
import ArtDetails from './screens/ArtDetails';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentList: [],
      objDetails: []
    }
  }

  async componentDidMount() {
    let deptsRes = await getDepts()
    let objDetailsRes = await getObjDetails()
    this.setState({
      departmentList: deptsRes.data,
      objDetails: objDetailsRes.data,
    })
    console.log(objDetailsRes.data)
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>

        <Route 
          exact 
          path='/' 
          component={() => (
            <Main deptList={this.state.departmentList} 
          />)}
        />

        <Route
          exact
          path='/DeptPage'
          component={() => (
            <div>
              <h1>Department Name</h1>
              <DeptPage department={this.state.departmentList} />
            </div>
          )}
        />

        <Route
          exact
          path='/ArtPage'
          component={() => (
            <div>
              <h1>Object Name</h1>
              <ArtDetails objDetails={this.state.objDetails} />
            </div>
          )}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
