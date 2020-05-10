import React from 'react';
import "./ContactPost.css";



function ContactPost(){
    return(
        <div className="ContactPost">
            <div className="ContactImage"><img id="Dp" src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"/></div>
            <div className="ContactName">Rohan</div>
            <div className="Edit"><button id="EditButton"><img id="EditIcon" src="https://img.icons8.com/ios-glyphs/30/000000/edit.png"/></button></div>
        </div>
    )
}

export default ContactPost