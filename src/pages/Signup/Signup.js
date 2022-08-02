//IMPORTS
import React from "react";

//STYLES
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Crie sua conta</h1>
          <span className="text-inputs-signup">Seu nome:</span>
          <input
            className="inputs"
            type="text"
            name="nameInput"
            placeholder="Digite seu nome"
          />
          <span className="text-inputs-signup">Seu e-mail:</span>
          <input
            className="inputs"
            type="email"
            name="emailInput"
            placeholder="Digite seu e-mail"
          />
          <span className="text-inputs-signup">Senha:</span>
          <input
            className="inputs"
            type="text"
            name="passwordInput"
            placeholder="Crie uma senha"
          />
          <div id="requirements">
            <h4>A senha deve conter:</h4>
            <h4>Ao menos 8 caracteres</h4>
            <h4>Uma letra maíuscula</h4>
            <h4>Uma letra minúscula</h4>
            <h4>Ao menos um número</h4>
            <h4>Ao menos um caractere especial</h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
