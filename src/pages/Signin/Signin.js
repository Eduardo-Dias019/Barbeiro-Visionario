import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'

//STYLES
import "./Signin.css";

const Signin = () => {
  const [stateEmail, setStateEmail] = useState("");
  const [statePassword, setStatePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputForm = {
      email: stateEmail,
      password: statePassword,
    };

    console.log(inputForm);

    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(inputForm),
      redirect: "follow",
    };

    const response = await fetch(requestOptions);
    console.log("response: ", response);

    fetch("https://api-musivyd.herokuapp.com/api/auth/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 id="top-text-input">Entre na sua conta</h1>
          <span className="text-inputs-signin">Seu e-mail:</span>
          <input
            className="inputs"
            type="email"
            name="emailInput"
            placeholder="Digite seu e-mail"
            value={stateEmail}
            onChange={(e) => setStateEmail(e.target.value)}
          />
          <span className="text-inputs-signin">Senha:</span>
          <input
            className="inputs"
            type="text"
            name="passwordInput"
            placeholder="Digite sua senha"
            value={statePassword}
            onChange={(e) => setStatePassword(e.target.value)}
          />
          <div id="signin-account-btn">
            <Link to="/Home">
              <input type="submit" value="ACESSAR A PLATAFORMA" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
