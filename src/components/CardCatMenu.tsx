import React from "react";
import { Cat } from "../interfaces/Cat";

export const CardCatMenu = (props: Cat) => {
  return (
    <div className="flex h-100 lg:h-150 w-full  rounded-2xl shadow-2xl hover:scale-105 duration-300">
      <img
        className="h-full w-1/2 object-cover rounded-l-2xl"
        src={props.url}
        alt=""
      />
      <div
        className="flex flex-col justify-center w-1/2 p-5 rounded-r-2xl text-sm md:text-2xl text-center"
        style={{ backgroundColor: "#ffeded" }}
      >
        <p className="text-4xl font-bold">{props.name}</p>
        <p>
          <strong>Edad:</strong> {props.age}
        </p>
        <p>
          <strong>Sexo:</strong> {props.sex}
        </p>
        <p>
          <strong>Color: </strong>
          {props.color}
        </p>
        <p>
          <strong>Esterilizado:</strong> {props.esterilizacion ? "Si" : "No"}
        </p>
        <p>
          <strong>Vacunado:</strong> {props.vacunacion ? "Si" : "No"}
        </p>
        <p>
          <strong>Discapacidad:</strong> {props.discapacidad}
        </p>
        <p>
          <strong>Salud: </strong>
          {props.health}
        </p>
        <div className="flex  justify-center mt-10">
          <button className="bg-amber-950 rounded-lg text-white p-2  text-lg hover:cursor-pointer hover:font-bold  hover:scale-110 duration-200">
            Adoptame
          </button>
        </div>
      </div>
    </div>
  );
};
