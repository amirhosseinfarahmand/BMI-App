import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../common/Input";
import { useState, useEffect } from "react";
import { useUser, useUserAction } from "../providers/UserProvider";
import { useShowAction } from "../providers/ShowProvider";
import { useNavigate } from "react-router";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required!")
    .email("Invalid email format!"),
  password: yup.string().required("Password is required!"),
});

const Login = () => {
  const navigate = useNavigate();
  const setLogin = useUserAction();
  const setShow = useShowAction();

  const onSubmit = (values) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const find = user.find(
      (state) =>
        state.email === values.email && state.password === values.password
    );
    console.log(find);
    if (find) {
      setLogin(find.name);
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div
      className="flex flex-col mt-[100px] justify-center items-center"
      onMouseEnter={() => setShow(false)}
    >
      <div className="bg-[#F5F5F4] p-5 rounded-lg relative">
        <p
          className="text-center text-[25px]"
          style={{ fontFamily: "Sofia,cursive" }}
        >
          ورود
        </p>
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="email" type="text" label="Email" />

          <Input
            formik={formik}
            name="password"
            type="password"
            label="Password"
          />
          <button
            type="submit"
            className="mt-4 w-full h-10 flex items-center justify-center bg-[#FB923C] rounded-lg"
          >
            ورود
          </button>
          <p
            className="text-center mt-2 text-[#F97316] cursor-pointer"
            onClick={() => navigate("/user")}
          >
            ثبت نام نکرده‌اید؟ کلیک کنید
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
