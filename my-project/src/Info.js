import React from 'react'
import Star from './Star'
import About from './About'
import Praice from './praice'
import Subnit from './Subnit' 

function Info() {
    return (
    <div className="info">    
    <Star  source="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Star-PNG-Transparent-Image-2.png"/>
    <About content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam labore modi ducimus quae inventore odio animi? Quidem, provident. Consectetur ullam provident ipsum quia cupiditate, earum necessitatibus officiis voluptatibus fugit! "/>
    <Praice src="http://www.publicdomainpictures.net/pictures/40000/velka/dollar-sign-white.jpg" />
    <Subnit value="buy" />
    
    </div>
    )

    
}










export default Info