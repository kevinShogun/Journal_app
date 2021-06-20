import React from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { setError, removeError } from "../../actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "kevin",
    email: "gkebin@gmail.com",
    password: "123456",
    confirm: "123456",
  });

  const { name, email, password, confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(setError("All Acces"));
    }
  };

  const isFormValid = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      dispatch(setError("Register Error Empty Field"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email is Requiered"));
      return false;
    } else if (password.trim() !== confirm.trim()) {
      dispatch(setError("the password isn't equal"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("the password is short, should be at least 6 characters"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <img
        className="auth__icon-user"
        src={`../assets/password.svg`}
        alt="google button"
      />

      <div className="auth__alert-error">Error 🚫 😕</div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          onChange={handleInputChange}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          onChange={handleInputChange}
          value={email}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          value={password}
        />

        <input
          type="password"
          placeholder="Confirm"
          name="confirm"
          className="auth__input"
          onChange={handleInputChange}
          value={confirm}
        />

        <button type="submit" className="btn btn-primary mb-5 mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link mb-5">
          Alredy Registered?
        </Link>
      </form>
    </>
  );
};
