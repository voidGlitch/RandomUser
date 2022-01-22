import React from "react";
import { Button } from "rsuite";
import Navs from "../components/Navs";
import { useUser } from "../Context/DataContext";
import Cards from "./Cards";

const Welcome = () => {
  const { getapi, Loading, isActive, currentuser } = useUser();

  const onClicked = async () => {
    await getapi();
  };

  return (
    <>
      <div className="mt-3">
        <Button
          appearance="primary"
          color="green"
          disabled={Loading}
          onClick={onClicked}
          style={{
            width: "600px",
            maxWidth: "100%",
          }}
        >
          {isActive ? "Get New Accounts" : "Get an account"}
        </Button>
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
          <h3 style={{ fontSize: "16px" }}>
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
