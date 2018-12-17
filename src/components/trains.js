import React from 'react' 
import Dropdown from './dropdown'
import '../style.css'


class Trains extends React.Component {

  constructor(){
    super()

    this.state ={
      trains: []
    }
  }
  
 

  updatingState = (trains) => {
    this.setState({
      trains: [...this.state.trains,trains]
    })
  }

  onButtonClick = (trainPositions) => {
      // console.log(Object.values(trainPositions[0]))
  }

  render(){

    
    const { handleFetch, trains, filterByColor} = this.props  
    
    return (
      
      <div className="container">
        <div className="button">
          <button type ="submit" className="btn" onClick={() => handleFetch()} >Click here for trains!</button>
          {/* <button type="submit" className="btn">Filter by color</button> */}
          <Dropdown filterByColor={filterByColor}/>

        </div>
        <div className="list">
          <ol>
            {trains.map((train) => {
              return <div>
                <li key={train.TrainId} className="trainList">
                <h2>Train {train.TrainId}</h2>
                {/* <span className="trainList">{train.TrainId}</span> */}
                  <span className="trainList"><h3>Train Number: {train.TrainNumber}</h3></span>
                  <span className="trainList"><h3>Car Count: {train.CarCount}</h3></span>
                  <span className="trainList"><h3>Direction: {train.DirectionNum}</h3></span>
                  <span className="trainList"><h3>Circuit: {train.CircuitId}</h3></span>
                  <span className="trainList"><h3>Destination Code: {train.DestinationStationCode}</h3></span>
                  <span className="trainList"><h3>Line Code: {train.LineCode}</h3></span>
                  <span className="trainList"><h3>Service Type: {train.ServiceType}</h3></span>
                  </li>
                
                </div>
            })}
          </ol>
        </div>
        <div className="button">
        </div>
      </div>

    )
  }

}

export default Trains;