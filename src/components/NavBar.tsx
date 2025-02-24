import React from "react";
import { useState } from "react";
import { ModalDate } from "./ModalDate";
export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {showModal && <ModalDate close={handleCloseModal} />}
      <div className=" flex fixed z-1 top-0 left-0 right-0  backdrop-blur-xl items-center justify-between px-15 text-white h-27   shadow-sm">
        <img
          className="h-20 cursor-pointer hover:scale-120 duration-300"
          src="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/logos/logo-dark.png"
          alt=""
        />
        <ul className=" space-x-5 text-black  text-3xl md:flex hidden">
          <li className="duration-300 hover:text-white hover:underline">
            <a href="#menu">Menú</a>
          </li>
          <li className="duration-300 hover:text-white hover:underline">
            Gatitos
          </li>
          <li
            className="duration-300 hover:text-white hover:underline"
            onClick={() => setShowModal(true)}
          >
            Reserva
          </li>
          <li className="duration-300 hover:text-white hover:underline ">
            <a href="#contactus"> Contacto</a>
          </li>
        </ul>

        <img
          src="https://endlessicons.com/wp-content/uploads/2012/11/shopping-cart-icon-614x460.png"
          className=" hidden md:block object-contain h-15 hover:scale-120 transform duration-300 cursor-pointer"
          alt=""
        />
      </div>
    </>
  );
};
