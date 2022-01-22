import React from "react";

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
  // const { currentuser, isActive } = useUser();

  return (
    <DataProvider>
      <div className="text-center align-items-center justify-content-center ">
        <h1 className="mt-3">Welcome to Random UserGenerator</h1>

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
  );
}

export default App;
