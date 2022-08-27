import React from "react";
import "./Rezoversity.css";
import top from "../../images/top_gradient.PNG";
import boy from "../../images/boy.PNG";
import bottom from "../../images/bottom.PNG";

function Rezoversity() {
  return (
    <div className="rezoversity">
      <div className="r-top">
        <img className="r-top-image" src={top} alt={top} />
      </div>
      <div className="r-middle">
        <div className="r-left">
          <img className="boy-image" src={boy} alt={boy} />
        </div>
        <div className="r-right">
          <div className="r-header">
            <p>
              Boost learning and fast<br></br> track your{" "}
              <span className="progress-word">progress</span>
            </p>
          </div>
          <div className="r-para">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <br></br>It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="r-bottom">
        <img className="r-bottom-image" src={bottom} alt={bottom} />
      </div>
    </div>
  );
}

export default Rezoversity;
