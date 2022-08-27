import React from "react";
import "./Explore.css";
import explore from "../../images/explore.PNG";

function Explore() {
  return (
    <div className="explore">
      <div className="upper">
        <p>
          Choose the best educational <br></br>
          platform for learning
        </p>
      </div>
      <div className="middle">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br></br>
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br></br>
          since the 1500
        </p>
        <button className="explore-button">Explore</button>
      </div>
      <div className="lower">
        <img src={explore} alt={explore} />
      </div>
    </div>
  );
}

export default Explore;
