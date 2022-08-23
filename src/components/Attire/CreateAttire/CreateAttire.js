import { useState } from "react";
import Axios from "axios";

const CreateAttire = () => {
    const [availabilityFlag, setAvailabilityFlag] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [title, setTitle] = useState("");
    const [createdByID, setCreatedByID] = useState("");
    const [maxDays, setMaxDays] = useState(0);
    const [imageURL, setImageURL] = useState("imagUrl");
    const [locationID, setLocationID] = useState("");
    const [priceID, setPriceID] = useState("");
    const [createDate, setCreateDate] = useState("");
    const [attireDescription, setAttireDescription] = useState("");

    function handleOpenWidget(e){
        e.preventDefault();
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dfmxbcddb', 
            uploadPreset: 'krdozupg'}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log(result.info.url)
                // setImages(prev => [...prev, { url: result.info.url, public_id: result.info.public_id}]); 
                setImageURL(result.info.url); 
              }
            }
          )
          myWidget.open();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5000/api/attires/", {
            availabilityFlag,
            categoryID,
            title,
            createdByID,
            maxDays,
            imageURL,
            locationID,
            priceID,
            createDate,
            attireDescription,
        })
          .then((response) => {
            console.log("response coming from axios");

          })
          .catch((error) => {
            console.log(error)
          });
      };

  return (
    <div className="App">
    <h1>CreateAttire</h1>

    <label >availabilityFlag</label>
    <input type="text" 
           onChange={(e) => setAvailabilityFlag(e.target.value)}
           value={availabilityFlag}
           style={{background:"#f0f0d0",padding:"5px"}}/> <br />

    <label >categoryID</label>
    <input type="text" 
           onChange={(e) => setCategoryID(e.target.value)}
           value={categoryID}
           style={{background:"#f0f0d0",padding:"5px"}}/> <br />

    <label >title</label>
    <input type="text" 
           onChange={(e) => setTitle(e.target.value)}
           value={title}
           style={{background:"#f0f0d0",padding:"5px"}}/><br />

    <label >createdByID</label>
    <input type="text" 
           onChange={(e) => setCreatedByID(e.target.value)}
           value={createdByID}
           style={{background:"#f0f0d0",padding:"5px"}}/><br />

    <label >maxDays</label>
    <input type="number" 
           onChange={(e) => setMaxDays(e.target.value)}
           value={maxDays}
           style={{background:"#f0f0d0",padding:"5px"}}/><br />


    <label >locationID</label>
    <input type="text" 
           onChange={(e) => setLocationID(e.target.value)}
           value={locationID}
           style={{background:"#f0f0d0",padding:"5px"}}/><br />

    <label >priceID</label>
    <input type="text" 
           onChange={(e) => setPriceID(e.target.value)}
           value={priceID}
           style={{background:"#f0f0d0",padding:"5px"}}/><br />

    <label >createDate</label>
    <input type="text" 
           onChange={(e) => setCreateDate(e.target.value)}
           value={createDate}
           style={{background:"#f0f0d0",padding:"5px"}}/><br />

    <label >attireDescription</label>
    <input type="text" 
           onChange={(e) => setAttireDescription(e.target.value)}
           value={attireDescription}
           style={{background:"#f0f0d0",padding:"5px"}}/><br />
           
    <button id='upload-widget' className='cloudinary-button' onClick={handleOpenWidget}>Upload Image</button> <br />

    <button onClick={handleSubmit}>POST</button>
    </div>

  )
}

export default CreateAttire