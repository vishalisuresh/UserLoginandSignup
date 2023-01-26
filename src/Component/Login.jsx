import React, { useState } from "react";
import LoginForm from "./Form/LoginForm";

const LoginComponent = ({ mode, onSubmit }) => {
  const [inputs, setInputs] = useState({
    mode,
  });
  const toggleMode = () => {
    var newMode = inputs.mode === "login" ? "signup" : "login";
    setInputs({ mode: newMode });
  };

  const handleMode = (e, formdata, usermode) => {
    onSubmit(e, formdata, usermode);
    if (usermode === "signup") {
      setInputs({ mode: "login" });
    }
  };
  return (
    <div>
      <div
        className={`form-block-wrapper form-block-wrapper--is-${inputs.mode}`}
      ></div>
      <section className={`form-block form-block--is-${inputs.mode}`}>
        <header className="form-block__header">
          <h1>{inputs.mode === "login" ? "Welcome back!" : "Sign up"}</h1>
          <div className="form-block__toggle-block">
            <span>
              {inputs.mode === "login" ? "Don't" : "Already"} have an account?
              Click here &#8594;
            </span>
            <input
              id="form-toggler"
              type="checkbox"
              onClick={() => toggleMode()}
            />
            <label htmlFor="form-toggler"></label>
          </div>
        </header>
        <LoginForm mode={inputs.mode} onSubmit={handleMode} />
      </section>
    </div>
  );
};

export default LoginComponent;
