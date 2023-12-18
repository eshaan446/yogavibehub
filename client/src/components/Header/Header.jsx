import React from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate=useNavigate();
  const Toast=(message)=>{
    toast.success(message,{
      position:"top-center",
      autoClose:3000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:false,
      draggable:true,
      progress:undefined,
    })
  }

  function handleLogout(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate('/')
    Toast("Logout Successfull");
  }
  
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <Link to="/">
          {/* <img src="/snip.png" alt="Reunion" width={65} height={65}/> */}
          <h1 className="heading">Yoga<span className="headingx">VibeHub</span></h1>
        </Link>
        <div className=" flexCenter h-menu">
        <Link to={'/'}><h3>Home</h3></Link>
          <NavLink to="/addBooking">
            <button className="button">Add Booking</button>
            
          </NavLink>

        </div>
      </div>
      <ToastContainer/>
    </section>

  );
};

export default Header;
