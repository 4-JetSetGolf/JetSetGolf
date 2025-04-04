import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/login' >Log In</Link>
      <Link to='/courses' >Courses</Link>
      <Link to='/cities' >Cities</Link>
      <Link to='/account' >Account Details</Link>
    </nav>
  )
}

export default NavBar;