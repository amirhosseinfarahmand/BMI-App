import React, { useState } from "react";
import { useUser, useUserAction } from "../providers/UserProvider";
import { useShow, useShowAction } from "../providers/ShowProvider";
import { useNavigate } from "react-router";

const BmiSection = () => {
  const [weightValue, setWeightValue] = useState(null);
  const [heightValue, setHeightValue] = useState(null);
  const [bmiNumber, setBmiNumber] = useState(null);
  const [hover, setHover] = useState("bg-[white]");
  const user = useUser();
  const show = useShow();
  const setShow = useShowAction();
  const setUser = useUserAction();
  const navigate = useNavigate();

  const weightChange = (e) => {
    setWeightValue(e.target.value);
  };

  const heightChange = (e) => {
    setHeightValue(e.target.value / 100);
  };

  const calculator = () => {
    const bmi = weightValue / (heightValue * 2);
    setBmiNumber(bmi);
    console.log(bmi);
    if (bmi < 18.5) {
      setHover("bg-[#34D399]");
      console.log("1");
    }
    if (18.5 < bmi && bmi < 24.9) {
      setHover("bg-[#22D3EE]");
      console.log("2");
    }
    if (24.9 < bmi && bmi < 29.9) {
      setHover("bg-[#FBBF24]");
      console.log("3");
    }
    if (29.9 < bmi && bmi < 34.9) {
      setHover("bg-[#F97316]");
      console.log("4");
    }
    if (34.9 < bmi && bmi < 39.9) {
      setHover("bg-[#EF4444]");
      console.log("5");
    }
    if (39.9 < bmi) {
      setHover("bg-[#BE123C]");
      console.log("6");
    }
  };

  return (
    <section className="w-full flex flex-col  bg-[#ECFEFF] items-end relative">
      {user?.length ? (
        <div
          style={
            show
              ? {
                  pointerEvents: "visible",
                  background: "#99F6E4",
                  transition: "1s",
                }
              : { pointerEvents: "none", opacity: "0", transition: "1s" }
          }
          className="absolute top-0 z-50 rounded-lg right-[7%] p-3 flex justify-center w-[140px] transition duration-1000"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <p onClick={() => setUser([])} className="cursor-pointer">
            {" "}
            خروج
          </p>
        </div>
      ) : (
        <div
          style={
            show
              ? {
                  pointerEvents: "visible",
                  background: "#99F6E4",
                  transition: "1s",
                }
              : { pointerEvents: "none", opacity: "0", transition: "1s" }
          }
          className="absolute top-0 z-50 rounded-lg right-[7%] p-3 flex flex-col items-end w-[240px] transition duration-1000"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <p
            className="text-black cursor-pointer"
            onClick={() => navigate("/login")}
          >
            ورود به سایت
          </p>
          <p className="text-black">
            هنوز ثبت نام نکردید؟{" "}
            <span
              onClick={() => navigate("/user")}
              className="text-[#F59E0B] cursor-pointer"
            >
              ثبت نام
            </span>
          </p>
        </div>
      )}

      <h1 className="text-[30px]">BMI محاسبه</h1>
      <p className="text-[20px] p-2 flex text-right lg:text-left  mt-4">
        .معیاری برای تعیین سلامت وزنی افراد می‌باشد. به این معنا که وزن یک فرد
        متناسب با قدش باید در چه محدوده‌ای قرار بگیرد ،(BMI)شاخص توده بدنی
      </p>
      <p className="mt-5 text-[20px] p-2 text-right lg:text-left">
        برای این منظور 6 بازه تعریف می‌شود:لاغر، نرمال، اضافه وزن، چاقی، چاقی
        مفرط نوع 1، چاقی مفرط نوع 2
      </p>
      <div className="bg-[#ECFEFF] flex flex-wrap p-5 justify-center mt-12 w-full h-[500px]">
        <div className="flex flex-col  items-center  justify-center">
          {user?.length ? (
            ""
          ) : (
            <p className="text-red-600 rounded-lg">برای محاسبه باید عضو شوید</p>
          )}
          <button
            disabled={user?.length ? false : true}
            onClick={() => calculator()}
            className="w-[150px] bg-[#FDBA74] font-bold rounded-lg p-5"
          >
            BMI محاسبه
          </button>
          <div className="flex my-5">
            <div className="input1 mr-1 sm:mr-3">
              <p className="text-center mb-1">وزن (کیلوگرم)</p>
              <input
                onChange={weightChange}
                type="number"
                className=" py-7 pr-3 sm:w-[200px] w-[150px] bg-[#5EEAD4] text-[25px] text-center rounded-[39px]"
              />
            </div>
            <div className="input2">
              <p className="text-center mb-1">قد (سانتی‌متر)</p>
              <input
                onChange={heightChange}
                type="number"
                className=" py-7 pr-3 text-center bg-[#5EEAD4] w-[150px]  sm:w-[200px] text-[25px] rounded-[39px]"
              />
            </div>
          </div>
        </div>
        <div className="table w-[350px] sm:ml-[20px] ">
          {bmiNumber ? (
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="border-gray-300 border-b bg-[#2DD4BF]">
                  <th scope="col" class="px-9 text-center py-3 ">
                    BMI
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    وضعیت وزنی
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class={`${
                    bmiNumber < 18.5 ? hover : "bg-[#CCFBF1]"
                  } border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 text-center font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {`BMI≤ 18.5`}
                  </th>
                  <th
                    scope="row"
                    class="px-6 text-center py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    لاغر
                  </th>
                </tr>
                <tr
                  class={`${
                    18.5 < bmiNumber && bmiNumber < 24.9
                      ? hover
                      : "bg-[#CCFBF1]"
                  } border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    class="px-6 text-center py-4 font-medium text-gray-900  "
                  >
                    {`18.5 BMI≤24.9`}
                  </th>
                  <th class="px-6 py-4 text-gray-900 text-center">نرمال</th>
                </tr>
                <tr
                  class={`${
                    24.9 < bmiNumber && bmiNumber < 29.9
                      ? hover
                      : "bg-[#CCFBF1]"
                  } border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    class="px-6 text-center py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    {`24.9<BMI≤29.9`}
                  </th>
                  <th class="px-6 py-4 text-gray-900 text-center">اضافه وزن</th>
                </tr>
                <tr
                  class={`${
                    29.9 < bmiNumber && bmiNumber < 34.9
                      ? hover
                      : "bg-[#CCFBF1]"
                  } border-b border-gray-300 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    class="px-6 text-center py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {`29.9<BMI≤34.9`}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 text-center"
                  >
                    چاق
                  </th>
                </tr>
                <tr
                  class={`${
                    34.9 < bmiNumber && bmiNumber < 39.9
                      ? hover
                      : "bg-[#CCFBF1]"
                  } border-b border-gray-300 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    class="px-6 text-center py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {`34.9<BMI≤39.9`}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap"
                  >
                    چاقی مفرط نوع 1
                  </th>
                </tr>
                <tr
                  class={`${
                    39.9 < bmiNumber ? hover : "bg-[#CCFBF1]"
                  } border-b border-gray-300 dark:border-gray-700`}
                >
                  <th
                    scope="row"
                    class="px-6 text-center  py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {`BMI>39`}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap"
                  >
                    چاقی مفرط نوع 2
                  </th>
                </tr>
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default BmiSection;
