import React from 'react' 

class Trains extends React.Component {

  render(){
    const { handleFetch } = this.props
    return (
      <div>
        <button type ="submit" class="btn" onClick={() => handleFetch()}>Click here for trains!</button>
      </div>
    )
  }

}

export default Trains;