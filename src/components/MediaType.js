import React from "react";

const MediaType = (props) =>{
    console.log("media type is",props.mediaType);
    if(props.type === "video"){
    return <iframe  className="nasaImg" src = {props.url} allow="autoplay" allowFullScreen title={props.title} alt="nasa image" ></iframe>
}

    else{
        return (
        
        <a href={props.url}target="_blank">
        <img class="nasaImg" src={props.url} alt={props.title}></img>
        </a>
        
        )
    }
}
export default MediaType;


