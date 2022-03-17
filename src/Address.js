import React, { useState } from "react";

const Address = ({ userData, setUserData, nextPage, previousPage }) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.contact.length < 11 ||
      userData.curAddress.lenght < 5 ||
      userData.perAddress.lenght < 5 ||
      userData.zipCode.lenght < 3
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
            <label htmlFor="contact">Conatct No</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="contact"
              name="contact"
              placeholder="03xx xxxxxxx"
              value={userData.contact}
              onChange={(e) => {
                setUserData({ ...userData, contact: e.target.value });
              }}
            />
            {error ? (
              <p style={{ color: "red" }}>
                Contact No must be Greater than 11 charaters
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Permanent Address</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="address"
              name="address"
              placeholder="Permanent Address.."
              value={userData.perAddress}
              onChange={(e) => {
                setUserData({ ...userData, perAddress: e.target.value });
              }}
            />
            {error ? (
              <p style={{ color: "red" }}>Address Must be Proper</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Current Address</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="address"
              name="address"
              placeholder="Current Address.."
              value={userData.curAddress}
              onChange={(e) => {
                setUserData({ ...userData, curAddress: e.target.value });
              }}
            />
            {error ? (
              <p style={{ color: "red" }}>Address Must be Proper</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Zip Code</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="Zipcode.."
              value={userData.zipCode}
              onChange={(e) => {
                setUserData({ ...userData, zipCode: e.target.value });
              }}
            />
            {error ? (
              <p style={{ color: "red" }}>ZipCode Must be Proper</p>
            ) : (
              ""
            )}
          </div>
          <input type="submit" value="Next" style={{ margin: "10px" }} />
          <input
            type="submit"
            value="Previous"
            onClick={previousPage}
            style={{ margin: "10px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Address;
