import React from 'react' 


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

    
    const { handleFetch, trains} = this.props  
    
    return (
      
      <div className="container">
        <div className="button">
          <button type ="submit" className="btn" onClick={() => handleFetch()} >Click here for trains!</button>
        </div>
        <div className="list">
          <ol>
            {trains.map((train) => {
              return <li key={train.TrainId}>{train.TrainId}</li>
            })}
          </ol>
        </div>
      </div>

    )
  }

}

export default Trains;