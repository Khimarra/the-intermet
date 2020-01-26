import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';

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
