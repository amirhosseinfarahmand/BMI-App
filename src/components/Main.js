import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShow, useShowAction } from "../providers/ShowProvider";
import { useUser, useUserAction } from "../providers/UserProvider";

const Main = () => {
  const show = useShow();
  const setShow = useShowAction();
  const navigate = useNavigate();
  const user = useUser();
  const setUser = useUserAction();

  return (
    <main
      className="bg-[#ECFEFF] flex flex-wrap justify-center w-full relative"
      onMouseEnter={() => setShow(false)}
    >
      {user.length ? (
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

      <div className="flex flex-col items-end bg-[#CFFAFE] lg:w-[600px] p-5 rounded-lg m-10">
        <h1 className="text-right text-[25px] lg:text-[35px] mt-5">
          نقش برنامه غذایی برای چاقی چیست؟
        </h1>
        <span className="text-right text-[15px] lg:text-[18px] mt-3 ">
          اولین و مهم ترین قدم برای داشتن اندامی ایده آل برای افراد لاغر، برنامه
          غذایی چاقی است. چرا که، اصولی ترین حالت برای افزایش وزن، دریافت کالری
          بیشتر از مقدار مورد نیاز فرآیند متابولیسم در بدن است. باور اشتباهی که
          در اینجا باید به آن اشاره کنیم آن است که اکثر افراد گمان می کنند که
          رژیم چاقی یعنی خوردن زیاد، به خصوص خوردن غذاهای چرب، شیرین، شرخ کردنی
          و فست فود. در حالی که رژیم افزایش وزن یعنی داشتن برنامه غذایی اصولی و
          درست که کم کم وزن شما را افزایش و تناسب اندام را برایتان به ارمغان
          بیاورد، نه صرفا چاقی موضعی در برخی از اندام های بدن. از طرف دیگر،
          برنامه رژیم چاقی باید به گونه ای باشد که شما را از شر بیماری هایی چون
          چربی، فشارخون، کلسترول، بیماری های قلبی، گرفتگی عروق و… دور نگه دارد.
        </span>
      </div>
      <div className="flex flex-col items-end p-5 bg-[#CFFAFE] rounded-lg m-10 lg:w-[600px]">
        <h1 className="text-right  mt-5 text-[25px] lg:text-[35px]">
          آیا ورزش و چاقی با هم رابطه مستقیم دارند؟
        </h1>
        <span className="text-right text-[15px] lg:text-[18px] ">
          ورزش را به نوعی می توان مکمل رژیم افزایش وزن دانست. شما هنگامی می
          توانید با ورزش به اندام پر برسید که در کنار آن برنامه غذایی درستی
          باشید. تصور کنید که هنگامی که از باشگاه باز می گردید و با اشتهایی که
          به دست آورده اید، تنها در صورتی می توانید افزایش وزن پیدا کنید، که بر
          طبق برنامه غذایی چاقی پیش بروید. در غیر این صورت، ورزش بدون رژیم باعث
          می شود همان حجمی که دارید را نیز از دست بدهید یا با خوردن مواد غذایی
          اشتباه به بیماری های مختلف مبتلا شوید.
        </span>
      </div>
      <div className="flex flex-col items-end bg-[#CFFAFE] lg:w-[600px] p-5 rounded-lg m-10">
        <h1 className="text-right text-[25px] lg:text-[35px] mt-5">
          چاقی در یک هفته؛ عقلانی است؟
        </h1>
        <span className="text-right text-[15px] lg:text-[18px] mt-3 ">
          رسیدن به نتیجه، آن هم در سریع ترین زمان ممکن در هرکاری برای هر فردی
          خوشایند است. اما، در اکثر فعالیتها فقط با گذشت زمان است که به نتیجه
          مناسب می رسید. که چاقی نیز یکی از این کارها است. اصولا، افرادی که
          استعداد چاقی ندارند، همواره به دنبال رژیم چاقی سریع هستند، به حدی سریع
          که در مدت زمان یک هفته چند کیلو اضافه کنند!! اما، باید بگوییم که این
          اتفاق، فقط به آنها ضرر می زند. چرا که، بدن نمی تواند در این مدت زمان
          کم با شرایط جدید منطبق شود و بتواند حجم زیادی از کالری و غذا را هضم
          کند. در اصل، ورود کالری های اضافی به مقدار بالا نسبت به گذشته برای بدن
          اگر با برنامه ریزی صحیح انجام نشود ممکن است به فشار خون بالا، آسیب به
          قلب و سایر اندامهای بدن منجر شود. پس، می توان گفت” گر صبر کنی ز غوره
          حلوا سازی”؛ درست مثل کاهش وزن، افزایش وزن هم باید به تدریج انجام شود.
          لذا، برای رسیدن به اندامی پر و یک دست باید رژیم افزایش وزن اصولی داشت.
          رژیمی که کم کم بدن شما را آماده و اندام را به یک نسبت حجیم کند.
        </span>
      </div>
      <div className="flex flex-col items-end bg-[#CFFAFE] lg:w-[600px] p-5 rounded-lg m-10">
        <h1 className="text-right text-[25px] lg:text-[35px] mt-5">
          چرا چاق نمی شویم؟
        </h1>
        <span className="text-right text-[15px] lg:text-[18px] mt-3 ">
          {` برای بعضی افراد، چاقی و افزایش وزن به همان دشواری کاهش وزن است.
          متابولیسم بالا و فعالیت فیزیکی شدید می تواند روند افزایش وزن را مختل
          کند. از این رو، افزایش وزن به واسطه ی یک رژیم غذایی مناسب و حساب شده
          می تواند گزینه مناسبی باشد.از طرف دیگر، بدن هر فردی با فرد دیگر متفاوت
          بوده و متابولسیم آن می تواند کُند یا تند باشد. اگر فرد متابولیسم کندی
          داشته باشد بالتبع زودتر چاق می شود و اگر متابولیسم و یا همان سوخت ساز
          فرد تند باشد، فرد دیر تر چاق می شود. البته دلایل دیگری مانند مشکلات
          تیروئید، اختلالات خوردن، دیابت، سرطان و برخی از عفونتها باعث می شود تا
        فرد چاق نشود`}
        </span>
      </div>
    </main>
  );
};

export default Main;
