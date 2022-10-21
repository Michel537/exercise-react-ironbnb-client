import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";



function ApartmentDetails(){

    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect( () => {
        axios.get("https://ironbnb-m3.herokuapp.com/apartments/" + id)
        .then((response) => {
            console.log(response)
            setDetails(response.data)
        }).catch((err) => {
            
        });

    }, [id] )



    return(
        <div className="container">
            <h3>{details.title}</h3>
            <img src={details.img} alt="" />
            <p>Price: {details.pricePerDay} </p>
        </div>

    )

}

export default ApartmentDetails;