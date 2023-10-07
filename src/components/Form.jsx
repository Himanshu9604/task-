import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    aadhar: "",
    pan: "",
    mobile: "",
    email: "",
    address: "",
    pin: "",
    country: "",
    state: "",
    district: "",
    gender: "",
    dob: "",
    nomineeName: "",
    middleName: "",
    nomineeSurname: "",
    relation: "",
    panNumber: "",
  });

  const handlePhotoUpload = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSelectPhoto = () => {
    document.getElementById("photoInput").click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <div className="right-top">
        <label htmlFor="photo" className="upload-photo-label">
          {photo ? (
            <img
              src={URL.createObjectURL(photo)}
              alt="Selected"
              className="selected-photo"
            />
          ) : (
            <img src="img-inser.jpeg" alt="Plus Icon" className="plus-icon" />
          )}
        </label>
        <input
          type="file"
          accept="image/*"
          id="photoInput"
          onChange={handlePhotoUpload}
          style={{ display: "none" }}
        />

        <button className="image-upload-btn" onClick={handleSelectPhoto}>
          <span>+</span>Photos
        </button>
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <h2>Personal Details</h2>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="aadhar">Aadhar Number</label>
              <input
                type="file"
                id="aadhar"
                name="aadhar"
                placeholder="Aadhar Number"
                value={formData.aadhar}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="pan">Pan Card</label>
              <input
               type="file"
                id="pan"
                name="pan"
                placeholder="Pan Card"
                value={formData.pan}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="pin">Pin Code</label>
              <input
                type="text"
                id="pin"
                name="pin"
                placeholder="Pin Code"
                value={formData.pin}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="district">District</label>
              <input
                type="text"
                id="district"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <h2>Nominee Details</h2>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="nomineeName">Name</label>
              <input
                type="text"
                id="nomineeName"
                name="nomineeName"
                placeholder="Name"
                value={formData.nomineeName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="middleName">Middle</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Middle"
                value={formData.middleName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="nomineeSurname">Surname</label>
              <input
                type="text"
                id="nomineeSurname"
                name="nomineeSurname"
                placeholder="Surname"
                value={formData.nomineeSurname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="relation">Nominee Relation</label>
              <input
                type="text"
                id="relation"
                name="relation"
                placeholder="Nominee Relation"
                value={formData.relation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="panNumber">Pan Card Number</label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                placeholder="Pan Card Number"
                value={formData.panNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
