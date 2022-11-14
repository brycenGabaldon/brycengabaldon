import React from "react";



const Buttons = ({
  iconClass,
  style,
  labelClass,
  name,
  buttonClass,
  id
}) => {


  return (
    <div className={"Spacing"} key={Math.random()} >
      <div
        className={buttonClass} key={Math.random()}
        
      >
        <button 
key={ Math.floor(1 + Math.random() * 10000)}
          className={iconClass}

          style={style}
          
        >
          <div className={labelClass
          } key={Math.random()}>{name}</div>
        </button>
      </div>
    </div>
  );
};

export default Buttons;


/* {
  [
    "section_btn",
    tab === id ? "active" : null // <-- conditionally apply active class
  ]
    .filter(Boolean)
    .join(" ")
} */