import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    quote: ''
  }

  componentDidMount() {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        this.setState({
          quote: response.data[0]
        });
      });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.state.quote}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
