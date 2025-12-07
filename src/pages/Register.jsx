import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log("after register", data);
  };
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <fieldset className="fieldset">
        <label className="label">Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="input"
          placeholder="Your Name"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-500" role="alert">
            Name is required.
          </p>
        )}
        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="input"
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500" role="alert">
            Email is required.
          </p>
        )}
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
          })}
          className="input"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500" role="alert">
            password is required.
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500" role="alert">
            password must be 6 characters or longer.
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500" role="alert">
            password must have at least one uppercase,at least one lowercase,at
            least one number.
          </p>
        )}

        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn btn-neutral mt-4">Register</button>
      </fieldset>
    </form>
  );
};

export default Register;
