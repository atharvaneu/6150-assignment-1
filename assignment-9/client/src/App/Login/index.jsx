import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./app.css";
import { saveUserSession } from "../../utils/cookies";
import Card from "../../Components/Card";

const BACKGROUNDIMAGEURL = `https://wallpapers.com/images/hd/retro-strips-color-background-gyt0ph241b0xk6en.jpg`;

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleFormInputChange(e, fieldName) {
    switch (fieldName) {
      case "email":
        setFormData((prev) => {
          return { ...prev, email: e.target.value };
        });
        break;
      case "password":
        setFormData((prev) => {
          return { ...prev, password: e.target.value };
        });
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/user/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(({ user, errMsg }) => {
        if (errMsg === "USER_NOT_EXIST") {
          alert("User not exist");
          return;
        } else if (errMsg === "PASSWORD_NOT_MATCH") {
          alert("Password is incorrect");
          return;
        }

        saveUserSession(user);

        navigate("/");
      });
  }

  return (
    <section
      style={{
        backgroundImage: `url(${BACKGROUNDIMAGEURL})`,
        backgroundPosition: "center",
      }}
    >
      <Card
        title="Login to your account"
        customStyles={{ marginTop: "15rem", height: "20%", width: "20%" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={(e) => handleFormInputChange(e, "email")}
              name="email"
              id="email"
            />
          </div>

          <div className="field-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => handleFormInputChange(e, "password")}
              name="password"
              id="password"
            />
          </div>
          <input type="submit" className="form-submit-btn" value={"Login"} />
        </form>
      </Card>
    </section>
  );
}

export default Login;
