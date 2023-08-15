"use client";
import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import { cls } from "@/libs/client/utils";
import { Token } from "@prisma/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaTwitter } from "react-icons/fa";

interface EnterForm {
  email?: string;
  phone?: number;
}
interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}
export default function Login() {
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/user-enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/user-confirm");
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<EnterForm>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };
  const onValid = (validForm: EnterForm) => {
    enter(validForm);
  };
  const onTokenValid = (validForm: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };
  const onInValid = () => {};
  return (
    <div className="mt-16 p-4">
      <h3 className="text-3xl font-bold text-center">Enter to Carrot</h3>
      <div className="mt-8">
        {data?.ok ? (
          <>
            <form
              onSubmit={tokenHandleSubmit(onTokenValid)}
              className="flex flex-col mt-8 space-y-4"
            >
              <Input
                register={tokenRegister("token")}
                name="token"
                label="Confirmation Token"
                type="number"
                required
              />

              <button
                type="submit"
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
              >
                {!tokenLoading ? "Confirm Token" : "Loading..."}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h5 className="text-sm text-gray-500 font-medium">
                Enter using:
              </h5>
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
            <form
              onSubmit={handleSubmit(onValid, onInValid)}
              className="flex flex-col mt-8 space-y-4"
            >
              {method === "email" ? (
                <Input
                  register={register("email")}
                  name="email"
                  label="Email address"
                  type="email"
                  kind="text"
                  required
                />
              ) : null}
              {method === "phone" ? (
                <Input
                  register={register("phone")}
                  name="phone"
                  label="Phone number"
                  type="number"
                  kind="phone"
                  required
                />
              ) : null}
              <button
                type="submit"
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
              >
                {!loading
                  ? method === "email"
                    ? "Get login link"
                    : "Get one-time password"
                  : "Loading..."}
              </button>
            </form>
          </>
        )}
      </div>

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
