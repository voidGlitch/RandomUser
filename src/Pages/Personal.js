import React from "react";
import { Button, Form } from "rsuite";

import { useUser } from "../Context/DataContext";
import Welcome from "./Welcome";
import Copy from "../components/Copy";

const Personal = () => {
  const { currentuser, copytext } = useUser();

  const taskDate = (dateMilli) => {
    var d = (new Date(dateMilli) + "").split(" ");
    d[2] = d[2] + ",";

    return [d[0], d[1], d[2], d[3]].join(" ");
  };

  var datemilli = Date.parse(
    currentuser !== "" ? currentuser.dob.date : "Sun May 11,2014"
  );
  const date = taskDate(datemilli);

  return (
    <div className="container">
      <Welcome />
      {currentuser && (
        <div className="mt-50" style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline" className="mt-3">
            <Form.Group>
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control
                value={currentuser.name.title}
                name="title"
                id="title"
                type="text"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("title");
                }}
              >
                <Copy />
              </button>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Gender</Form.ControlLabel>
              <Form.Control
                value={currentuser.gender}
                name="gender"
                id="gender"
                type="text"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("gender");
                }}
              >
                <Copy />
              </button>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>First Name</Form.ControlLabel>
              <Form.Control
                value={currentuser.name.first}
                name="first"
                id="first"
                type="name"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                value={currentuser.name.last}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("last");
                }}
              >
                <Copy />
              </button>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Date of Birth</Form.ControlLabel>
              <Form.Control
                type="text"
                name="dob"
                id="dob"
                disabled
                value={date}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("dob");
                }}
              >
                <Copy />
              </button>
            </Form.Group>

            <div className="container ">
              <Button
                appearance="primary"
                color="red"
                style={{ width: "400px", marginTop: "15px" }}
              >
                Edit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Personal;
// {/* <Form.Group>
//               <Form.ControlLabel>Tel-number</Form.ControlLabel>
//               <Form.Control
//                 value={currentuser.login.uuid}
//                 name="tel"
//                 type="tel"
//                 disabled
//                 style={{ color: "black", cursor: "text" }}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.ControlLabel>Address</Form.ControlLabel>
//               <Form.Control
//                 type="text"
//                 value={currentuser.login.username}
//                 name="address"
//                 disabled
//                 style={{ color: "black", cursor: "text" }}

//             </Form.Group>
//               /> */}
