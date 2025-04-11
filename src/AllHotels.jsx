import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllHotels = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/hotels");
        console.log(response);
        const data = await response.json();
    
        setHotels(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHotels();
  }, []);
  if (hotels.length === 0) {
    return <p>No hotels to show...</p>;
  }
  return (
    <>
      <h1> hotels </h1>
      <div id="hotels">
        {hotels.map((hotel) => {
          return (
            <article
              key={hotel.id}
              className="book-card"
              onClick={() => navigate(`/hotels/${hotel.id}`)}
            >
              <h3>{hotel.name}</h3>

              <p>{hotel.location_id}</p>
            </article>
          );
        })}
      </div>
    </>
  );
};
export default AllHotels;
