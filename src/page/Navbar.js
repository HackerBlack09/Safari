import logo from "../img/Logo.svg"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { MdShoppingCart } from "react-icons/md"
import { Home } from "../companets/Home.js"
import { Clothes } from "../companets/Clothes.js"
import { Shoes } from "../companets/Shoes.js"
import { Accessories } from "../companets/Accessories.js"
import { User } from "../companets/User.js"
import { Cart } from "../companets/Cart.js"
import { useState } from "react";

export function Navbar() {

    const [search, setSearch] = useState("");

    return (
        <>
            <Router>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/clothes"}>Clothes</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/shoes"}>Shoes</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/accessories"}>Accessories</NavLink>
                            </li>
                        </ul>
                        <img src={logo} alt="" className="nav_logo" />
                        <div className="icons">
                            <div className="ic_in">
                                <input type="search" name="" id="" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                                <p className="ic_serch"><AiOutlineSearch /></p>
                            </div>
                            <NavLink to={"/user"}><p className="ic_user"><FaUserAlt /></p></NavLink>
                            <NavLink to={"/cart"}><p className="ic_cart"><MdShoppingCart /></p></NavLink>
                            <NavLink to={"/like"}><p className="ic_heart"><AiFillHeart /></p></NavLink>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clothes" element={<Clothes />} />
                    <Route path="/shoes" element={<Shoes />} />
                    <Route path="/accessories" element={<Accessories />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </>
    )
}