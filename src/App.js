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
      trainPositions: [],
      filterByRed: false
    }

    // this.filterByColor.bind(this)

    setInterval(() => { this.handleFetch()
    }, 1000);

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


updateFilterByColor = (event) => {
    
        this.setState({
          filterByRed: true
        })

}



render() {

let newTrain;

  if (this.state.filterByRed === true) {
   newTrain = this.state.trainPositions.filter((train) => {
      // return console.log(train)
      return train.LineCode === "RD"
    })
  } else {
    newTrain = this.state.trainPositions
  }
    
  
    return (
      <div className="App">
      <div>
        <button name="RD" className="btn" onClick={this.updateFilterByColor}>Color Filter</button>
        
        
      </div>
        <Trains handleFetch={this.handleFetch} trains={newTrain} 
        filterByColor={this.filterByColor} />
}
        
      </div>
    );
  }
}

export default App;
