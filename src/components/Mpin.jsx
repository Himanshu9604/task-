import React, { useState } from "react";
import "./Mpin.css";

function Mpin() {
  const [formData, setFormData] = useState({
    mpin: ["", "", "", ""],
  });

  const handleMpinChange = (event, index) => {
    const { value } = event.target;
    const updatedMpin = [...formData.mpin];
    updatedMpin[index] = value;
    setFormData({ mpin: updatedMpin });
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
          <h3 className="mpin-heading">Enter MPIN</h3>

          <form>
            <div className="mpin-input">
              <div className="mpin-boxes">
                {formData.mpin.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    className="mpin-box"
                    value={digit}
                    maxLength="1"
                    onChange={(event) => handleMpinChange(event, index)}
                  />
                ))}
              </div>
            </div>
            <div className="forgot-password">
              <a href="#">Forget MPIN?</a>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="become-member">
              <span style={{ color: "red" }}>Become a Member</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mpin;
