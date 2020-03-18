import React from "react";
import { useForm } from "react-hook-form";

import * as firebase from "firebase/app";
import "firebase/auth";

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        window.location.href = "/home";
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }, [props.history]);

  const registerUser = async userData => {
    const { email, password } = userData;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
        <h1 className="text-capitalize text-center">login Form</h1>
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
            Login
          </button>
        </form>
      </div>
    </>
  );
}
