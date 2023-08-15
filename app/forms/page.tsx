"use client";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less codes
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier Inputs
interface LoginForm {
  username: string;
  email: string;
  password: number;
}
export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = (data: LoginForm) => {
    console.log(data);
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onValid, onInValid)}
      className="p-5 flex flex-col space-y-3"
    >
      <input
        {...register("username", {
          required: "username required",
          minLength: {
            value: 5,
            message: "username should be longer than 5 chars.",
          },
        })}
        type="text"
        placeholder="username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "email required",
          validate: {
            noGmail: (value) =>
              !value.includes("@gmail.com") || "gmail not allowed ",
          },
        })}
        type="email"
        placeholder="email"
      />
      <input
        {...register("password", { required: "password required" })}
        type="number"
        placeholder="password"
      />
      <input type="submit" value="sumbit" />
    </form>
  );
  //   const [username, setUsername] = useState("");
  //   const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //     const {
  //       currentTarget: { value },
  //     } = event;
  //     setUsername(value);
  //   };
  //   const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     console.log(username);
  //     setUsername("");
  //   };
  //   return (
  //     <>
  //       <form className="p-10 flex flex-col space-y-2" onSubmit={onSubmit}>
  //         <input
  //           value={username}
  //           type="text"
  //           placeholder="Username"
  //           onChange={onChange}
  //         />
  //         <input type="submit" value="Submit" />
  //       </form>
  //       {username ? <div>Username : {username}</div> : null}
  //     </>
  //   );
}
