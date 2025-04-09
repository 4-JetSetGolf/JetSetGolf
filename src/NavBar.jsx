import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/courses' >Courses</Link>
      <Link to='/locations' >Cities</Link>
      <Link to='/restaurants' >Restaurants</Link>
      <Link to='/account' >Account Details</Link>
      <Link to='/login' >Log In</Link>
    </nav>
  )
}

export default NavBar;