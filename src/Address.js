import React from "react";

const Address = ({ userData, setUserData, nextPage, previousPage , errorForm , setErrorForm, validate, }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if((userData.contact && userData.curAddress && userData.perAddress && userData.zipCode)){
      nextPage();
    }
    setErrorForm(validate(userData));
  };

  return (
    <div className="container">
      <h2> Address </h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="contact">Conatct No</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.contact ? "2px solid red" : "" }}
              type="text"
              id="contact"
              name="contact"
              placeholder="03xx xxxxxxx"
              value={userData.contact}
              onChange={(e) => {
                setUserData({ ...userData, contact: e.target.value });
                setErrorForm("");
              }}
            />
            {errorForm.contact && (
              <p style={{ color: "red" }}>
              {errorForm.contact}
              </p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Permanent Address</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.perAddress ? "2px solid red" : "" }}
              type="text"
              id="address"
              name="address"
              placeholder="Permanent Address.."
              value={userData.perAddress}
              onChange={(e) => {
                setUserData({ ...userData, perAddress: e.target.value });
                setErrorForm("")
              }}
            />
            {errorForm.perAddress && (
              <p style={{ color: "red" }}>{errorForm.perAddress}</p>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Current Address</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.curAddress ? "2px solid red" : "" }}
              type="text"
              id="address"
              name="address"
              placeholder="Current Address.."
              value={userData.curAddress}
              onChange={(e) => {
                setUserData({ ...userData, curAddress: e.target.value });
                setErrorForm("")
              }}
            />
            {errorForm.curAddress && (
              <p style={{ color: "red" }}> {errorForm.curAddress} </p>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Zip Code</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.zipCode ? "2px solid red" : "" }}
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="Zipcode.."
              value={userData.zipCode}
              onChange={(e) => {
                setUserData({ ...userData, zipCode: e.target.value });
                setErrorForm("")
              }}
            />
            {errorForm.zipCode && (
              <p style={{ color: "red" }}>{errorForm.zipCode}</p>
            )} 
          </div>
          <input type="submit" value="Next" style={{ margin: "10px" }}
          disabled = {(!userData.contact , !userData.perAddress , !userData.curAddress && !userData.zipCode)}  />
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
