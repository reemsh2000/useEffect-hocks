import React, { useState, useEffect } from "react";

function Exersise2() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [color, setColor] = useState("#fff");
  const intViewportWidth = window.innerWidth / 2;
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setX(e.pageX);
      setY(e.pageY);
      x > intViewportWidth ? setColor("tomato") : setColor("blue");
    });

    return () => {
      document.removeEventListener("mousemove",null);
    };
  });
  return (
    <div id="myDiv" style={{ background: color }}>
      <p>
        {" "}
        I am on X : {x} and Y : {y}
      </p>
    </div>
  );
}

export default Exersise2;
