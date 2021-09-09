import React from "react";
import PropTypes from "prop-types";

function Star({ source }) {
  return (
    

    <div className="star">
      <img src="http://pluspng.com/img-png/star-png-star-empty-png-2000.png" alt="star" />
      <img src={source} alt="star" />
      <img src={source} alt="star" />
      <img src={source} alt="star" />
      <img src={source} alt="star" />
      

    </div>
  );
}
Star.propTypes = {
  source: PropTypes.string.isRequired,
}

export default Star;
