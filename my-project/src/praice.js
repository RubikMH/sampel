import React from 'react'

function Praice( {src}) {
    return(
    <div className="praice">
        <img src={src} alt="praice"/>
        <span className="content-price">300$</span>


    </div>
    )
    
}
export default Praice;