import React, { useState } from "react";

import "./styles/main.scss";
import "rsuite/dist/rsuite.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DataProvider } from "./Context/DataContext";
import Welcome from "./Pages/Welcome";
import Personal from "./Pages/Personal";
import UserForm from "./Pages/UserForm";
import Address from "./Pages/Address";
import Contact from "./Pages/Contact";

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      console.log("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#575757";
      document.body.style.transition = "1s";
    }
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#21212c";
      document.body.style.color = "white";
      document.body.style.transition = "1s";
    }
  };
  return (
    <div className={`${mode === "light" ? "light" : "dark"}`}>
      <DataProvider>
        <div className="centered mt-2" style={{ maxHeight: "10%" }}>
          <button
            style={{ backgroundColor: "transparent", right: "50px" }}
            className="theme-toggle"
            onClick={togglemode}
          >
            {mode === "light" ? (
              <img
                src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-moon-halloween-wanicon-flat-wanicon.png"
                alt="not"
              />
            ) : (
              <img
                src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-sun-weather-justicon-flat-justicon-2.png"
                alt="not"
              />
            )}
          </button>
        </div>
        <div className="text-center align-items-center justify-content-center ">
          <h1>Welcome to Random UserGenerator</h1>

          <Router>
            <Routes>
              <Route path="/" exact element={<Welcome />} />

              <Route path="/personal" exact element={<Personal />} />

              <Route path="/email" exact element={<UserForm />} />

              <Route path="/address" exact element={<Address />} />

              <Route path="/contact" exact element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
