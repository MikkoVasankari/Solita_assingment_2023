import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <p>Home page</p>
      <br></br>
      <br></br>
      <button onClick={() => navigate("/stations/")}>Go to stations</button>
      <br></br>
      <br></br>
      <button onClick={() => navigate("/journeys/")}>Go to journeys</button>
    </div>
  );
}

export default Home;
