import React from 'react';
// import { fa } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className='footer py-4'>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-4 text-lg-left'>
          Copyright © Global Recovery 2020
        </div>
        <div className='col-lg-4 my-3 my-lg-0'>
          <a className='btn btn-dark btn-social mx-2' href='#!'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className='btn btn-dark btn-social mx-2' href='#!'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className='btn btn-dark btn-social mx-2' href='#!'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='col-lg-4 text-lg-right'>
          <a className='mr-3' href='#!'>
            Privacy Policy
          </a>
          <a href='#!'>Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
