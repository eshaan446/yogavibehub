import React from "react";
import "./HomepageListing.css";
import "swiper/css";
import "../Utility/Utility.css";
import { Link, useNavigate } from "react-router-dom";

const HomepageListing = ({ apidata, descriptions }) => {
  const formattedDate = new Date().toISOString().split("T")[0];
  const todayDate = new Date().getDate();
  const navigate = useNavigate();

  // Function to calculate days difference between two dates
  const getDaysDifference = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
  };
  function Batchteller(batch){
    if(batch==="5-6PM"){
      return "Evening Batch."
    }else{
      return "Early Morning Batch."
    }
  }

  return (
    <div className="innerWidth flexCenter">
      <div className="flexCenter innerWidth">
        <div id="residencies" className="r-wrapper">
          <div className="paddings innerWidth r-container">
            <div className="flexColStart r-head"></div>

            <div className=" flexCenter container">
              {/* slider */}
              {apidata.map((card, i) => {
                  const daysAgo = getDaysDifference(
                    formattedDate,
                    card.createdAt.split("T")[0]
                  );

                  const daysAgoText =
                    daysAgo === 0 ? "Today!" : `${daysAgo}d ago!`;

                  return (
                    <div className="flexColStart r-card" key={i}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtCIImmPCzDznLfXakp92dvDbAVzkYdxhp5zZbPkGlTDC-YThDAkySJ7G0iXOQKQxb_k&usqp=CAU" alt="home" />

                      <span className="secondaryText r-price">
    
                        <small style={{color:"orange"}}>
                          <small><i><strong>Joined {daysAgoText}</strong></i></small>
                        </small>
                      </span>

                      <span className="primaryText">{card.name}</span>
                      
                      <h2 className="secondaryText">
                       <img style={{height:'13px', width:'14px'}} src="/location-position.svg"/> Mumbai, India
                      </h2>
                      <span className="secondaryText">{descriptions[card.name.split('')[0].toLowerCase()]}</span>
                      <span className="secondaryText">
                       {card.age} years old
                      </span>
                      <span className="secondaryText">
                         {Batchteller(card.batch)}
                      </span>
                      
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageListing;
