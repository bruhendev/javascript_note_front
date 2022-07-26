import LogoImage from '../../assets/images/logo.png';
import * as C from './style'
import { GoGrabber } from "react-icons/go";

export function Header() {

  function handleShow() {
    document.querySelector(".navegacao").classList.toggle('active')
  }


  return (
    <C.Header>
      <div className='container'>
        <div>
          <img src={LogoImage} alt="logo" />
        </div>
        <button onClick={handleShow}>
          <GoGrabber className='iconb' size={45}/>
        </button>
        <nav className='navegacao'>
          <ul>
            <li>Item 1</li>
          </ul>
        </nav>
      </div>
    </C.Header>
  );
}