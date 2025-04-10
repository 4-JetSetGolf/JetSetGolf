import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Hotel = (props) => {
    const { id } = useParams();
    const [singleHotel, setSingleHotel] = useState({});
    console.log(singleHotel);

    useEffect(() => {
        const fetchSingleHotel = async () => {
          try {
            const response = await fetch(
              `/api/v1/Hotels/${id}`
            );
            const data = await response.json();
            setSingleHotel(data.Hotels);
          } catch (err) {
            console.error(err);
          }
        };
        fetchSingleHotel();
      }, []);
      if (singleHotel.length === 0) {
        return <p>No Hotel to show...</p>;
      }
    
    return(
        <>
        <h2>Hotels</h2>

        {
        //condition    ? what to do if the condition is true : what to do if condition is false
        id ? <h2>Name: { singleHotel.name }</h2> : null
        }
        
        
        </>
        
    )
}

export default Hotel;