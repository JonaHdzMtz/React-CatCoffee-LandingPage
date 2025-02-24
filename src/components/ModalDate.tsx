interface ModalDateProps {
    close : ()=>void;
}
export  const ModalDate = (props:ModalDateProps) => {
    return (
        // modal
        <div className=" fixed top-0 left-0 w-full h-full  z-50" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="flex justify-center items-center h-full">
                <div className="bg-white w-1/2 pb-5 rounded-2xl shadow-2xl ">
                    <div className="flex justify-between items-center p-5">
                        <p className="text-3xl font-bold">Reserva</p>
                        <button onClick={props.close} className="text-3xl font-bold hover:cursor-pointer hover:scale-120 duration-300 hover:text-red-600" title="cerrar reserva" >X</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-1/2 gap-5">
                            <input type="text" className="border-2 border-black rounded-lg p-2" placeholder="Nombre" />
                            <input type="text" className="border-2 border-black rounded-lg p-2" placeholder="Correo" />
                            <input type="text" className="border-2 border-black rounded-lg p-2" placeholder="Telefono" />
                            <input type="text" className="border-2 border-black rounded-lg p-2" placeholder="Fecha" />
                            <input type="text" className="border-2 border-black rounded-lg p-2" placeholder="Hora" />
                            <button className="bg-amber-950 text-white rounded-lg p-2 text-lg hover:cursor-pointer hover:font-bold  hover:scale-110 duration-200">Reservar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}


