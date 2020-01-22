import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaImage from "./components/NasaImage";
import "./App.css";
import Calendar from "react-calendar";

function App() {
  const URL = "https://api.nasa.gov/planetary/apod?api_key=wfkg4zpqBKehc5ohI41IKsfdomhRoPDKPCvtB5R1";

  const [header, setHeader] = useState("");
  const [date, setDate] = useState("2020-01-21");
  const [photo, setPhoto] = useState("");
  const [explanation, setExplanation] = useState(""); 
  const [mediaType, setMediaType] = useState("");

  function returnDateValue(date){
  setDate(formatDateString(new Date(date).toLocaleDateString("en-US")));
  }
  function formatDateString(date){
    // 2020-01-21 what it needs
    // 1/3/2020 what I have
    console.log('Current date format is', date);
    let newDate = date.split('/');
    let returnedDate = [newDate[2],"-",newDate[0],"-",newDate[1]];
    let returnedString = returnedDate.join('')
    return returnedString
  }
  let dateValue= new Date(date);

  

  useEffect(() => {
    axios.get(URL+`&date=${date}`)
      .then((response) => {
          setHeader(response.data.title); 
          console.log("date is",response.data.date);
          setDate(response.data.date);
          setPhoto(response.data.url); 
          setExplanation(response.data.explanation); 
          setMediaType(response.data.media_type);
          
          
      })
      .catch((error) => {
        console.log("Error: " + error); 
      }); 
  }, [date]); 
  return (
    <div className="App">
        <h1 className="headline">Nasa Images APOD</h1>
        <NasaImage header={header} date={date} photo={photo} explanation={explanation} mediaType={mediaType}/>
        <h3>Care to select a different date?</h3>
        <Calendar className="calendar" value={dateValue} onChange={returnDateValue} calendarType="ISO 8601" />
    </div>
  );
}

export default App;
