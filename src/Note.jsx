
import React from "react";

/*
function Note() {
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
      <div>      <h1 className="heading" style={customStyle}>
        {text}
      </h1></div>

    );
  }
  

*/
function Note(){
  let childBox = {
    
    height: "11vh",
    width: "20vw" ,
    backgroundColor: "white",
    boxShadow: '5px 5px 5px #F4AAB9',
    margin: '1em',
    padding: '1em',
    /* position: "absolute",
    top: "50%",
    left: "50%",
    */
  }

  // text overflows the div. fix that
  // learn github commits again and commit the changes

  return(
  <div className="parentBox" style={childBox}>
      < div> <h3 style={{fontWeight:"bolder"}}> asdsad</h3>
      <h3 style={{fontWeight:"lighter"}}>h3asddasdasas</h3>
        </div>
  </div>
)}


export default Note;