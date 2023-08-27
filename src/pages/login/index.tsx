import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { AiOutlineGithub, AiFillGoogleCircle } from "react-icons/ai";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    // createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className="flex justify-center items-center m-10">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl flex justify-center items-center p-3">
            Login
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Required !!!",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "Invalid Email Provided !!!",
                  },
                })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password Required !!!",
                  },
                  pattern: {
                    value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                    message:
                      "Password Must be 8 char including a special char !!!",
                  },
                })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" value={"Login"} />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="btn my-2"
              >
                <AiFillGoogleCircle />
                Login With Google
              </button>
              <button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="btn my-2"
              >
                <AiOutlineGithub />
                Login With Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
