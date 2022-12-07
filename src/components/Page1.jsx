import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Page1 = () => {
  const { count, handleCount } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>Count : {count}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "2rem",
          }}
        >
          <button onClick={handleCount}>Button</button>
          <button
            onClick={() => {
              navigate("/next");
            }}
          >
            Button to go to next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
