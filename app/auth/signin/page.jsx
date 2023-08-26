"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { signIn } from "next-auth/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [form, setFrom] = useState({ email: "", password: "" });
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  console.log({ form });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-7 h-8 mr-2  mt-4 " src="/logo.svg" alt="logo" />
          <h3 className="mt-4 mx-auto"> SneakerHive </h3>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-blue-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col gap-5 items-center"
            >
              {/* <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setFrom((state) => {
                      return {
                        ...state,
                        email: e.target.value,
                      };
                    });
                  }}
                  className="input-text"
                />
                <span className="icon flex items-center px-4">
                  <HiAtSymbol size={25} />
                </span>
              </div>

              <div className="input-group">
                <input
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  placeholder="password"
                  onChange={(e) => {
                    setFrom((state) => {
                      return {
                        ...state,
                        password: e.target.value,
                      };
                    });
                  }}
                  className="input-text"
                />
                <span
                  className="icon flex items-center px-4"
                  onClick={() => setShow(!show)}
                  // onClick={() => setShow(!show)}
                >
                  <HiFingerPrint size={25} />
                </span>
              </div>

              
              <div
                onClick={() => {
                  signIn("credentials", {
                    ...form,
                    redirect: false,
                  })
                    .then((res) => {
                      console.log({ res });
                    })
                    .catch((error) => {
                      console.log({ error });
                    });
                }}
                className="input-button"
              >
                <button className="button">Login</button>
              </div> */}

              {/* <div className="input-button">
                <button type="button" className="button-custom">
                  Sign in with GitHub
                  <Image src="/github.svg" width={25} height={25} />
                </button>
              </div> */}
            </form>
            <div className="input-button w-full">
              <button
                type="button"
                onClick={() => {
                  signIn("google", { callbackUrl: "http://localhost:3000" });
                }}
                className="button-custom w-full"
              >
                Sign in with Goggle
                <Image src="/goggle.png" width={20} height={20} />
              </button>
            </div>

            {/* bottom */}
            <p className="text-center text-gray-400">
              Don't have an account yet?
              <Link href={"/auth/register"}>
                <span className="text-blue-700">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
