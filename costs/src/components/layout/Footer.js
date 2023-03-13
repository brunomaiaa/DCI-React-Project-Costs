import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={Styles.footer}>
        <ul className={Styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
            <p className={Styles.copy_right}>
                <span>© 2023</span> Costs
            </p>
        </ul>
    </footer>
  )
}
