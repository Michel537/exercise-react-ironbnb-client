import { Link } from "react-router-dom";

function ApartmentsList({ apartments}){

   


    return(

        <section className="container">
        <h1>List of Apartments</h1>

        {apartments.map( apartment => {
            return (
                <div className="container">
                    <h3>Title: {apartment.title} </h3>
                    <img src={apartment.img} alt="apartmentPicture" />
                    <p>Price: {apartment.pricePerDay}</p>
                    <Link to={`/apartments/${apartment._id}`}>More details</Link>
                </div>
            )
        })}

        </section>

    )

}

export default ApartmentsList;