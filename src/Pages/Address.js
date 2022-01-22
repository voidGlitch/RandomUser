import React from "react";
import { Button, Form } from "rsuite";
import { useUser } from "../Context/DataContext";
import Copy from "../components/Copy";

import Welcome from "./Welcome";

const Address = () => {
  const { currentuser, copytext } = useUser();

  return (
    <div className="container mt-3">
      <Welcome />
      {currentuser && (
        <div style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline" className="mt-50 ">
            <Form.Group>
              <Form.ControlLabel>
                Street name
                {/* {
                  <img
                    src="https://img.icons8.com/officexs/25/000000/copy.png"
                    alt="not"
                  />
                } */}
              </Form.ControlLabel>
              <Form.Control
                value={currentuser.location.street.name}
                name="streetname"
                type="text"
                id="streetname"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                value={currentuser.location.street.number}
                name="streetnum"
                id="streetnum"
                type="number"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("streetnum");
                }}
              >
                <Copy />
              </button>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>City</Form.ControlLabel>
              <Form.Control
                value={currentuser.location.city}
                name="city"
                type="text"
                id="city"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                value={currentuser.location.state}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                type="number"
                id="postcode"
                disabled
                value={currentuser.location.postcode}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                value={currentuser.location.timezone.description}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                value={currentuser.location.timezone.offset}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
                onClick={() => {
                  copytext("timezoneoff");
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

export default Address;
