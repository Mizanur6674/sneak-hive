"use client";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img class="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
          <h3 className="">SneakerHive</h3>
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form className="flex flex-col gap-5 items-center">
              <div className="input-group">
                <input
                  type="text"
                  name="Username"
                  placeholder="Username"
                  className="input-text"
                />
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} />
                </span>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-text"
                />
                <span className="icon flex items-center px-4">
                  <HiAtSymbol size={25} />
                </span>
              </div>

              <div className="input-group">
                <input
                  type={`${show.password ? "text" : "password"}`}
                  name="password"
                  placeholder="password"
                  className="input-text"
                />
                <span
                  className="icon flex items-center px-4"
                  onClick={() => setShow({ ...show, password: !show.password })}
                >
                  <HiFingerPrint size={25} />
                </span>
              </div>

              <div className="input-group">
                <input
                  type={`${show.cpassword ? "text" : "password"}`}
                  name="cpassword"
                  placeholder="Confirm Password"
                  className="input-text"
                />
                <span
                  className="icon flex items-center px-4"
                  onClick={() =>
                    setShow({ ...show, password: !show.cpassword })
                  }
                >
                  <HiFingerPrint size={25} />
                </span>
              </div>

              {/* login */}
              <div className="input-button">
                <button type="submit" className="button">
                  <Link href={"/"}>Login</Link>
                </button>
              </div>
            </form>

            {/* bottom */}
            <p className="text-center text-gray-400">
              Have an Account?
              <Link href={"/auth/signin"}>
                {" "}
                <span className="text-blue-700">Sign in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
