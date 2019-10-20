import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles.css';

import Header from './components/header_footer/Header.jsx';
import Main from './components/core/StudentMain.js';
import Footer from './components/header_footer/Footer.js';

import StudantData from './components/questions_data/studantData';

import Router from './App';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Score: 0,
        amplifier: 1,
    }
}

  render() {
    return (
      <div className="App">
          <Header />
          <Main data = {StudantData}/>
          <Footer />
      </div>
    );
  }
}

export default App
//ReactDOM.render(<App/>, document.getElementById('root'));

