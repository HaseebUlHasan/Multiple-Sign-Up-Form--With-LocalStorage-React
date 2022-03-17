import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const Qualification = ({ userData, setUserData, previousPage }) => {
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.age.length < 2 ||
      userData.qualification.lenght < 2 ||
      userData.company.lenght < 5 ||
      userData.experience.lenght < 1
    ) {
      setError(true);
    } else {
      handleShow();
    }
    const user = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      contact: userData.contact,
      perAddress: userData.perAddress,
      curAddress: userData.curAddress,
      zipCode: userData.zipCode,
      age: userData.age,
      qualification: userData.qualification,
      company: userData.company,
      experience: userData.experience,
    };
    setDetail([...detail, user]);
    console.log(detail, "detail");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="age">Age</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="age"
              name="age"
              placeholder="00"
              value={userData.age}
              onChange={(e) => {
                setUserData({ ...userData, age: e.target.value });
              }}
            />{" "}
            {error ? <p style={{ color: "red" }}>Enter Your age</p> : ""}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="qulification">Qulification</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="Qulification"
              name="Qulification"
              placeholder="Qulification.."
              value={userData.qualification}
              onChange={(e) => {
                setUserData({ ...userData, qualification: e.target.value });
              }}
            />{" "}
            {error ? (
              <p style={{ color: "red" }}>Enter Your Qualification</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Company</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="Company"
              name="Company"
              placeholder="Company.."
              value={userData.company}
              onChange={(e) => {
                setUserData({ ...userData, company: e.target.value });
              }}
            />{" "}
            {error ? <p style={{ color: "red" }}>Enter Company Name</p> : ""}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="Experience">Experience</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: error ? "2px solid red" : "" }}
              type="text"
              id="Experience"
              name="Experience"
              placeholder="Experience.."
              value={userData.experience}
              onChange={(e) => {
                setUserData({ ...userData, experience: e.target.value });
              }}
            />{" "}
            {error ? <p style={{ color: "red" }}>Enter Your Experience</p> : ""}
          </div>
          <input type="submit" value="Submit" style={{ margin: "10px" }} />
          <button
            onClick={previousPage}
            style={{ margin: "10px", width: "20%" }}
          >
            {" "}
            Previous{" "}
          </button>
        </div>
      </form>

      {detail.map((det) => {
        return (
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>User Detail </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                First Name : {det.firstName} <br />
                Last Name : {det.lastName} <br />
                Email: {det.email} <br />
                Age : {det.age} <br />
                Password : {det.password} <br />
                Contact No : {det.contact} <br />
                Permanent Address : {det.perAddress} <br />
                Current Address : {det.perAddress} <br />
                Zipcode : {det.zipCode} <br />
                Qualification : {det.qualification} <br />
                Company : {det.company} <br />
                Experience : {det.experience}
                <br />
              </Modal.Body>
            </Modal>
          </>
        );
      })}
    </div>
  );
};

export default Qualification;
