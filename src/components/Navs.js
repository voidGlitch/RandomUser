import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "rsuite";
import { useUser } from "../Context/DataContext";

const Navs = () => {
  const { isActive } = useUser();

  return (
    <>
      {isActive && (
        <Grid fluid>
          <Link to="/personal" className="mx-2">
            <button colSpan={4} className="bttn mr-3 ">
              {
                <img
                  src="https://img.icons8.com/material-two-tone/20/000000/home--v2.png"
                  alt="not"
                />
              }{" "}
              Personal Details
            </button>
          </Link>
          <Link to="/address">
            <button colSpan={4} className="bttn mr-3 ">
              {
                <img
                  src="https://img.icons8.com/material-rounded/20/000000/order-delivered.png"
                  alt="not"
                />
              }{" "}
              Address/Location
            </button>
          </Link>
          <Link to="/contact">
            <button colSpan={4} className="bttn mr-3 ">
              {
                <img
                  src="https://img.icons8.com/material-outlined/20/000000/add-contact-to-company.png"
                  alt="not"
                />
              }{" "}
              Contact info
            </button>
          </Link>

          <Link to="/email">
            <button colSpan={4} className="bttn mr-3 ">
              {
                <img
                  src="https://img.icons8.com/fluency/20/000000/email-open.png"
                  alt="not"
                />
              }{" "}
              Email Info
            </button>
          </Link>
        </Grid>
      )}
    </>
  );
};

export default Navs;
