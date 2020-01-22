import React from "react";

const MediaType = (props) =>{
    return <iframe  className="nasaImg" src = {props.url} allow="autoplay" allowFullScreen title={props.title} alt="nasa image" ></iframe>
}
export default MediaType;


// <iframe width="1588" height="759" src="https://www.youtube.com/embed/hgzGET6owYk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>