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
    });
  }

  hideDropDownMenu() {
    this.setState({ displayMenu: false}, () => {
      document.removeEventListener('click', this.hideDropDownMenu)
    })
  }

  render(){
    return(
      <div className="dropdown">
        <div className="dd button" onClick={this.showDropDownMenu}> Filter by Color</div>

        {this.state.displayMenu ? (
          <ul>
            <li>Red</li>
            <li>Blue</li>
            <li>Yellow</li>
            <li>Orange</li>
            <li>Green</li>
            <li>Silver</li>
          </ul>
        ) :
        ( null
          )
        }
      </div>
    );
  }
}

export default Dropdown;