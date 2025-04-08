import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cities = () => {
  const [cityNames, setCityNames] = useState ([]);

  useEffect(()=>{
   try{
      const getCityNames = async () =>{
      const response = await fetch (`/api/v1/locations`);
      console.log(response);
      const allCities = await response.json();
      setCityNames(allCities);  
    }
    getCityNames();
  }catch(err){
    console.log(err);
  }
  }, []);
  console.log(cityNames);
 };

 return(
  <>
  <ul>
    {cityNames.map((singleCity)=>{
      return(
        <Link key={singleCity.id} to={`/details/${singleCity.id}`}>
          {singleCity.name}
        </Link>
      )
    })}
  </ul>
  </>
 )



export default Cities;