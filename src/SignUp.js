import React from "react";

const SignUp = ({
  userData,
  setUserData,
  nextPage,
  errorForm,
  setErrorForm,
  validate,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userData.firstName && userData.lastName && userData.email && userData.password) {
      nextPage();
    }
    setErrorForm(validate(userData));
  };



  return (
    <div className="container">
      <h2> SignUp </h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.firstName ? "2px solid red" : "" }}
              type="text"
              id="fname"
              name="firstname"
              placeholder="First name.."
              value={userData.firstName}
              onChange={(e) => {
                setUserData({ ...userData, firstName: e.target.value });
              }}
            />
            {errorForm.firstName ? (
              <p style={{ color: "red" }}>{errorForm.firstName}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.lastName ? "2px solid red" : "" }}
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last name.."
              value={userData.lastName}
              onChange={(e) => {
                setUserData({ ...userData, lastName: e.target.value });
              }}
            />
            {errorForm.lastName ? (
              <p style={{ color: "red" }}>{errorForm.lastName}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.email ? "2px solid red" : "" }}
              type="text"
              id="email"
              name="email"
              placeholder="someone@gmail,com"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
            {errorForm.email ? (
              <p style={{ color: "red" }}>{errorForm.email}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.password ? "2px solid red" : "" }}
              type="password"
              id="password"
              name="password"
              placeholder="Password.."
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            {errorForm.password ? (
              <p style={{ color: "red" }}> {errorForm.password} </p>
            ) : (
              ""
            )}
          </div>
          <input type="submit" value="Next" style={{ margin: "10px" }} 
          disabled = {(!userData.firstName , !userData.lastName , !userData.email , !userData.password)} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
