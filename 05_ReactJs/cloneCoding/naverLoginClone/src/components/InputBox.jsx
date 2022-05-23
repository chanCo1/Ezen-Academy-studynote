import React from "react";

const InputBox = ({ title, type, name, id, span, className, htmlFor }) => {
  return (
    <div>
      <h3 className="inputTitle">
        <label htmlFor={htmlFor}>{title}</label>
      </h3>
      <div className="inputBox">
        <input className="userInput" type={type} name={name} id={id} />
        <span className={className}>{span}</span>
      </div>
    </div>
  );
};

export default InputBox;
