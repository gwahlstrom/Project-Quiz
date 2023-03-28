import React from "react";
import "./progressbar.css";

const ProgressBar = (props) => {
  const { completed } = props;
  return (
    <div className="container">
      <div className="filler" style={{ width: `${completed}%` }}>
        <span className="label">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
