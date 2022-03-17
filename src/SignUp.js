import React, { useState } from "react";

const SignUp = ({ userData, setUserData, nextPage }) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userData.password.lenght < 5 ||
      userData.firstName.length < 3||
      userData.lastName.lenght < 3 ||
      userData.email.lenght < 3
    ) {
      setError(true);
    } else {
      nextPage();
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="fname"
              name="firstname"
              placeholder="First name.."
              value={userData.firstName}
              onChange={(e) => {
                setUserData({ ...userData, firstName: e.target.value });
              }}
            />
            {error ? (
              <p style={{ color: "red" }}>Please Enter Correct Name</p>
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
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last name.."
              value={userData.lastName}
              onChange={(e) => {
                setUserData({ ...userData, lastName: e.target.value });
              }}
            />
            {error ? (
              <p style={{ color: "red" }}>Please Enter Correct Name</p>
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
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="email"
              name="email"
              placeholder="someone@gmail,com"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
            {error ? <p style={{ color: "red" }}>Enter Proper Email</p> : ""}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="password"
              id="password"
              name="password"
              placeholder="Password.."
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            {error ? (
              <p style={{ color: "red" }}>
                Password must be Greater than 5 charaters
              </p>
            ) : (
              ""
            )}
          </div>
          <input type="submit" value="Next" style={{ margin: "10px" }} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
