import React, { useEffect, useState } from "react";
import { Button, Form } from "rsuite";
import { useUser } from "../Context/DataContext";
import Welcome from "./Welcome";
import Copy from "../components/Copy";

const UserForm = () => {
  const { currentuser, copytext } = useUser();
  const user = currentuser !== "" && currentuser;
  console.log(user);

  const [edit, setedit] = useState(true);
  const [save, setsave] = useState(false);
  const [value, setvalue] = useState({
    email: "",
    password: "",
    userid: "",
    username: "",
  });
  const handlechange = (values, event) => {
    setvalue({ ...value, [event.target.id]: values });
  };

  useEffect(() => {
    if (user) {
      // settitle(user.name.title);
      setvalue({
        email: user.email,
        password: user.login.password,
        userid: user.login.uuid,
        username: user.login.username,
      });
    }
  }, [user]);
  console.log(value);

  const handleclick = (e) => {
    e.preventDefault();
    setedit(false);
    setsave(true);
  };
  const handleclicksave = (e) => {
    e.preventDefault();
    setedit(true);
    setsave(false);
  };

  return (
    <>
      <Welcome />
      {currentuser && (
        <div className="container mt-50" style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline">
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                value={value.email}
                name="email"
                id="email"
                type="email"
                readOnly={edit}
                onChange={handlechange}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                value={value.password}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                type="text"
                name="userid"
                id="userid"
                value={value.userid}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
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
                readOnly={edit}
                onChange={handlechange}
                type="text"
                name="username"
                id="username"
                value={value.username}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className={`pt-1 ${save ? "d-none" : ""}`}
                onClick={() => {
                  copytext("username");
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
    </>
  );
};

export default UserForm;
