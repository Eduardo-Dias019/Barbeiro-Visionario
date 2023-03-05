//IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";

//STYLES
import "./Signup.css";

const Signup = () => {
  //SHOW HIDE PASSWORD
  const [showHide, setShowHide] = useState(false);
  const [showHideConfirm, setShowHideConfirm] = useState(false);

  const toogleIcon = () => {
    setShowHide((prevState) => !prevState);
  };
  const toogleIconConfirm = () => {
    setShowHideConfirm((prevState) => !prevState);
  };

  return (
    <div className="signup-container">
      <form className="form-signup">
        <h1 className="create-account-tittle">Crie sua conta</h1>
        <span className="text-inputs-signup">Crie uma senha:</span>
        <input
          id="password"
          className="inputs"
          name="password"
          placeholder="Digite a sua senha"
          type={showHide ? "text" : "password"}
        />
        <span id="icon-password" onClick={toogleIcon}>
          {showHide ? (
            <MdVisibility size="22" />
          ) : (
            <MdVisibilityOff size="22" />
          )}
        </span>
        <span className="text-inputs-signup">Confirme sua senha:</span>
        <input
          className="inputs"
          name="confirmPassword"
          placeholder="Confirme a sua senha"
          type={showHideConfirm ? "text" : "password"}
        />
        <span id="icon-confirm-password" onClick={toogleIconConfirm}>
          {showHideConfirm ? (
            <MdVisibility size="22" />
          ) : (
            <MdVisibilityOff size="22" />
          )}
        </span>

        <div id="create-account-btn">
          <input type="submit" value="CRIAR CONTA" />
        </div>
        <span className="link-login">
          <p>Já possui conta?</p>
          <Link className="entrar" to="/Signin">
            <p>Entrar</p>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
