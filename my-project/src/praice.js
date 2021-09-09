import React from 'react'
import PropTypes from 'PropTypes'

function Praice( {src}) {
    return(
    <div className="praice">
        <img src={src} alt="praice"/>
        <span className="content-price">300$</span>


    </div>
    )
    
}
Praice.propTypes = {
    src: PropTypes.string.isRequired,
}
export default Praice;