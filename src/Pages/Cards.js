import React, { useState } from "react";
import { useUser } from "../Context/DataContext";

const Cards = () => {
  const { currentuser } = useUser();
  const [value, setvalue] = useState(0);

  const taskDate = (dateMilli) => {
    var d = (new Date(dateMilli) + "").split(" ");
    d[2] = d[2] + ",";

    return [d[0], d[1], d[2], d[3]].join(" ");
  };

  var datemilli = Date.parse(
    currentuser !== "" ? currentuser.dob.date : "Sun May 11,2014"
  );
  const date = taskDate(datemilli);

  const Values = () => {
    const sentences = [
      "Hi,My name is ",
      "My Email Address is",
      "My Birthday is",
      "My address is",
      "My Phone Number is",
      "My Password is",
    ];
    return <p>{sentences[value]}</p>;
  };
  const Data = () => {
    const Datasent = [
      `${currentuser.name.first} ${currentuser.name.last}`,
      `${currentuser.email}`,
      `${date}`,
      `${currentuser.location.street.number} ${currentuser.location.street.name}`,
      `${currentuser.phone}`,
      `${currentuser.login.password}`,
    ];
    return <p>{Datasent[value]}</p>;
  };

  return (
    <div>
      {currentuser && (
        <div className="card">
          <div className="details">
            <div className="user_photo horizontal_center mt-3" id="user_photo">
              <img
                className="text-center mt-3 mb-3"
                style={{ borderRadius: "40px" }}
                src={currentuser.picture.large}
                alt="not"
                width="150px"
                height="150px"
              />
            </div>
            <Values />
            <div id="user_value" style={{ textTransform: "lowercase" }}>
              <Data />
            </div>
          </div>
          <ul className="values_list horizontal_center" id="values_list">
            <li
              onMouseEnter={() => {
                setvalue(0);
              }}
            >
              <img
                src="https://img.icons8.com/color/50/000000/employee-card.png"
                alt="not"
              />
            </li>
            <li
              onMouseEnter={() => {
                setvalue(1);
              }}
            >
              <img
                src="https://img.icons8.com/fluency/50/000000/email-open.png"
                alt="not"
              />
            </li>
            <li
              onMouseEnter={() => {
                setvalue(2);
              }}
            >
              <img
                src="https://img.icons8.com/ios/45/000000/birth-date.png"
                alt="not"
              />
            </li>
            <li
              onMouseEnter={() => {
                setvalue(3);
              }}
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/worldwide-location.png"
                alt="not"
              />
            </li>
            <li
              onMouseEnter={() => {
                setvalue(4);
              }}
            >
              <img
                src="https://img.icons8.com/dotty/50/000000/ringing-phone.png"
                alt="not"
              />
            </li>
            <li
              onMouseEnter={() => {
                setvalue(5);
              }}
            >
              <img
                src="https://img.icons8.com/external-bearicons-gradient-bearicons/45/000000/external-Password-social-media-bearicons-gradient-bearicons.png"
                alt="not"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cards;
