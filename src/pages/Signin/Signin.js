import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

//STYLES
import "./Signin.css";

const Signin = () => {
  //SHOW HIDE PASSWORD
  const [showHideLogin, setShowHideLogin] = useState(false);

  const toogleIconLogin = () => {
    setShowHideLogin((prevState) => !prevState);
  };

  return (
    <div>
      <div className="container-signin">
        <form className="form-signin">
          <h1 id="top-text-input-signin">Entre na sua conta</h1>
          <span className="text-inputs-signin">Seu e-mail:</span>
          <input
            className="inputs-signin"
            type="email"
            name="emailInput"
            placeholder="Digite seu e-mail"
          />
          <span className="text-inputs-signin">Senha:</span>
          <input
            className="inputs-signin"
            type={showHideLogin ? "text" : "password"}
            name="passwordInput"
            placeholder="Digite sua senha"
          />
          <span id="icon-password-login" onClick={toogleIconLogin}>
            {showHideLogin ? (
              <MdVisibility size="22" />
            ) : (
              <MdVisibilityOff size="22" />
            )}
          </span>
          <div id="signin-account-btn">
            <Link to="/Home">
              <input type="submit" value="ACESSAR A PLATAFORMA" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
