import React, { useEffect, useState } from "react";
import { Button, Form } from "rsuite";

import { useUser } from "../Context/DataContext";
import Welcome from "./Welcome";
import Copy from "../components/Copy";

const Personal = () => {
  const { currentuser, copytext } = useUser();

  const user = currentuser !== "" && currentuser;
  console.log(user);

  const [edit, setedit] = useState(true);
  const [save, setsave] = useState(false);
  const [value, setvalue] = useState({
    title: "",
    first: "",
    last: "",
    dob: "",
    gender: "",
    age: "",
  });

  // const [title, settitle] = useState("");

  const taskDate = (dateMilli) => {
    var d = (new Date(dateMilli) + "").split(" ");
    d[2] = d[2] + ",";

    return [d[0], d[1], d[2], d[3]].join(" ");
  };

  var datemilli = Date.parse(
    currentuser !== "" ? currentuser.dob.date : "Sun May 11,2014"
  );
  const date = taskDate(datemilli);

  const handlechange = (values, event) => {
    setvalue({ ...value, [event.target.id]: values });
  };

  useEffect(() => {
    if (user) {
      // settitle(user.name.title);
      setvalue({
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
        dob: date,
        gender: user.gender,
        age: user.dob.age,
      });
    }
  }, [user, date]);
  console.log(value);

  const handleclick = (e) => {
    e.preventDefault();
    setedit(false);
    setsave(true);
  };

  return (
    <div className="container">
      <Welcome />
      {currentuser && (
        <div className="mt-50" style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline" className="mt-3">
            <Form.Group>
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control
                value={value.title}
                name="title"
                id="title"
                type="text"
                readOnly={edit}
                // style={{ color: "black", cursor: "text" }}
                onChange={handlechange}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                value={value.dob}
                readOnly={edit}
                onChange={handlechange}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
                onClick={() => {
                  copytext("gender");
                }}
              >
                <Copy />
              </button>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>AGE</Form.ControlLabel>
              <Form.Control
                value={value.age}
                name="age"
                id="age"
                type="number"
                readOnly={edit}
                onChange={handlechange}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
                onClick={() => {
                  copytext("age");
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

export default Personal;
