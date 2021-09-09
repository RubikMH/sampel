import React from 'react'
import PropTypes from 'propTypes'

function Subnit( {value}) {
    return(
        <div className="submit">
        <button className="btn-primary">
            {value}
        </button>
        </div>

    )
    
}
Subnit.propTypes = {
    value : PropTypes.string,
}


export default Subnit