import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Title from './components/Title';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <header>
          <Header />
        </header>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
