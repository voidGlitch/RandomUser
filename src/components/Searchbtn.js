import React from "react";
import { Button } from "rsuite";
import { useUser } from "../Context/DataContext";

const Searchbtn = () => {
  const { getapi, Loading, isActive } = useUser();

  const onClicked = async () => {
    await getapi();
  };
  return (
    <>
      <Button
        appearance="primary"
        color="green"
        disabled={Loading}
        onClick={onClicked}
        style={{
          width: "600px",
          maxWidth: "100%",
        }}
      >
        {isActive ? (
          <img
            src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/25/000000/external-find-technology-in-daily-life-parzival-1997-flat-parzival-1997.png"
            alt="not"
          />
        ) : (
          <img
            src="https://img.icons8.com/external-flat-vinzence-studio/25/000000/external-account-user-avatar-flat-vinzence-studio-3.png"
            alt="not"
            className="mr-2"
          />
        )}
        {isActive ? "Find New Accounts" : "Get a account"}
      </Button>
    </>
  );
};

export default Searchbtn;
