import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';
import { getDepts, getObjects, getObjByDept } from './services/apiHelper'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentList: [],
      // objects: [],
      deptObjects: []
    }
  }

  async componentDidMount() {
    let deptsRes = await getDepts()
    // let objectsRes = await getObjects()
    this.setState({
      departmentList: deptsRes.data,
      // objects: objectsRes.data,
    })
    console.log(deptsRes.data)
    // console.log(response.data.departments[0].displayName)
  }

  // async componentDidMount() {
  //   let response = await getObjects()
  //   this.setState({
  //     objects: response.data
  //   })
  //   console.log(response.data)
  // }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <Main deptList={this.state.departmentList} />
        <Footer />
      </div>
    );
  }
}

export default App;
