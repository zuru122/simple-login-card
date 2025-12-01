import React from "react";
import { useForm } from "react-hook-form";

function LoginCard() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const twitterValue = watch("twitterHandle");
  const isTouched = touchedFields.twitterHandle;
  const isError = errors.twitterHandle;
  const isValid = twitterValue && isTouched && !isError;

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white/50 p-10 rounded-2xl shadow-lg w-[350px]">
        {/* Title */}
        <h2 className="font-bold text-3xl">Login</h2>
        <span className="block font-bold">to start learning</span>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-4"
        >
          {/* Twitter Input */}
          <label className="text-gray-400">Twitter handle</label>
          <div className="relative w-full flex items-center">
            <input
              {...register("twitterHandle", {
                required: true,
                minLength: 4,
              })}
              type="text"
              placeholder="@zurudcoder"
              className={`w-full p-2 border rounded-sm outline-none transition-colors
                ${!isTouched ? "border-gray-200" : ""}
                ${isError ? "border-red-500" : ""}
                ${isValid ? "border-green-500" : ""}
              `}
            />

            {/* Dynamic Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute size-6 right-2 top-1/2 -translate-y-1/2 transition-colors
                ${!isTouched ? "text-gray-300" : ""}
                ${isError ? "text-red-500" : ""}
                ${isValid ? "text-green-500" : ""}
              `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          {/* Password */}
          <label className="text-gray-400">Password</label>
          <input
            type="password"
            className="p-2 border rounded-sm border-gray-200 outline-none"
            placeholder="••••••••"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 font-semibold cursor-pointer text-white rounded-lg shadow-lg bg-blue-600 
                       hover:-translate-y-1 active:translate-y-1 hover:bg-blue-700 active:shadow-sm
                       transition-transform duration-300 ease-in-out mt-4"
          >
            Login →
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-sm text-center text-gray-400">
          <span>Don't have an account? </span>
          <a href="#" className="text-gray-500 hover:underline">
            <strong>Sign</strong> up
          </a>
          <span> now!</span>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
