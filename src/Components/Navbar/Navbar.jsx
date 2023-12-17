import React from "react";
import { useState } from "react";
import "./Navbar.css"
import logo from "../Assets/logo_for_store.png"
import { Link } from "react-router-dom";
const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>PANTS4U</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home") }}><Link style = {{textDecoration: "none"}} to="/">Home</Link>{menu === "home" ? <hr /> :<></>}</li>
        <li onClick={() => { setMenu("catalog") }}><Link style = {{textDecoration: "none"}} to="/catalog">Catalog</Link>{menu === "catalog" ? <hr /> :<></>}</li>
        <li onClick={() => { setMenu("cart") }}><Link style = {{textDecoration: "none"}} to="/cart">Cart</Link>{menu === "cart" ? <hr /> :<></>}</li>
      </ul>
    </div>
  )
}

export default Navbar