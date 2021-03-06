import React from 'react';
import '../style.css';

class Dropdown extends React.Component {
  constructor(){
    super();
    
    this.state = {
      displayMenu: false
    };

    this.showDropDownMenu = this.showDropDownMenu.bind(this);
    this.hideDropDownMenu = this.hideDropDownMenu.bind(this);
  }

  showDropDownMenu(event) {
    
    event.preventDefault();
    this.setState({ displayMenu: true}, () => {
      document.addEventListener('click', this.hideDropDownMenu)
      // let listColor = document.getElementsByClassName("colorList")
      // debugger
      // console.log(listColor)
      // document.addEventListener('click', this.props.filterByColor())

    });
  }

  hideDropDownMenu() {
    this.setState({ displayMenu: false}, () => {
      document.removeEventListener('click', this.hideDropDownMenu)
    })
  }

  
  handleOnClick = (e) => {
    this.showDropDownMenu(e)
    // this.props.filterByColor(event)
  }

  // handleOnCheck = (e) => {
  //   this.props.filterByColor(e._targetInst.key)
  //   console.log("click")
  // }

  render(){
   
    return(
      <div className="dropdown">
        <div className="dd button" onClick={this.handleOnClick}> Filter by Color</div>

        {this.state.displayMenu  ? (
          // console.log(document.querySelectorAll("li"))
          <div className="colorList">
          <ul >
            
            <li key="RD" onClick={this.props.filterByColor} className="color">Red</li>
            <li key="BL" onClick={this.props.filterByColor} className="color">Blue</li>
            <li key="YL" onClick={this.props.filterByColor} className="color">Yellow</li>
            <li key="OR" onClick={this.props.filterByColor} className="color">Orange</li>
            <li key="GR" onClick={this.props.filterByColor} className="color">Green</li>
            <li key="SV" onClick={this.props.filterByColor} className="color">Silver</li>
          </ul>
          </div>
        
        ) :
        ( null
          )
        }
      </div>
    );
  }
}

export default Dropdown;