import React from "react";
import LoginComponent from "./Component/Login";

import "./App.scss";

const App = () => {
  const mode = "login";

  const handleSubmit = (e, formdata, usermode) => {
    e.preventDefault();
    if (usermode === "login") {
      let data = {
        username: formdata.username,
        password: formdata.password,
      };
      console.log(data);
    } else if (usermode === "signup") {
      let data = {
        fullname: formdata.fullname,
        email: formdata.email,
        createpassword: formdata.createpassword,
        repeatpassword: formdata.repeatpassword,
      };
      console.log(data);
    }
  };

  return (
    <div className={`app app--is-${mode}`}>
      <LoginComponent
        mode={mode}
        onSubmit={(e, formdata, usermode) =>
          handleSubmit(e, formdata, usermode)
        }
      />
    </div>
  );
};

export default App;
