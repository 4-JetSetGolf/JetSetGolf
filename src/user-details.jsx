import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './user-details.css';

function userDetails() {
  const [userDetails, setUserDetails] = useState({});

  const { userId } = useParams();

  function App() {
    return (
      <Routes>
        <Route path="/account/:userdetails" element={<userDetails />} />
      </Routes>
    );
  }

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await fetch(`api/v1/user-details/${userId}`);
        const singleUserDetails = await response.json();
        setUserDetails(singleUserDetails);
      } catch (err) {
        console.log(err);
      }
    };

    getUserDetails();
  }, []);

  return (
    <section id="memberpage">
      <h2 id="member">Bill Pickleson</h2>
      <li id="points">Rewards</li>
      <li id="points">Offers</li>
      <li id="points">Refer a Friend</li>
     

      <p>{userDetails.username}</p>
      
      {userDetails.address ? <h3>{userDetails.address.city}</h3> : null};


      <Link to="/">BACK</Link>
    </section>
  );
}

export default userDetails
