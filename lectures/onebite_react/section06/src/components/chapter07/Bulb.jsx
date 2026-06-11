import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  console.log(light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>On</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>Off</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default Bulb;
