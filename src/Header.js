import React from 'react';
import './Header.css';


// Class Component
/*class Header extends React.Component {
  render(){ 
    return(
     <div className="header">
         {this.props.homePage}
     </div>
    )
  }
}*/

// Functional Component
const Header = function (param) {
  return(
    <div className="header">
         {param.homePage}
     </div>
  )
}

export default Header;