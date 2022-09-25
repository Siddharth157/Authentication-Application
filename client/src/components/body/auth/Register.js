//Register Page (front-end)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import {
  checkEmpty,
  checkEmailValidation,
  checkPasswordLength,
  comparePassword,
} from "../../utils/validation/Validation";

const initState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  err: "",
  success: "",
};

function Register() {
  const [user, setUser] = useState(initState);

  const { name, email, password, confirmPassword, err, success } = user;

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkEmpty(name) || checkEmpty(password))
      return setUser({
        ...user,
        err: "All fields are mandatory to fill.",
        success: "",
      });

    if (!checkEmailValidation(email))
      return setUser({ ...user, err: "Improper Email ID", success: "" });

    if (checkPasswordLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 7 characters.",
        success: "",
      });

    if (!comparePassword(password, confirmPassword))
      return setUser({ ...user, err: "Password comparison failed!.", success: "" });

    try {
      const res = await axios.post("/user/add-details", {
        name,
        email,
        password,
      });

      setUser({ ...user, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="login">
      <h2>Register</h2>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            value={name}
            name="name"
            onChange={handleInputData}
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="Enter your Email ID"
            id="email"
            value={email}
            name="email"
            onChange={handleInputData}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            name="password"
            onChange={handleInputData}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            id="confirmPassword"
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleInputData}
          />
        </div>

        <div className="row">
          <button type="submit">Register</button>
        </div>
      </form>

      <p>
        Already a registered user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
