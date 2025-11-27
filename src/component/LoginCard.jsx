import React from "react";
import { useState } from "react";

function LoginCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[350px]">
        {/* Logo / Title */}
        <h2 className="font-bold text-3xl">Login</h2>
        <span className="block font-bold">to start learning</span>
        {/* Form fields */}
        <form action="#" className="mt-6 flex flex-col gap-4">
          <label htmlFor="input" className="text-gray-400">
            Twitter handle
          </label>
          <input
            type="text"
            placeholder="@zurudcoder"
            className="outline-red-400 p-2 border rounded-sm border-gray-200"
          />

          <label htmlFor="password" className="text-gray-400">
            Password
          </label>
          <input
            type="password"
            className="outline-red-400 p-2 border rounded-sm border-gray-200"
          />
        </form>
        {/* Submit button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-full py-3 font-semibold cursor-pointer text-white rounded-lg shadow-lg bg-blue-600 
                       hover:-translate-y-1 active:translate-y-1 hover:bg-blue-700 active:shadow-sm
                       transition-transform duration-300 ease-in-out"
          >
            Login &rarr;
          </button>
        </div>

        {/* Footer link */}
        <div className="mt-6 text-sm text-center text-gray-400">
          <span>Don't have an account? </span>
          <a href="#" className="text-gray-500 hover:underline">
            <strong>Sign </strong> up
          </a>
          <span> now! </span>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
