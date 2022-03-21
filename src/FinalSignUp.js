import React, { useState, useEffect } from "react";
import Address from "./Address";
import Qualification from "./Qualification";
import SignUp from "./SignUp";

const FinalSignUp = () => {
  const store = JSON.parse(localStorage.getItem("user"));
  const localGetItem = (localStorage.getItem('page'))
  const [pages, setPages] = useState(localGetItem || 0);

  const [userData, setUserData] = useState({
    firstName: store?.firstName || "",
    lastName: store?.lastName || "",
    email: store?.email || "",
    password: store?.password || "" ,
    contact: store?.contact || "",
    perAddress: store?.perAddress || "",
    curAddress: store?.curAddress || "",
    zipCode: store?.zipCode || "",
    age: store?.age || "",
    qualification: store?.qualification || "",
    company: store?.company || "",
    experience: store?.experience || "",
  });
  
  useEffect(() => {
  localStorage.setItem("page" , "pages")
  } , [pages])
  

   const [errorForm , setErrorForm] = useState({});
  console.log(errorForm , "errorform")
  

  const validate = (values) => {
    const errors = {};
    if (values.firstName.length < 3) {
      errors.firstName = "First name is required!";
    }

    if (values.lastName.length <3) {
      errors.lastName = " Last name is required!";
    }

    if (values.email.length <3) {
      errors.email = "Email is required!";
    }
    if (values.password < 5) {
      errors.password = "Password must be atleast 5 characters required";
    }
    if (values.age < 2) {
      errors.age = "Age must be atleast 2 characters required";
    }
    if (values.contact < 11) {
      errors.contact = "Conatct must be atleast 11 characters required";
    }
    if (values.perAddress < 5) {
      errors.perAddress = "Address is required";
    }
    if (values.curAddress < 5) {
      errors.curAddress = "Address is required";
    }
    if (values.experience < 5) {
      errors.experience = "experience is required";
    }
    if (values.company < 5) {
      errors.company = "company is required";
    }
    if (values.zipCode < 3) {
      errors.zipCode = "Address is required";
    }
    if (values.qualification < 5) {
      errors.qualification = "qualification is required";
    }
    return errors;
 
  };
  
  console.log("local", localStorage.getItem('page'))

  const nextPage = () => {
    localStorage.setItem ("user", JSON.stringify(userData));
    setPages(pages + 1);
    localStorage.setItem("page" , "pages")
  };

  const previousPage = () => {
    setPages(pages - 1);
    localStorage.setItem ("user", JSON.stringify(userData));
    localStorage.setItem("page" , "pages")
  };

  return (
    <div>
        {
         ( pages == 0) ? <SignUp
          userData={userData}
          setUserData={setUserData}
          nextPage={nextPage}
          errorForm = {errorForm}
          setErrorForm ={setErrorForm}
          validate = {validate}
        /> :(pages == 1) ?       
      <Address
        userData={userData}
        setUserData={setUserData}
        nextPage={nextPage}
        previousPage={previousPage}
        errorForm = {errorForm}
        setErrorForm ={setErrorForm}
        validate = {validate}
      /> :      
       <Qualification
      userData={userData}
      setUserData={setUserData}
      previousPage={previousPage}
      errorForm = {errorForm}
      setErrorForm ={setErrorForm}
      validate = {validate}
    />
        }
      </div>
  
  );
};

export default FinalSignUp;
