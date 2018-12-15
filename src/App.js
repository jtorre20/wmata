import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trains from './components/trains';
// import ENV from './.env'

// let subscription = 'fdf972f9606c4e7eb42faba59492f567'
class App extends Component {


  
  
  constructor(props) {
    super(props)
    
    this.state = {
      trains: []
    }
  }
  
  handleFetch = () => {
    let api_key = process.env.REACT_APP_API_KEY
    let trainPositionsURL = `https://api.wmata.com/TrainPositions/TrainPositions?contentType={TrainPositions}&api_key=${api_key}`
    console.log("process", process.env.REACT_APP_API_KEY);
  fetch(trainPositionsURL)
  .then(res => res.json())
  .then(results => console.log(results))

}



  render() {
    return (
      <div className="App">
        <Trains handleFetch={this.handleFetch} />
      </div>
    );
  }
}

export default App;
