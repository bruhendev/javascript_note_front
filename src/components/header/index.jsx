import LogoImage from '../../assets/images/logo.png';
import * as C from './style'
import { GoGrabber } from "react-icons/go";
import { Link } from 'react-router-dom';

export function Header() {

  function handleShow() {
    document.querySelector(".navegacao").classList.toggle('active')
  }


  return (
    <C.Header>
      <div className='container'>
        <div>
          <Link to="/">
            <img src={LogoImage} alt="logo" />
          </Link>

        </div>
        <button onClick={handleShow}>
          <GoGrabber className='iconb' size={45} />
        </button>
        <nav className='navegacao'>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login" className='register'>Login</Link></li>
          </ul>
        </nav>
      </div>
    </C.Header>
  );
}