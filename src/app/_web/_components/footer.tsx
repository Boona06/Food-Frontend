import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-full bg-[#18181B] h-96 lg:h-[755px] pt-16">
      <div className="w-full lg:h-24 h-20 bg-[#EF4444] flex justify-center items-center">
        <h2 className="font-bold text-white lg:text-[30px] text-animation-infinite-scroll">
          Fresh fast delivered
        </h2>
      </div>
      <div className="flex md:flex md:p-20 justify-center ">
        <div>
          <img src="Logo.png" />
          <h2 className="text-white font-bold text-lg">
            Nom<span className="text-[#EF4444]">Nom</span>
          </h2>
          <p className="text-white text-xs">Swift delivery</p>
        </div>
        <div className="lg:pl-56 text-[#71717A] flex flex-col">
          NOMNOM
          <a className="text-[#FAFAFA] pt-4" href="/">
            Home
          </a>
          <a className="text-[#FAFAFA] pt-4 " href="/">
            Contact us
          </a>
          <a className="text-[#FAFAFA] pt-4 " href="/">
            Delivery Zone
          </a>
        </div>
        <div className="lg:pl-44 text-[#71717A] flex flex-col">
          MENU
          <a className="text-[#FAFAFA] pt-4" href="/">
            Appetizers
          </a>
          <a className="text-[#FAFAFA] pt-4 " href="/">
            Salads
          </a>
          <a className="text-[#FAFAFA] pt-4 " href="/">
            Pizzas
          </a>
          <a className="text-[#FAFAFA] pt-4 " href="/">
            Main dishes
          </a>
          <a className="text-[#FAFAFA] pt-4 " href="/">
            Desserts
          </a>
        </div>
        <div className="lg:pl-44 text-[#71717A] flex flex-col">
          FOLLOW US
          <div className="flex gap-4">
            <a href="https://www.facebook.com/" className="lg:text-[25px] pt-5">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              className="lg:text-[25px] pt-5"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className=" border-t-2 lg:w-[1264px] ml-auto mr-auto border-[#F4F4F566]">
        <span className="text-[#71717A] ">Copy rigth 2024 © Nomnom LLC</span>
        <a className="text-[#71717A] " href="">
          Privacy policy
        </a>
        <a href="" className="text-[#71717A] ">
          Terms and conditoin
        </a>
        <a href="" className="text-[#71717A] ">
          Cookie policy
        </a>
      </div>
    </div>
  );
}
