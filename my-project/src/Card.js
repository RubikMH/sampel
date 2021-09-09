import React from "react";

function Card({ src, style, size }) {
  function MySize() {
    if (size === "small") {
     return "50px"
    } else if (size === "medium") {
     return "75px"
    } else {
      return "500px"
    }
    
  }

  return (
    <div className="cards">
      <img src={src} alt="shoe" style={style} width={MySize()} />
    </div>
  );
}
export default Card;
