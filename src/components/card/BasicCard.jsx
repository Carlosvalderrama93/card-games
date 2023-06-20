import React from "react";

function BasicCard() {
  return (
    <>
      <div className="basic-card">
        <h1>Basic Card</h1>
        <div className="basic-card-element">
          <div className="basic-card-element-inner">
            <div className="basic-card-front">
              <img
                src="https://t3.ftcdn.net/jpg/02/22/27/22/360_F_222272269_9UGJKTKo7TW6VPajOH9VEOBvvFrKzU2y.webp"
                alt=""
                className="basic-card-front-img"
              />
            </div>
            <div className="basic-card-back">
              <img
                src="https://i.pinimg.com/736x/a0/50/17/a05017cbf73caa473527ffcf9d8fc862.jpg"
                alt=""
                className="basic-card-back-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicCard;
