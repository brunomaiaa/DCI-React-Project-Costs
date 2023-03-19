import React from 'react';
import styles from './Company.module.css';



function Company() {
  return (
    <div className={styles.company_container}>
      <h1>About Our Company</h1>
      <p>Welcome to our company page! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut felis a sem elementum malesuada. Fusce ut sapien sit amet lectus consectetur ultrices. Praesent rutrum ultricies enim, vel scelerisque neque hendrerit sed. Vestibulum blandit justo risus, at rutrum eros vulputate vitae. Donec tristique bibendum sapien, eu pellentesque odio pharetra sit amet.</p>
      <h2>Our History</h2>
      <p>Our company was founded in 2005 by a team of experienced professionals who recognized a need for better technology solutions in the business world. Since then, we have grown into a global organization with offices in more than 20 countries. Sed at turpis eget purus pretium ultricies. Sed convallis, purus a laoreet fringilla, lacus quam congue urna, nec molestie metus ex non enim.</p>
      <h2>Our Services</h2>
      <p>We offer a wide range of services to help our clients succeed, including:</p>
      <ul>
        <li>Custom software development</li>
        <li>Web and mobile app development</li>
        <li>Data analytics and business intelligence</li>
        <li>Cloud infrastructure and hosting</li>
        <li>IT consulting and support</li>
      </ul>
      <h2>Our Team</h2>
      <p>Our team is made up of talented and experienced professionals who are dedicated to helping our clients succeed. We have specialists in every area of technology, from software development to data analytics, and we work together to provide our clients with the best possible solutions. Aliquam et gravida nibh, quis ullamcorper sapien. Sed tristique ac lorem a mollis. Nullam eget lorem velit. Praesent fermentum, turpis nec aliquam sodales, felis purus dictum mauris, sit amet molestie enim mauris a elit.</p>
      
    </div>
  );
}


export default Company;
