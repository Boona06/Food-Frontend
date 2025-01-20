import "./style.css";
export default function Footer() {
  return (
    <div className="w-full bg-[#18181B] h-96 lg:h-[755px] pt-16">
      <div className="w-full lg:h-24 h-20 bg-[#EF4444] flex justify-center items-center">
        <h2 className="font-bold text-white lg:text-[30px] text-animation-infinite-scroll">
          Fresh fast delivered Манай вебд тавтай сайхан үйлчлүүлээрэй
        </h2>
      </div>
      <div className="flex p-20 ">
        <div className=" ">
          <img src="Logo.png" />
          <h2 className="text-white font-bold text-lg">
            Nom<span className="text-[#EF4444]">Nom</span>
          </h2>
          <p className="text-white text-xs">Swift delivery</p>
        </div>
        <div className="pl-56">NomNom</div>
      </div>
    </div>
  );
}
