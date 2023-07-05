import React from 'react'
import "../Styles/Footer.scss"

const Footer = () => {
  return (
   <div className="footer">
    <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessorise</span>
        <span>New Arrivals</span>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className="item">
        <h1>About</h1>
        <span> We are on a mission to transform the world of online shopping. We believe that shopping should be convenient, enjoyable, and personalized to your unique preferences. With our cutting-edge technology and commitment to customer satisfaction, we are revolutionizing the way you discover and purchase products.</span>
      </div>
      <div className="item">
       <h1>Contact</h1>
       <span>In case some queries contact us via.</span>
       <span>Gmail</span>
       <span>180 180 0090</span>
      </div>

    </div>
    <div className="bottom">
      <div className="left">
        <span className='logo'>
          Ecom Exx
        </span>
        <span className='copyright'>
          Copyright 2023. All right reserved.
        </span>
      </div>
      <div className="right">
        <img src='/img/img2.png' alt='payment' />
      </div>
    </div>
   </div>
  )
}

export default Footer