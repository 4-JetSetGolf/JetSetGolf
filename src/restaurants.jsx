import { useEffect, useState } from "react";

const Restaurants = () => {
  const [restaurantNames, setRestaurantNames] = useState ([]);

  useEffect(()=>{
   try{
      const getRestaurantNames = async () =>{
      const response = await fetch(`/api/v1/restaurants`);
      const allRestaurants = await response.json();
      setRestaurantNames(allRestaurants);  
    }
    getRestaurantNames();
  }catch(err){
    console.log(err);
  }
  }, []);
  
  console.log(restaurantNames);

 return (
  <>
    <ul>
      {restaurantNames.map((singleRestaurantName)=>{
        return(
            <>
                <h2>{singleRestaurantName.name}</h2>
                <h4>{singleRestaurantName.address}</h4>
                <h4>Cuisine: {singleRestaurantName.cuisine}</h4>
            </>
          
        )
      })}
    </ul>
  </>
 );

};

export default Restaurants
