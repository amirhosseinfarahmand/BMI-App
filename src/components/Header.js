import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import { useShow, useShowAction } from "../providers/ShowProvider";

const Header = () => {
  const user = useUser();
  const show = useShow();
  const setShow = useShowAction();
  console.log(user);
  return (
    <header className="w-full lg:h-[60px] flex flex-col lg:flex-row p-4 items-center justify-between bg-[#5EEAD4]">
      <div>
        <p className="ml-2 mb-2 lg:mb-0 text-[#14B8A6] text-[25px]">BMI App</p>
      </div>
      <div className="flex w-[300px] justify-evenly text-white sm:mr-[50px]">
        <p className="bg-[#2DD4BF] rounded-md flex items-center ">
          <Link to="/BMI" className=" p-3" onMouseEnter={() => setShow(false)}>
            BMI محاسبه{" "}
          </Link>
        </p>

        <p
          className="bg-[#2DD4BF] rounded-md p-3 flex items-center"
          onMouseEnter={() => setShow(true)}
        >
          {user?.length ? user : "ورود/عضویت"}
        </p>

        <p className="bg-[#2DD4BF] rounded-md flex items-center">
          <Link to="/" className=" p-3" onMouseEnter={() => setShow(false)}>
            خانه
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
