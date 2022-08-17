//IMPORTS
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordChecklist from "react-password-checklist"

//STYLES
import "./Signup.css";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [stateEmail, setStateEmail] = useState("");
  const [statePassword, setStatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputForm = {
      name: displayName,
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

    fetch("https://api-musivyd.herokuapp.com/api/auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Crie sua conta</h1>
          <span className="text-inputs-signup">Seu nome:</span>
          <input
            className="inputs"
            name="name"
            placeholder="Digite o seu nome"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <span className="text-inputs-signup">Seu e-mail:</span>
          <input
            id="email"
            className="inputs"
            name="email"
            placeholder="Digite o seu e-mail"
            type="email"
            value={stateEmail}
            onChange={(e) => setStateEmail(e.target.value)}
          />
          <span className="text-inputs-signup">Crie uma senha:</span>
          <input
            id="password"
            className="inputs"
            name="password"
            placeholder="Digite a sua senha"
            type="text"
            value={statePassword}
            onChange={(e) => setStatePassword(e.target.value)}
          />
          <small id="textPassword"></small>
          <span className="text-inputs-signup">Confirme sua senha:</span>
          <input
            className="inputs"
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div id="check-password">
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={statePassword}
              valueAgain={confirmPassword}
              messages={{
                minLength: "A senha deve conter ao menos 8 caracteres.",
                specialChar: "A senha deve conter caracteres especiais.",
                number: "A senha deve conter ao menos um número.",
                capital: "A senha deve conter ao menos uma letra maíuscula.",
                match: "As senhas devem ser iguais.",
              }}
            />
          </div>

          <div id="create-account-btn">
            <input type="submit" value="CRIAR CONTA" />
          </div>
          <span className="link-login">
            <p>Já possui conta?</p>
            <Link className="entrar" to="/Signin">
              <p>Entrar</p>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
