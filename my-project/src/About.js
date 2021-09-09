import React from 'react'
import PropTypes from 'prop-types'
function About({content}) {
    return (
        <div>
            <p>{content} </p>
        </div>
    )
    
}
About.propTypes = {
    content: PropTypes.string.isRequired,
}
export default About