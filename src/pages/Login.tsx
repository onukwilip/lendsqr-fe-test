import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import css from "../styles/login/Login.module.scss";
import svgImg from "../assets/img/pablo-sign-in 1demo.svg";
import { useNavigate } from "react-router-dom";
import { LoginFormType, PasswordInputType } from "../types";

// https://www.lendsqr.com/assets/icons/header-logo.svg

export const LoginForm: LoginFormType = ({ onSubmit, tooglePasswordType }) => {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const tooglePassword = () => {
    if (tooglePasswordType)
      return tooglePasswordType(passwordType, setPasswordType);

    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const submitHandler = () => {
    if (onSubmit) return onSubmit();
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <div className={css["login-form"]}>
        <div className={css.heading}>
          <h2>Welcome!</h2>
          <p>Enter details to login</p>
        </div>
        <br />
        <br />
        <Form
          className={css.form}
          onSubmit={submitHandler}
          data-testid="loginForm"
        >
          <Form.Input
            placeholder="Enter email"
            className={css.input}
            type="email"
            required
          />
          <PasswordInput
            passwordType={passwordType}
            tooglePassword={tooglePassword}
          />
          <br />
          <a href="#" className={css["forgot-password"]}>
            Forgot password?
          </a>
          <br />
          <div className="actions">
            <Button
              animated="fade"
              className="my-button"
              style={{ height: 50 }}
            >
              <Button.Content visible>LOG IN</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <section className={css.login}>
      <div className={css.left}>
        <div className={css["logo-container"]}>
          <img
            src="https://www.lendsqr.com/assets/icons/header-logo.svg"
            alt="logo"
          />
        </div>
        <div className={css["svg-container"]}>
          <img src={svgImg} alt="svg" />
        </div>
      </div>
      <div className={css.right}>
        <LoginForm />
      </div>
    </section>
  );
};

const PasswordInput: PasswordInputType = ({ passwordType, tooglePassword }) => {
  return (
    <div className={css["password-input"]}>
      <input
        placeholder="Enter password"
        type={passwordType}
        minLength={8}
        required
      />
      <button
        onClick={tooglePassword as any}
        type="button"
        data-testid="passwordToogle"
      >
        {passwordType === "password" ? "SHOW" : "HIDE"}
      </button>
    </div>
  );
};

export default Login;
