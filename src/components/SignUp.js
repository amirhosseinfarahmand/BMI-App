import * as yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Input from "../common/Input";
import { useUserAction, useUser } from "../providers/UserProvider";
import { useShowAction } from "../providers/ShowProvider";
import { useNavigate } from "react-router";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfrim: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("UserName is required!")
    .min(6, "UserName length is not valid!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Invalid email format!"),
  password: yup
    .string()
    .required("Password is required!")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase"
    ),
  passwordConfrim: yup
    .string()
    .required("PasswordConfirm required!")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const setUser = useUserAction();
  const navigate = useNavigate();
  const setShow = useShowAction();
  const user = useUser();

  const [state, setState] = useState([]);
  console.log(user);
  const onSubmit = (values) => {
    setUser([
      {
        password: values.password,
        email: values.email,
        name: values.name,
      },
    ]);
    localStorage.setItem(
      "user",
      JSON.stringify([
        ...state,
        { name: values.name, email: values.email, password: values.password },
      ])
    );
    setUser(values.name);
    navigate("/");
  };

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("user"));
    setState(save);
  }, [user]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div
      className="flex flex-col  mt-[100px] justify-center items-center"
      onMouseEnter={() => setShow(false)}
    >
      <div className="bg-[#F5F5F4] rounded-lg p-5 ">
        <p
          className="text-center text-[25px]"
          style={{ fontFamily: "Sofia,cursive" }}
        >
          ثبت نام
        </p>
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="name" type="text" label="UserName" />
          <Input formik={formik} name="email" type="text" label="Email" />
          <Input
            formik={formik}
            name="password"
            type="password"
            label="Password"
          />
          <Input
            formik={formik}
            name="passwordConfrim"
            type="password"
            label="PasswordConfirm"
          />
          <button type="submit" className="mt-4 w-full bg-[#FB923C] rounded-lg">
            تایید
          </button>
          <p
            onClick={() => navigate("/login")}
            className="text-center mt-2 text-red-400 cursor-pointer"
          >
            عضو هستید؟ کلیک کنید
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
