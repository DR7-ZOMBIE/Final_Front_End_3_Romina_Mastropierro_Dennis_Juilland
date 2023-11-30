import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBahai } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
        <p>
        <FontAwesomeIcon icon={faBahai} rotation={90} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#000000",}} />
        </p>
        <img src="./images/DH.png" alt='DH-logo' />
        <ul className='list_Iconos'>
          <li><img src="./images/ico-facebook.png" alt="facebook" /></li>
          <li><img src="./images/ico-instagram.png" alt="instagram" /></li>
          <li><img src="./images/ico-tiktok.png" alt="tiktok" /></li>
          <li><img src="./images/ico-whatsapp.png" alt="whatsapp" /></li>
        </ul>
    </footer>
  )
}

export default Footer
