import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <Link to='/' >Home</Link>
<<<<<<< HEAD


=======
>>>>>>> 8f51950946a26d045adff5b0ca2053b23c4aa9a9
      <Link to='/courses' >Courses</Link>
      <Link to='/hotels' >Hotels</Link>
      <Link to='/locations' >Cities</Link>
      <Link to='/restaurants' >Restaurants</Link>
      <Link to='/account' >Account Details</Link>
      <Link to='/login' >Log In</Link>
    </nav>
  )
}

export default NavBar;