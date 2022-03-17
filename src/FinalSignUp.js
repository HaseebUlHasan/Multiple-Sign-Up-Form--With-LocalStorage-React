import React, { useState } from "react";
import Address from "./Address";
import Qualification from "./Qualification";
import SignUp from "./SignUp";

const FinalSignUp = () => {
  const [pages, setPages] = useState(0);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    perAddress: "",
    curAddress: "",
    zipCode: "",
    age: "",
    qualification: "",
    company: "",
    experience: "",
  });
  const FormTitles = ["Sign Up", "Address", "Qualification"];
  const PageDisplay = () => {
    if (pages === 0) {
      return (
        <SignUp
          userData={userData}
          setUserData={setUserData}
          nextPage={nextPage}
        />
      );
    } else if (pages === 1) {
      return (
        <Address
          userData={userData}
          setUserData={setUserData}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      );
    } else {
      return (
        <Qualification
          userData={userData}
          setUserData={setUserData}
          previousPage={previousPage}
        />
      );
    }
  };

  const nextPage = () => {
    setPages(pages + 1);
  };

  const previousPage = () => {
    setPages(pages - 1);
  };

  return (
    <div>
      <h1>{FormTitles[pages]}</h1>
      <div>{PageDisplay()}</div>
    </div>
  );
};

export default FinalSignUp;
