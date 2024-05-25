import './index.css'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const onClickLogout = () => {
    console.log("Logout")
    Cookies.remove("jswToken");
    navigate("/login");
  };
  return (

    <div className='nav-bar-cont'>
      <ul className='nav-bar'>
        <li>
          <Link to = "/">
            <img className='header-website-logo ml-4' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="website-logo" />
          </Link>
        </li>
        <li>
          <Link to = "/" className='n-link'>
            Home
          </Link>
          <Link to = "/jobs" className='n-link'>
            Jobs
          </Link>
        </li>
        <li>
          <button onClick={onClickLogout} type='submit' className='btn btn-danger'>
            Logout
          </button>
        </li>
      </ul>
      </div>
    
  );
};

export default Header;
