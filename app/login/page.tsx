"use client";
import React, { useState } from "react";
import { FaGit, FaGithub, FaTwitter } from "react-icons/fa";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export default function Login() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className="mt-16 p-4">
      <h3 className="text-3xl font-bold text-center">Enter to Carrot</h3>
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
          <div className="mt-8 border-b w-full grid grid-cols-2 gap-16">
            <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "email"
                  ? "border-b-2 border-orange-400 text-orange-400"
                  : "border-transparent text-gray-500"
              )}
              onClick={onEmailClick}
            >
              Email
            </button>
            <button
              className={cls(
                "pb-4 font-medium border-b-2",
                method === "phone"
                  ? "border-b-2 border-orange-400 text-orange-400"
                  : "border-transparent text-gray-500"
              )}
              onClick={onPhoneClick}
            >
              Phone
            </button>
          </div>
        </div>
      </div>
      <form className="flex flex-col mt-8">
        <label className="text-sm font-medium text-gray-700">
          {method === "email" ? "Email address" : null}
          {method === "phone" ? "Phone number" : null}
        </label>
        <div className="mt-1">
          {method === "email" ? (
            <input
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              type="email"
              required
            />
          ) : null}
          {method === "phone" ? (
            <div className="flex rounded-md shadow-sm">
              <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
                +82
              </span>
              <input
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 rounded-l-none"
                type="number"
                required
              />
            </div>
          ) : null}
        </div>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          {method === "email" ? "Get login link" : null}
          {method === "phone" ? "Get one-time password" : null}
        </button>
      </form>
      <div className="mt-8">
        <div className="relative">
          <div className="absolute w-full border-t border-gray-300" />
          <div className="relative -top-3 text-center">
            <span className="bg-white px-2 text-sm text-gray-500">
              Or enter with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-6 gap-3">
          <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-white font-medium text-gray-500 hover:bg-gray-50">
            <FaTwitter />
          </button>
          <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm bg-white font-medium text-gray-500 hover:bg-gray-50">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
}
