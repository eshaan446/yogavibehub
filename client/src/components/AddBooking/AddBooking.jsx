import React, { useState } from "react";
import Header from "../Header/Header";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Lottie from 'lottie-react'
import animation from './animation.json'
import animation1 from './animation1.json'
import animation2 from './animation2.json'

const AddBooking = () => {
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [age, setAge] = useState('');
  const [batch, setBatch] = useState("6-7AM");
 

  const fetchdata = async (data) => {
    console.log(data);
    //console.log(JSON.stringify(data))
    try {
      let response = await fetch(
        "https://yogavibehub-server.vercel.app/api/addBooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({data}), // Pass data directly
        }
      );
      let responseData = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Payment was successful! ThankYou!",
          icon: "success",
          confirmButtonColor:'#4066ff'
          
        });
        setName('')
      setAge('')
      setBatch('')
        navigate('/')
      }
    } catch (error) {
      setName('')
      setAge('')
      setBatch('')
      Swal.fire({
        title: "You already have a booking!",
        text: "You can book again after 30 days.",
        icon: "error",
        confirmButtonColor:'#4066ff'
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      age,
      batch,
    };
    fetchdata(data);
  };
  
  return (
    <div>
      <Header />
      <h2 className=" heading innerWidth">Add your booking:</h2>
      <div style={{display:"flex"}}>
      <Lottie style={{ marginTop:'1rem', height:'15rem'}} className="innerWidth" animationData={animation}/>
      <Lottie style={{ marginTop:'1rem', height:'15rem'}} className="innerWidth" animationData={animation1}/>
      <Lottie style={{ marginTop:'1rem', height:'15rem'}} className="innerWidth" animationData={animation2}/>
      </div>
      <div className="flexCenter innerWidth">
        <form onSubmit={handleSubmit}>
          <span>
            <small className="heading">Enter your Full Name:</small>
          </span>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
         
          <span>
            <small className="heading"> Enter your age:</small>
          </span>
          <input type="number" min={18} max={65} value={age} onChange={(e)=>setAge(e.target.value)} required/>
          <span>
            <small className="heading">Select your batch for this month:</small>
          </span>
          <select value={batch} onChange={(e)=>setBatch(e.target.value)}>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
          <button className="button" type="submit">Pay ₹500</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default AddBooking;
