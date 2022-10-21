
import axios from 'axios';
import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";

function App() {

  const [ apartments, setApartments ] = useState([]);

 

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = () => {
    axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      .then(response => {
        
        setApartments(response.data);
      })
      .catch(e => console.log("error getting characters from API", e));
  }





  return (
    <div className="App">
      <NavBar />      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments/create" element={<CreateApartment callBackToList={fetchApartments} />} />
        <Route path="/apartments" element={<ApartmentsList apartments={apartments} />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />
        

      </Routes>
      

    </div>
  );
}

export default App;
