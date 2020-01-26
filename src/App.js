import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';
import { getDepts } from './services/apiHelper'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentList: []
    }
  }

  async componentDidMount() {
    let response = await getDepts()
    this.setState({
      departmentList: response.data
    })
    console.log(response.data)
    console.log(response.data.departments[0].displayName)
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
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
