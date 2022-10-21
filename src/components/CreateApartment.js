import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApartment(props) {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();



  const handleSubmit = (e) => {

    e.preventDefault();

    const newAprt = {
       img: img,
       title: title,
       pricePerDay: price, 
    }

    axios.post("https://ironbnb-m3.herokuapp.com/apartments", newAprt)
    .then( resp => {
        console.log("You added a new apartment "+ resp.title)
        props.callBackToList();
        navigate("/apartments")    
    })
    .catch(e => console.log("error getting characters from API", e));

    




    setTitle("");
    setPrice("");
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="title-form">Name</label>
          <input
            id="title-form"
            type="text"
            name="title"
            value={title}
            placeholder="Ttitle here"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="price-form">Price</label>
          <input
            id="price-form"
            type="number"
            name="pricePerDay"
            value={price}
            min="1"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
        <label for="img-form">Img</label>
        <label for="title-form">Name</label>
          <input
            id="img-form"
            type="text"
            name="img"
            value={img}
            placeholder="Img adress here"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary">Create Apartment</button>
      </form>
    </div>
  );
}

export default CreateApartment;
