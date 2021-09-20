import React, { useState, useEffect } from "react";

function Exersise4() {
  const [value, setValue] = useState("https://robohash.org/reem");
  const [result, setResult] = useState("");
  useEffect(() => {
    setResult(`https://robohash.org/${value}`);

    return () => {
      document
        .querySelector("#search-value")
        .removeEventListener("onChange", null);
    };
  }, [value]);
  return (
    <div className="conatiner">
      <h3>GENERATE UNIQUE IMAGES FROM ANY TEXT</h3>
      <input
        id="search-value"
        type="text"
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        style={{ margin: "15px 50px", width: "300px" }}
      />
      <br />
      <br />

      <img src={result} alt="imag" />
    </div>
  );
}

export default Exersise4;
