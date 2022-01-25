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
  const [isEdit, setisedit] = useState(false);
  const [isEditted, setiseditted] = useState(false);
  const [editlist, seteditlist] = useState({});
  const [properfinals, setproperfinals] = useState({});

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

  const finallist = ([address, personal, contact, email]) => {
    const finals = {
      addressinfo: address,
      personalinfo: personal,
      contactinfo: contact,
      emailinfo: email,
    };

    setproperfinals(finals);

    const edit = editlist;

    if (isEditted) {
      const totalfinal = { ...finals, ...edit };

      setproperfinals(totalfinal);
    }
  };
  const personaledit = (personalinfo) => {
    if (isEdit) {
      const personals = { personalinfo };

      seteditlist((editlist) => ({
        ...editlist,
        ...personals,
      }));
    }
  };
  const addressedit = (addressinfo) => {
    if (isEdit) {
      const addressin = { addressinfo };

      seteditlist((editlist) => ({
        ...editlist,
        ...addressin,
      }));
    }
  };

  const contactedit = (contactinfo) => {
    if (isEdit) {
      const contacts = { contactinfo };

      seteditlist((editlist) => ({
        ...editlist,
        ...contacts,
      }));
    } else {
    }
  };
  const emailedit = (emailinfo) => {
    if (isEdit) {
      const emails = { emailinfo };

      seteditlist((editlist) => ({
        ...editlist,
        ...emails,
      }));
    }
  };

  const value = {
    copytext,
    getapi,
    Loading,
    isActive,
    currentuser,
    editlist,
    properfinals,
    finallist,
    personaledit,
    addressedit,
    contactedit,
    emailedit,
    setisedit,
    setiseditted,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
