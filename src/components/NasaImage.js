import React from "react";
import MediaType from "./MediaType";

const NasaImage = (props) => {
    console.log("nasaImage:",props);
    return(
        <div className="image-container">
            <h1 className="title">{props.header}</h1>
            <p className="date">{`Date ${props.date}`}</p>
            <MediaType type={props.MediaType} url={props.photo} title={props.header}  />
            <p className="explain" >{props.explanation}</p>
        </div>
    )
}
export default NasaImage;