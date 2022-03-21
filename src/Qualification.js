import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const Qualification = ({
  userData,
  setUserData,
  previousPage,
  errorForm,
  setErrorForm,
  validate,
}) => {
  const [detail, setDetail] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      (userData.age &&
        userData.qualification &&
        userData.company  &&
        userData.experience) 
    ) {
      handleShow();
    }
    setErrorForm(validate(userData));

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
    setDetail([...detail , user]);
    console.log(detail, "detail");
  };

  return (
    <div className="container">
      <h2> Qualification </h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="age">Age</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.age ? "2px solid red" : "" }}
              type="text"
              id="age"
              name="age"
              placeholder="00"
              value={userData.age}
              onChange={(e) => {
                setUserData({ ...userData, age: e.target.value });
                setErrorForm("");
              }}
            />{" "}
            {errorForm.age ? (
              <p style={{ color: "red" }}> {errorForm.age} </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="qulification">Qulification</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.qualification ? "2px solid red" : "" }}
              type="text"
              id="Qulification"
              name="Qulification"
              placeholder="Qulification.."
              value={userData.qualification}
              onChange={(e) => {
                setUserData({ ...userData, qualification: e.target.value });
                setErrorForm("");
              }}
            />{" "}
            {errorForm.qualification ? (
              <p style={{ color: "red" }}>{errorForm.qualification}</p>
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
              style={{ border: errorForm.company ? "2px solid red" : "" }}
              type="text"
              id="Company"
              name="Company"
              placeholder="Company.."
              value={userData.company}
              onChange={(e) => {
                setUserData({ ...userData, company: e.target.value });
                setErrorForm("");
              }}
            />{" "}
            {errorForm.company ? (
              <p style={{ color: "red" }}>{errorForm.company}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="Experience">Experience</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: errorForm.experience ? "2px solid red" : "" }}
              type="text"
              id="Experience"
              name="Experience"
              placeholder="Experience.."
              value={userData.experience}
              onChange={(e) => {
                setUserData({ ...userData, experience: e.target.value });
                setErrorForm("");
              }}
            />{" "}
            {errorForm.experience ? (
              <p style={{ color: "red" }}> {errorForm.experience} </p>
            ) : (
              ""
            )}
          </div>
          <input type="submit" onSubmit={handleSubmit} value="Submit" style={{ margin: "10px" }} 
          disabled = {(!userData.age && !userData.qualification && !userData.company && !userData.experience)}/>
        </div>
      </form>

      <button
            onClick={()=>previousPage()}
            style={{ margin: "10px", width: "20%" }}
          >
            Previous 
          </button>

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
