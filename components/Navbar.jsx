import React, {useState} from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Brookies</Link>
      </p>

      <button type='button' className="cart-icon" onClick="">
        <AiOutlineShopping/>
      </button>
      <span className="cart-item-qty">
        1
      </span>
    </div> 
  )
}

export default Navbar