import React from "react";
import { Button, Form } from "rsuite";
import { useUser } from "../Context/DataContext";
import Welcome from "./Welcome";
import Copy from "../components/Copy";

const UserForm = () => {
  const { currentuser, copytext } = useUser();

  return (
    <>
      <Welcome />
      {currentuser && (
        <div className="container mt-50" style={{ paddingBlockEnd: "80px" }}>
          <Form layout="inline">
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                value={currentuser.email}
                name="email"
                id="email"
                type="email"
                disabled
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                value={currentuser.login.password}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                type="text"
                name="userid"
                id="userid"
                value={currentuser.login.uuid}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
                disabled
                type="text"
                name="username"
                id="username"
                value={currentuser.login.username}
                style={{ color: "black", cursor: "text" }}
              />
              <button
                className="pt-1"
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
              >
                Edit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default UserForm;
