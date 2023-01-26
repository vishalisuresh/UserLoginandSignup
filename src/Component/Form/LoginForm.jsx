import React, { useEffect, useState } from "react";

const LoginForm = ({ mode, onSubmit }) => {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    createpassword: "",
    repeatpassword: "",
  });

  const handleChange = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (mode === "login") {
      setFormdata({
        ...formdata,
        fullname: "",
        email: "",
        createpassword: "",
        repeatpassword: "",
      });
    } else if (mode === "signup") {
      setFormdata({ ...formdata, username: "", password: "" });
    }
  }, [mode]);

  return (
    <div>
      <div className="form-block__input-wrapper">
        <div className="form-group form-group--login">
          <input
            className="form-group__input"
            type="text"
            id="username"
            name="username"
            label="user name"
            placeholder="user name"
            disabled={mode === "signup"}
            value={formdata.username}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="form-group__input"
            type="password"
            id="password"
            name="password"
            label="password"
            placeholder="password"
            disabled={mode === "signup"}
            value={formdata.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group form-group--signup">
          <input
            className="form-group__input"
            type="text"
            id="fullname"
            name="fullname"
            label="full name"
            placeholder="full name"
            disabled={mode === "login"}
            value={formdata.fullname}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="form-group__input"
            type="email"
            id="email"
            name="email"
            label="email"
            placeholder="email"
            disabled={mode === "login"}
            value={formdata.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="form-group__input"
            type="password"
            id="createpassword"
            name="createpassword"
            label="password"
            placeholder="password"
            disabled={mode === "login"}
            value={formdata.createpassword}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="form-group__input"
            type="password"
            id="repeatpassword"
            name="repeatpassword"
            label="repeat password"
            placeholder="repeat password"
            disabled={mode === "login"}
            value={formdata.repeatpassword}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <button
        className="button button--primary full-width"
        onClick={(e) => onSubmit(e, formdata, mode)}
      >
        {mode === "login" ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
};

export default LoginForm;
