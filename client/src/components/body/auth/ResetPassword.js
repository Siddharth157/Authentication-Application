import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import {
  checkPasswordLength,
  comparePassword,
} from "../../utils/validation/Validation";

const initialState = {
  password: "",
  confirmPassword: "",
  err: "",
  success: "",
};

function ResetPassword() {
  const [data, setData] = useState(initialState);
  const { token } = useParams();

  const { password, confirmPassword, err, success } = data;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPass = async () => {
    if (checkPasswordLength(password))
      return setData({
        ...data,
        err: "Password must be at least 7 characters.",
        success: "",
      });

    if (!comparePassword(password, confirmPassword))
      return setData({
        ...data,
        err: "Password comparison failed.",
        success: "",
      });

    try {
      const res = await axios.post(
        "/user/reset-password",
        { password },
        {
          headers: { Authorization: token },
        }
      );

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="fg_pass">
      <h2>Reset you password</h2>

      <div className="row">
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChangeInput}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeInput}
        />

        <button onClick={handleResetPass}>Reset Password</button>
      </div>
    </div>
  );
}

export default ResetPassword;
