import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const userDetails = () => {
  const [ userDetails, setUserDetails ] = useState ({});

  const { userID } = useParams();

  useEffect(() => {
    const getUserDetails = async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/${userId}');
        const singleUserDetails = await response.json();
        setUserDetails(singleUserDetails);
      } catch(err) {
        console.log(err)
      }
    }
    
    getUserDetails();
  }, []);

  return (
    <section>
      <h2>Bill Pickleson</h2>
      <p>{userDetails.username}</p>

      {
        userDetails.address ? <h3>{userDetails.address.city}</h3> : null
      }


      <Link to="/" >BACK</Link>
    </section>
  )
}

export default userDetails
