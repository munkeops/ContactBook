import React from 'react';
import "./ContactPost.css";
import $ from 'jquery';



class ContactPost extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            number:this.props.number
        }

    }
    getRandomColor(){
        var list=["lightskyblue","peru","pink","purple","red","white","gold","aqua","lightgreen"]
        var i=Math.floor(Math.random() * list.length);
        return list[i]
    }
    // setRandomColor() {
    //     $("#Dp").css("background-color", this.getRandomColor());
    //   }
    // <img src="https://img.icons8.com/metro/26/000000/gender-neutral-user.png"/>
    render(){
        return(
            <div className="ContactPost">
                <div className="ContactImage"><img id="Dp" style={{"background-color":this.getRandomColor()}} src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"/></div>
                <div className="ContactName">{this.state.name}</div>
                <div className="Edit"><button id="EditButton"><img id="EditIcon" src="https://img.icons8.com/ios-glyphs/30/000000/edit.png"/></button></div>
            </div>
        )

    }
    
}

export default ContactPost