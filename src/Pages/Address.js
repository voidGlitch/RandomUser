import React, { useEffect, useState } from "react";
import { Button, Form } from "rsuite";
import { useUser } from "../Context/DataContext";
import Copy from "../components/Copy";

import Welcome from "./Welcome";

const Address = () => {
  const { currentuser, copytext } = useUser();
  const user = currentuser !== "" && currentuser;
  console.log(user);

  const [edit, setedit] = useState(true);
  const [save, setsave] = useState(false);
  const [value, setvalue] = useState({
    streetname: "",
    streetnum: "",
    city: "",
    state: "",
    postcode: "",
    timezone: "",
    timezoneoff: "",
  });
  const handlechange = (values, event) => {
    setvalue({ ...value, [event.target.id]: values });
  };

  useEffect(() => {
    if (user) {
      // settitle(user.name.title);
      setvalue({
        streetname: user.location.street.name,
        streetnum: user.location.street.number,
        city: user.location.city,
        state: user.location.state,
        postcode: user.location.postcode,
        timezone: user.location.timezone.description,
        timezoneoff: user.location.timezone.offset,
      });
    }
  }, [user]);
  console.log(value);

  const handleclick = (e) => {
    e.preventDefault();
    setedit(false);
    setsave(true);
  };

  return (
    <div className="container mt-3">
      <Welcome />
      {currentuser && (
        <div style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline" className="mt-50 ">
            <Form.Group>
              <Form.ControlLabel>Street name</Form.ControlLabel>
              <Form.Control
                value={value.streetname}
                name="streetname"
                type="text"
                id="streetname"
                readOnly={edit}
                onChange={handlechange}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                value={value.city}
                name="city"
                type="text"
                id="city"
                readOnly={edit}
                onChange={handlechange}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                value={value.state}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                value={value.postcode}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                value={value.timezone}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                value={value.timezoneoff}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                onClick={handleclick}
                disabled={save}
              >
                Edit
              </Button>
              <Button
                appearance="primary"
                color="green"
                className="mx-3"
                style={{ width: "400px", marginTop: "15px" }}
                onClick={handleclick}
                disabled={!save}
              >
                Save
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Address;
