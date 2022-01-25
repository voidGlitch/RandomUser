import React, { useEffect, useState } from "react";
import { Button, Form } from "rsuite";
import { useUser } from "../Context/DataContext";
import Copy from "../components/Copy";

import Welcome from "./Welcome";

const Contact = () => {
  const { currentuser, copytext, setisedit, contactedit, setiseditted } =
    useUser();

  const user = currentuser !== "" && currentuser;

  const [edit, setedit] = useState(true);
  const [save, setsave] = useState(false);
  const [value, setvalue] = useState({
    cell: "",
    emailin: "",
    phone: "",
  });
  const handlechange = (values, event) => {
    setvalue({ ...value, [event.target.id]: values });
  };

  useEffect(() => {
    if (user) {
      setvalue({
        cell: user.cell,
        emailin: user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  const handleclick = (e) => {
    e.preventDefault();
    setedit(false);
    setsave(true);
    setiseditted(true);
    setisedit(true);
  };
  const handleclicksave = (e) => {
    e.preventDefault();
    setedit(true);
    setsave(false);
    contactedit(value);
    setisedit(false);
  };

  return (
    <div className="container mt-3">
      <Welcome />
      {currentuser && (
        <div style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline" className="mt-50">
            <Form.Group>
              <Form.ControlLabel>Contact Number</Form.ControlLabel>
              <Form.Control
                value={value.cell}
                name="cell"
                id="cell"
                type="text"
                readOnly={edit}
                onChange={handlechange}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                value={value.phone}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                onClick={handleclicksave}
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

export default Contact;
