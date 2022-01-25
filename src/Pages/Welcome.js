import React from "react";
import { Link } from "react-router-dom";
import { Button } from "rsuite";
import Navs from "../components/Navs";
import Searchbtn from "../components/Searchbtn";
import { useUser } from "../Context/DataContext";
import Cards from "./Cards";

const Welcome = () => {
  const { Loading, currentuser } = useUser();

  return (
    <>
      <div className="mt-3">
        <Searchbtn />
        <br></br>
        {currentuser && (
          <Link to="/save">
            <Button
              className="mt-2"
              appearance="primary"
              color="violet"
              style={{
                width: "600px",
                maxWidth: "100%",
                fontFamily: "apple-system",
              }}
            >
              {
                <img
                  src="https://img.icons8.com/color/20/000000/test-account.png"
                  alt="not"
                />
              }{" "}
              Save as it is
            </Button>
          </Link>
        )}
      </div>
      {Loading && (
        <div>
          <img
            className="spinner"
            src="https://img.icons8.com/external-icongeek26-flat-icongeek26/100/000000/external-atom-physics-icongeek26-flat-icongeek26.png"
            alt="not"
          />
        </div>
      )}
      <Cards />
      {currentuser && (
        <div className="mt-100">
          <h3 style={{ fontSize: "18px", fontFamily: "apple-system" }}>
            Hey,my name is {currentuser.name.first} {currentuser.name.last} .I
            am {currentuser.dob.age} year old.I am from{" "}
            {currentuser.location.country} and currently living in{" "}
            {currentuser.location.street.number}-
            {currentuser.location.street.name},{currentuser.location.state}
          </h3>
        </div>
      )}
      <div className="container mt-3 mb-3">
        <Navs />
      </div>
    </>
  );
};

export default Welcome;
