import React from "react";
import { useUser } from "../Context/DataContext";
import Navs from "./Navs";

const Infonav = () => {
  const { currentuser } = useUser();

  return (
    <>
      {currentuser && (
        <div>
          <img
            className="text-center mt-3 mb-3"
            style={{ borderRadius: "40px" }}
            src={currentuser.picture.large}
            alt="not"
            width="150px"
            height="150px"
          />
          <Navs />
        </div>
      )}
    </>
  );
};

export default Infonav;
