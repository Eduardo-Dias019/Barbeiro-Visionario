import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: "45px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: "#7000FF",
          textColor: "#fff",
          trailColor: "#fff",
          backgroundColor: "transparent",
          textSize: "25px",
        })}
      />
    </div>
  );
};

export default ProgressBar;
