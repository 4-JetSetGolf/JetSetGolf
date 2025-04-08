import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CityDetails = () => {
  const [ detailsOfCity, setCityDetails ] = useState({});
  const { cityId } = useParams();

  useEffect(()=>{
    const getCityDetails = async()=>{
      try{
        const response = await fetch(`/api/v1/locations/${cityId}`);
        const singleCityDetails = await response.json();
        setCityDetails(singleCityDetails);
      }catch(err){
        console.log(err)
      };
    };
    getCityDetails();
  }, []);

  return(
    <>
    <h2>{detailsOfCity.name}</h2>
    <p>display hotels</p>
    <p>display restaurants</p>
    <p>display courses</p>
    

    <Link to='/'>Back </Link>
    </>
  )
}

export default CityDetails;