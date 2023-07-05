import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import "../Styles/Header.scss"
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Header = () => {

  const products = useSelector(state=>state.cart.products)

  const [open, setOpen] = useState(false);

  return (
   <div className="navbar">
    <div className="wrapper">
      <div className="left">
        <div className="item">
          <img src='/img/img.png' alt='logo' />
          {/* <KeyboardArrowDownIcon/> */}
        </div>
        <div className="item">
          <span>Festive Season </span>
          {/* <KeyboardArrowDownIcon/> */}
        </div>
        <div className="item">
          <Link className="link" to="/products/1">Find Your One</Link>
        </div>
        {/* <div className="item">
          <Link className="link" to="/products/2">Men</Link>
        </div>
        <div className="item">
          <Link className='link' to="/products/3">Children</Link>
        </div> */}
      </div>
      <div className="center">
        <Link className="link" to={"/"}>Ecom Exx</Link>
      </div>
      <div className="right">
      <div className="item">
        <Link className="link" to={"/"}>Home</Link>
      </div>
      <div className="item">
        <Link className="link" to={"/"}>About</Link>
      </div>
      <div className="item">
        <Link className="link" to={"/"}>Contact</Link>
      </div>
      <div className="item">
        <Link className="link" to={"/"}>Stores</Link>
      </div>
      <div className="icons">
        {/* <SearchIcon /> */}
        {/* <PersonOutlineOutlinedIcon /> */}
        <FavoriteBorderOutlinedIcon />
        <div className="cartIcon" onClick={()=>setOpen(!open)} >
          <ShoppingCartOutlinedIcon />
          <span>{products.length}</span>
        </div>
      </div>
      </div>
    </div>
    {open && <Cart/>}
   </div>
  )
}

export default Header