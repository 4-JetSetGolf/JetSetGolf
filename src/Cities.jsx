import { useEffect, useState } from "react";
import './Cities.css' 

const Cities = () => {
  const [cityNames, setCityNames] = useState ([]);

  useEffect(()=>{
   try{
      const getCityNames = async () =>{
      const response = await fetch(`/api/v1/locations`);
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
  <div class='body'>
    <ul>
      {cityNames.map((singleCityName)=>{
        return(
          <li key= {singleCityName.id}>
            {singleCityName.name}
          </li>
        )
      })}
    </ul>
    <div class='gridcontainer' >
      <img src="https://images.ctfassets.net/56u5qdsjym8c/27b7xXTDgAhfKm8oVuf2ir/5ecaf65211d7b827316cdced6aebea81/grayhawkhero.png?fl=progressive&q=80" alt="phoenix golf" width='300' height='200' ></img>
      <img src="https://golfweek.usatoday.com/gcdn/authoring/images/smg/2024/11/17/SGLF/76326353007-87-778066287.jpeg" alt="new york golf" height='200' width='300'></img>
      <img src="https://cdn.choosechicago.com/uploads/2019/06/golf-courses.jpg" alt="chicago golf" width='300' height='200'></img>
      <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_566,q_65,w_768/v1/crm/houston/8RTC0319.R0_3c358c0f-970f-f406-0b6875fe12b69170.jpg" alt="houston golf" height='200' width='300'></img>
      <img src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/course-photos-for-places-to-play/los-angeles-country-club-north-1157.jpg.rend.hgtvcom.966.544.suffix/1685667113708.jpeg" alt="LA golf" height='200' width='300'></img>
    </div>
  </div>
 );

 };




export default Cities;