import React, { createContext, useContext, useState } from "react";
import { Message, toaster } from "rsuite";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const DataProvider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  const [isActive, setisActive] = useState("");
  const [currentuser, setCurrentuser] = useState("");

  const getapi = async () => {
    try {
      setLoading(true);
      const response = await (await fetch("https://randomuser.me/api/")).json();
      setLoading(false);
      setisActive(true);
      setCurrentuser(response.results[0]);
    } catch (error) {
      toaster.push(
        <Message showIcon type="error">
          {error.message}
        </Message>,
        { placement: "topCenter" }
      );
    }
  };

  const copytext = (id) => {
    var text = document.getElementById(id);
    text.select();
    navigator.clipboard.writeText(text.value);
    toaster.push(
      <Message showIcon type="success">
        Text copied successfully!
      </Message>,
      { placement: "topCenter" }
    );
  };
  const value = {
    copytext,
    getapi,
    Loading,
    isActive,
    currentuser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
