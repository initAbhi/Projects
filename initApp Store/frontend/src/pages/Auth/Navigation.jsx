import React from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
;
import {useLoginMutation} from '../../redux/api/usersApiSlice';
import {logout} from '../../redux/features/auth/authSlice'



const Navigation = () => {

  const {userInfo}  = useSelector(state => state.auth)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLoginMutation()
  const logoutHandler = async () => {
    try{
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    }catch(error) {
      console.log(error)
    }
  }
  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      } xl:flex lg:flex md:hidden sm:hidden p-2 flex-col justify-between items-start text-white bg-black w-[4%] hove:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4 ">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">Home</span>{" "}
        </Link>
        <Link
          to="/shop"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">Shop</span>{" "}
        </Link>
        <Link
          to="/cart"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineShoppingCart className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">Cart</span>{" "}
        </Link>
        <Link
          to="/favourite"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <FaHeart className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">Favourite</span>{" "}
        </Link>
      </div>

      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center text-gray-800 focus:outline-none">
          {userInfo ? <span className="text-white">{userInfo.username}</span> : (<></>)}
        </button>
      </div>

      <ul>
        <li>
        <Link
          to="/login"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineLogin className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">Login</span>{" "}
        </Link>
        <Link
          to="/register"
          className="flex items-center transition-transform transform hover:translate-x-2"
        >
          <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">Register</span>{" "}
        </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
