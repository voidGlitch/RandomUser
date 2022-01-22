import React from "react";
import { Button, Form } from "rsuite";
import { useUser } from "../Context/DataContext";
import Copy from "../components/Copy";

import Welcome from "./Welcome";

const Contact = () => {
  const { currentuser, copytext } = useUser();

  return (
    <div className="container mt-3">
      <Welcome />
      {currentuser && (
        <div style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline" className="mt-50">
            <Form.Group>
              <Form.ControlLabel>Contact Number</Form.ControlLabel>
              <Form.Control
                value={currentuser.cell}
                name="tel"
                id="tel"
                type="text"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("tel");
                }}
              >
                <Copy />
              </button>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>E-mail</Form.ControlLabel>
              <Form.Control
                value={currentuser.email}
                name="emailin"
                id="emailin"
                type="email"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                value={currentuser.phone}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("phone");
                }}
              >
                <Copy />
              </button>
            </Form.Group>

            <div className="container ">
              <Button
                appearance="primary"
                style={{ width: "400px", marginTop: "15px" }}
                color="red"
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

export default Contact;
