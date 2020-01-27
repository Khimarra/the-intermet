import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';
import { getDepts, getObjDetails } from './services/apiHelper'
import { Route } from 'react-router-dom'

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
      objects: objDetailsRes.data,
    })
    console.log(objDetailsRes.data)
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <Route exact 
        path='/' 
        component={() => (        <Main deptList={this.state.departmentList} />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
