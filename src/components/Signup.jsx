import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneRegex = /^\d{10}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({
      phoneNumber: "",
      password: "",
    });
  };

  return (
    <div className="signup-container">
      <div className="left-card">
        <div className="card-heading">Benefits of Saving Account</div>
        <ul className="bullet-list">
          <li>
            <img src="thumb-icon.png" alt="Thumb Icon" className="icon" />
            <strong>Liquidity:</strong> One of the benefits of opening a savings
            account is that it offers you liquidity.
          </li>
          <li>
            <img src="thumb-icon.png" alt="Another Icon" className="icon" />
            <strong>Second Point:</strong> Here is another benefit of a savings
            account.
          </li>
          <li>
            <img src="thumb-icon.png" alt="Yet Another Icon" className="icon" />
            <strong>Third Point:</strong> Another advantage of a savings
            account.
          </li>
          <li>
            <img src="thumb-icon.png" alt="Final Icon" className="icon" />
            <strong>Fourth Point:</strong> The last benefit of a savings
            account.
          </li>
        </ul>
      </div>
      <div className="right-card">
        <div className="inner-card">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phoneNumber">Enter Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter Password:</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? (
                    <i className="fas fa-eye"></i>
                  ) : (
                    <i className="fas fa-eye-slash"></i>
                  )}
                </button>
              </div>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="become-member">Become a Member</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
