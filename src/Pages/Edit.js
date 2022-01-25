import React, { useEffect, useState } from "react";
import { Form } from "rsuite";
import Copy from "../components/Copy";

import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/DataContext";
import JsonGen from "../components/JsonGen";

const Edit = () => {
  const { copytext, properfinals } = useUser();
  var navigate = useNavigate();

  const user = properfinals !== {} && properfinals;


  const [value, setvalue] = useState({
    streetname: "",
    streetnum: "",
    city: "",
    state: "",
    postcode: "",
    timezone: "",
    timezoneoff: "",
    cell: "",
    emailin: "",
    phone: "",
    title: "",
    first: "",
    last: "",
    dob: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    userid: "",
    username: "",
    image: "",
  });

  useEffect(() => {
    if (user) {
      try {
        setvalue({
          streetname: user.addressinfo.streetname,
          streetnum: user.addressinfo.streetnum,
          city: user.addressinfo.city,
          state: user.addressinfo.state,
          postcode: user.addressinfo.postcode,
          timezone: user.addressinfo.timezone,
          timezoneoff: user.addressinfo.timezoneoff,
          cell: user.contactinfo.cell,
          emailin: user.contactinfo.emailin,
          phone: user.contactinfo.phone,
          title: user.personalinfo.title,
          first: user.personalinfo.first,
          last: user.personalinfo.last,
          dob: user.personalinfo.dob,
          gender: user.personalinfo.gender,
          age: user.personalinfo.age,
          image: user.personalinfo.image,
          email: user.emailinfo.email,
          password: user.emailinfo.password,
          userid: user.emailinfo.userid,
          username: user.emailinfo.username,
        });
      } catch (error) {
        navigate("/");
        console.log(error.message);
      }
    }
  }, [user, navigate]);


  return (
    <>
      <JsonGen value={value.title !== "" ? value : ""} />

      <div className="mt-3 mb-3">
        <Form layout="horizontal">
          <h2 className="d-flex mx-3">Personal Details</h2>
          <Form.Group>
            <Form.ControlLabel>Title</Form.ControlLabel>
            <Form.Control
              value={value.title}
              name="title"
              id="title"
              type="text"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("title");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>First Name</Form.ControlLabel>
            <Form.Control
              value={value.first}
              name="first"
              id="first"
              type="text"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("first");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Last Name</Form.ControlLabel>
            <Form.Control
              type="text"
              name="last"
              id="last"
              value={value.last}
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("last");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Date Of birth</Form.ControlLabel>
            <Form.Control
              type="text"
              name="dob"
              id="dob"
              value={value.dob}
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("dob");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Gender</Form.ControlLabel>
            <Form.Control
              value={value.gender}
              name="gender"
              id="gender"
              type="text"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("gender");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Age</Form.ControlLabel>
            <Form.Control
              value={value.age}
              name="age"
              id="age"
              type="number"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("age");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>image</Form.ControlLabel>
            <Form.Control
              value={value.image}
              name="image"
              id="image"
              type="text"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("image");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <h2 className="d-flex mx-3">Address Info</h2>
          <Form.Group>
            <Form.ControlLabel>Street name</Form.ControlLabel>
            <Form.Control
              value={value.streetname}
              name="streetname"
              type="text"
              id="streetname"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("streetname");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>StreetNumber</Form.ControlLabel>
            <Form.Control
              value={value.streetnum}
              name="streetnum"
              id="streetnum"
              type="number"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("streetnum");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>city</Form.ControlLabel>
            <Form.Control
              value={value.city}
              name="city"
              type="text"
              id="city"
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("city");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>State</Form.ControlLabel>
            <Form.Control
              name="state"
              type="text"
              id="state"
              readOnly
              value={value.state}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("state");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Postcode</Form.ControlLabel>
            <Form.Control
              name="postcode"
              type="text"
              id="postcode"
              readOnly
              value={value.postcode}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("postcode");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Timezone</Form.ControlLabel>
            <Form.Control
              name="timezone"
              type="text"
              id="timezone"
              readOnly
              value={value.timezone}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("timezone");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Timezone Offset</Form.ControlLabel>
            <Form.Control
              name="timezoneoff"
              type="text"
              id="timezoneoff"
              readOnly
              value={value.timezoneoff}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("timezoneoff");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <h2 className="d-flex ">Contact Info</h2>
          <Form.Group>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control
              readOnly
              type="text"
              name="username"
              id="username"
              value={value.username}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("username");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Contact Number</Form.ControlLabel>
            <Form.Control
              value={value.cell}
              name="cell"
              id="cell"
              type="text"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("cell");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>E-mail</Form.ControlLabel>
            <Form.Control
              value={value.emailin}
              name="emailin"
              id="emailin"
              type="email"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("emailin");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Phone Number</Form.ControlLabel>
            <Form.Control
              type="text"
              name="phone"
              id="phone"
              readOnly
              value={value.phone}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("phone");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <h2 className="d-flex ">Email Info</h2>

          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control
              value={value.email}
              name="email"
              id="email"
              type="email"
              readOnly
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("email");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control
              type="text"
              name="password"
              id="password"
              readOnly
              value={value.password}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("password");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>UserId</Form.ControlLabel>
            <Form.Control
              readOnly
              type="text"
              name="userid"
              id="userid"
              value={value.userid}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("userid");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control
              readOnly
              type="text"
              name="username"
              id="username"
              value={value.username}
            />
            <button
              className="pt-1 d-block"
              onClick={() => {
                copytext("username");
              }}
            >
              <Copy />
            </button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Edit;
