import logo from "../../../public/Assets/icon/logo.png";
import {Typography } from "@material-tailwind/react";


const MyNavbar = () => {

  return (
    <div id="home" className="w-full">
      <div className="hidden md:block bg-[#f4f4f4] rounded-none border-0 fixed top-0 h-28 w-full max-w-screen-4xl z-50 px-4 py-4 lg:px-12 md:py-2.5">
        <div className="h-full flex items-center gap-4">
          <img src={logo} alt="logo" className="hidden w-62 h-16 md:w-42 md:h-24 md:block" />
          <Typography
            as="a"
            href="#"
            className="flex items-center cursor-pointer font-extralight text-center text-3xl md:text-3xl lg:text-4xl text-black font-RobotoSans uppercase"
          >
            {/* escolher fonte e melhor texto */}
            Maragonesa Teixeira Advocacia
          </Typography>
          <div className="hidden xl:block"></div>
        </div>
      </div>
    </div>
  );
};

export { MyNavbar };
