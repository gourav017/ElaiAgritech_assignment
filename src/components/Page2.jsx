import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Page2 = () => {
  const { count } = useContext(AppContext);
  const [counter, setCounter] = useState(count);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>Count : {counter}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "2rem",
          }}
        >
          <button onClick={() => setCounter(counter + 1)}>Button</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Button to go to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
