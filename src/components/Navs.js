import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "rsuite";
import { useUser } from "../Context/DataContext";

const Navs = () => {
  const { isActive, currentuser, finallist } = useUser();
  const user = currentuser !== "" && currentuser;

  const taskDate = (dateMilli) => {
    var d = (new Date(dateMilli) + "").split(" ");
    d[2] = d[2] + ",";

    return [d[0], d[1], d[2], d[3]].join(" ");
  };

  var datemilli = Date.parse(
    currentuser !== "" ? currentuser.dob.date : "Sun May 11,2014"
  );
  const date = taskDate(datemilli);

  const [address, setaddress] = useState({
    streetname: "",
    streetnum: "",
    city: "",
    state: "",
    postcode: "",
    timezone: "",
    timezoneoff: "",
  });
  const [contact, setcontact] = useState({
    cell: "",
    emailin: "",
    phone: "",
  });
  const [personal, setpersonal] = useState({
    title: "",
    first: "",
    last: "",
    dob: "",
    gender: "",
    age: "",
    image: "",
  });
  const [email, setemail] = useState({
    email: "",
    password: "",
    userid: "",
    username: "",
  });
  useEffect(() => {
    if (user) {
      setaddress({
        streetname: user.location.street.name,
        streetnum: user.location.street.number,
        city: user.location.city,
        state: user.location.state,
        postcode: user.location.postcode,
        timezone: user.location.timezone.description,
        timezoneoff: user.location.timezone.offset,
      });
      setcontact({
        cell: user.cell,
        emailin: user.email,
        phone: user.phone,
      });
      setpersonal({
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
        dob: date,
        gender: user.gender,
        age: user.dob.age,
        image: user.picture.large,
      });
      setemail({
        email: user.email,
        password: user.login.password,
        userid: user.login.uuid,
        username: user.login.username,
      });
    }
  }, [user, date]);

  const handleclicked = () => {
    finallist([address, personal, contact, email]);
  };

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
              Edit Personal Details
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
              Edit Address/Location
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
              Edit Contact info
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
              Edit Email Info
            </button>
          </Link>
          <br></br>
          <Link to="/edit">
            <Button
              appearance="primary"
              color="red"
              style={{
                width: "400px",
                maxWidth: "100%",
              }}
              onClick={handleclicked}
            >
              {
                <img
                  src="https://img.icons8.com/fluency/24/000000/save-close.png"
                  alt="not"
                />
              }
              Done
            </Button>
          </Link>
        </Grid>
      )}
    </>
  );
};

export default Navs;
