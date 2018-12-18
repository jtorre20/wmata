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
      trainPositions: []
    }

    this.filterByColor.bind(this)
  }

  
  
  handleFetch = () => {
    let api_key = process.env.REACT_APP_API_KEY
    let trainsURL = `https://api.wmata.com/TrainPositions/TrainPositions?contentType={TrainPositions}&api_key=${api_key}`
    // console.log("process", process.env.REACT_APP_API_KEY);
  fetch(trainsURL)
  .then(res => res.json())
  .then(results => this.setState({
    trainPositions: results.TrainPositions
  }))
}

filterByColor = (event) => {

  console.log(this)
  // this.state.trainPositions.filter((this.state.trainPositions.LineCode))
}



render() {
  // let dropDownList = document.getElementsByClassName("color")
  // console.log("color", dropDownList)
  // debugger
    return (
      <div className="App">
        <Trains handleFetch={this.handleFetch} trains={this.state.trainPositions} 
        filterByColor={this.filterByColor} />
      </div>
    );
  }
}

export default App;
