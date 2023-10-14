import React from "react";


function Header() {
    const date = new Date();
    let time = date.getHours();
    let text = " ";
  
    let customStyle = {
      color: ""
    };
  
    if (time <= 12 && time >= 0) {
      text = "good morning";
      customStyle.color = "red";
    } else if (time < 18 && time > 12) {
      text = "good evening";
      customStyle.color = "green";
    } else if (time >= 18) {
      text = "good night";
      customStyle.color = "blue";
    }
  
    return ( // header element. adjust height and width. place the name Keeper on the left


    <header>
    <h1 
   
    className="header"> Keeper
  </h1></header>

    );
  }
  
  export default Header;
  