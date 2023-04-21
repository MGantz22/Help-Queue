import React from "react";
import ticketsImage from "./../images/tickets.png";

function Header(){
  return (
    <React.Fragment>
      
      <img src={ticketsImage} alt="An image of orange tickets" />
    </React.Fragment>
  );
}

export default Header;