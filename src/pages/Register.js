import React from "react";
import { useForm } from "react-hook-form";

import * as firebase from "firebase/app";
import "firebase/auth";

export default function Register(props) {
  const { register, handleSubmit, errors } = useForm();

  const registerUser = async userData => {
    const { email, password } = userData;
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => (window.location.href = "/home"))
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        let errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const onSubmit = async data => {
    await registerUser(data);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-capitalize text-center">Register Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mb-5"
          style={{ padding: "2% 20%" }}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter a Valid Email"
              id="email"
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              name="password"
              ref={register({ required: true, maxLength: 100 })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary text-light">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
