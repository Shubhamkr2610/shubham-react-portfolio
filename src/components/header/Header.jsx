import React from 'react';
import './header.css';
import {herologo2} from '../../asset/index.js';

export const Header = () => {
  return (
    <>
    <div className='header-container'>
      <div className='hero-header'>
        {/* <img src={herologo2} alt="" /> */}
        shubham
      </div>
      <div className='link-container'>
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href="">Blog</a>
      </div>
    </div>
    </>
  )
}
