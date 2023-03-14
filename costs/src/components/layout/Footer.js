import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Styles from './Footer.module.css';

export default function Footer() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const isIconActive = (iconName) => {
    return iconName === activeIcon ? Styles.active_icon : '';
  };

  return (
    <footer className={Styles.footer}>
      <ul className={Styles.social_list}>
        <li>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            onClick={() => handleClick('facebook')}
            className={isIconActive('facebook')}
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            onClick={() => handleClick('instagram')}
            className={isIconActive('instagram')}
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/feed/'
            target='_blank'
            onClick={() => handleClick('linkedin')}
            className={isIconActive('linkedin')}
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={Styles.copy_right}>
        <span>Costs</span> © 2023
      </p>
    </footer>
  );
}
