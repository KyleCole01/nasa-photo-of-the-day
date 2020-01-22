import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaImage from "./components/NasaImage";
import "./App.css";

function App() {
  const URL = "https://api.nasa.gov/planetary/apod?api_key=wfkg4zpqBKehc5ohI41IKsfdomhRoPDKPCvtB5R1";

  const [header, setHeader] = useState("");
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");
  const [explanation, setExplanation] = useState(""); 
  const [mediaType, setMediaType] = useState("");

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        console.log("response: ", response.data); 
        
          setHeader(response.data.title); 
          setDate(response.data.date); 
          setPhoto(response.data.url); 
          setExplanation(response.data.explanation); 
          setMediaType(response.data.media_type);

          console.log(`Photo of the day is a ${mediaType}`); 
      })
      .catch((error) => {
        console.log("Error: " + error); 
      }); 
  }, []); 
  return (
    <div className="App">
        <NasaImage header={header} date={date} photo={photo} explanation={explanation} mediaType={mediaType}/>
    </div>
  );
}

export default App;
