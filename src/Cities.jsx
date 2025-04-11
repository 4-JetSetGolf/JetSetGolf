import { useEffect, useState } from "react";

const Cities = () => {
  const [cityNames, setCityNames] = useState ([]);

  useEffect(()=>{
   try{
      const getCityNames = async () =>{
      const response = await fetch(`http://localhost:3000/api/v1/locations`);
      const allCities = await response.json();
      setCityNames(allCities);
    }
    getCityNames();
  }catch(err){
    console.log(err);
  }
  }, []);
  
  console.log(cityNames);

 return (
  <>
    <ul>
      {cityNames.map((singleCityName)=>{
        return(
          <li key= {singleCityName.id}>
            {singleCityName.name}
          </li>
        )
      })}
    </ul>
  </>
 );

 };




export default Cities;