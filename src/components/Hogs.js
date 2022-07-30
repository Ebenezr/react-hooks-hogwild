import React, { useState } from "react";

const Hogs = ({ hogs }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => {
        setToggle(!toggle);
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      {hogs.map((hog, index) => (
        <div
          key={index}
          style={{
            background: "grey",
            height: "18rem",
            borderRadius: "1rem",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src={hog.image} style={{ width: "100%", height: "70%" }} />
          <h3>{hog.name}</h3>
          {toggle ? (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "0",
                background: "grey",
                display: "flex",
                flexDirection: "column",
                translateX: "-50%",
              }}
            >
              <small>Weight:{hog.weight}</small>
              <small>Specialty:{hog.specialty}</small>
              <small>{hog.greased ? "Greased" : "Not Graesed"}</small>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Hogs;
