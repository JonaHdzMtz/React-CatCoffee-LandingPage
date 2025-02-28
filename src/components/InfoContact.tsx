import { TbGpsFilled } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export const InfoContact = () => {
  return (
    <div id="contactus" className=" shadow-2xl shadow-gray-500 rounded-2xl hover:scale-101 duration-300" style={{marginTop:"50px"}}>
      <div className="  bg-amber-950 text-center text-white flex flex-col items-center gap-8 py-10  rounded-2xl hover:font-bold duration-300">
        <p className="text-4xl ">Contacto</p>
        <div className="flex gap-5 items-center  ">
          <TbGpsFilled className="scale-200" />
          <p className="text-xl">Magnetic Springs, Ohio, EE. UU.</p>
        </div>
        <div className="flex gap-5 items-center  ">
          <FaCalendarAlt className="scale-200" />
          <p className="text-xl">Magnetic Springs, Ohio, EE. UU.</p>
        </div>
        <div className="flex gap-5 items-center  ">
          <BsFillTelephoneFill className="scale-200" />
          <p className="text-xl">Magnetic Springs, Ohio, EE. UU.</p>
        </div>
      </div>
    </div>
  );
};
