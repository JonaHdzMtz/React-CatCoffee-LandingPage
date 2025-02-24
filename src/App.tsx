import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { MenuItem } from "./components/MenuItem";
import { CardCatMenu } from "./components/CardCatMenu";
import { Cat } from "./interfaces/Cat";
import { CircleCatItem } from "./components/CircleCatItem";
import { catsList } from "./data/CatsData";
import { InfoContact } from "./components/InfoContact";
import { ModalDate } from "./components/ModalDate";
function App() {
  const [count, setCount] = useState(0);
  const [catData, setCatData] = useState(catsList);
  const [catSelected, setCatSelected] = useState(0);

  const handleChangeCatInfo = (index: number) => {
    setCatSelected(index);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-full w-full">
        <div>
          <img
            className="w-full h-screen sm:object-cover object-cover"
            src="https://images3.alphacoders.com/950/950826.jpg"
            alt=""
          />
          <div className="relative  pl-15 -top-80 text-5xl hover:text-white duration-300">
            <p>aromas y </p>
            <p>maullidos</p>
          </div>
        </div>
        {/* contenedor con margin en x */}
        <div className="mx-5 md:mx-15 lg:mx-25 ">
          <div className="flex flex-col">
            <div className="  h-120 md:h-300 opacity-35 w-full flex bg-amber-700">
              <div className="flex flex-col w-1/2">
                <img
                  className="h-1/2 object-cover"
                  src="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/lugar/1.webp"
                  alt=""
                />
                <img
                  className="h-1/2 object-cover"
                  src="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/lugar/4.webp"
                  alt=""
                />
              </div>
              <div className="w-1/2  bg-amber-300">
                <img
                  className="h-full object-cover"
                  src="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/lugar/2.webp"
                  alt=""
                />
              </div>
            </div>
            <p className="font-bold sm:text-lg md:text-3xl  text-center absolute mt-10 md:mt-120 mx-25 lg:mx-25  ">
              En Aromas & Maullidos somos amantes del café, de crear bonitos
              recuerdos pero sobre todo de los gatos, por esa razón contamos con
              una zona exclusiva para que puedas disfrutar de la compañia de
              gatitos adoptables y degustar de nuestro menú.
            </p>
          </div>
          <div className="h-30   flex justify-center items-center">
            <p id="menu" className="text-4xl   text-center">
              Nuestro menú
            </p>
          </div>
          <div className="  bg-amber-950 columns-1 md:columns-2 lg:columns-3  ">
            <MenuItem
              title="asda"
              url="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/menu/cafe.png"
              description="Seleccionamos, tostamos, preparamos y servimos café de especialidad. Disfruta de todas nuestras variedades. Bebidas frías y calientes."
            ></MenuItem>
            <MenuItem
              title="asd"
              url="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/menu/cafe.png"
              description="Una opción que incluye distintas opciones dulces y saladas para dos personas. Disponible los fines de semana."
            ></MenuItem>
            <MenuItem
              title="adsd"
              url="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/menu/cafe.png"
              description="Encontrá nuestras deliciosas opciones veganas. Sano y natural. Sin crueldad animal."
            ></MenuItem>
            {/* adfadf */}
            <MenuItem
              title="adsd"
              url="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/menu/cafe.png"
              description="Compra en nuestra tienda online y retira tu pedido en menos de 24h."
            ></MenuItem>
            <MenuItem
              title="adsd"
              url="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/menu/cafe.png"
              description="Las mejores tortas enteras para una ocación especial. Ricas, con sabores caseros, que confortan a quien la pruebe."
            ></MenuItem>
            <MenuItem
              title="adsd"
              url="https://sebasgarzons.github.io/Proyecto-Final-FrontEnd/img/menu/cafe.png"
              description="Nuestra pastelería es de excelencia, con una presentación cuidada y pensada para deleitarte."
            ></MenuItem>
          </div>
          {/* adopcion */}
          <div className="mt-15 ">
            <p className="text-3xl text-center">gatitos en adopción</p>
            <p className="text-lg text-center mt-10 mb-15 mx-5 md:mx-35 ">
              Como amantes de los gatos nuestra meta es facilitar la adopción
              responsable de aquellos que están de inquilinos en nuestra
              cafetería y andan necesitando una familia. En Aromas y Maullidos
              podrás conocerlos, pasar un rato con ellos y si conectas con
              alguno... adoptarlo. Todos los michis están preparados para darse
              en adopción: Solo necesitan un hogar y mucho amor.
            </p>
            <CardCatMenu
              age={catsList[catSelected].age}
              color={catsList[catSelected].color}
              discapacidad={catsList[catSelected].discapacidad}
              esterilizacion={catsList[catSelected].esterilizacion}
              sex={catsList[catSelected].sex}
              name={catsList[catSelected].name}
              health={catsList[catSelected].health}
              vacunacion={catsList[catSelected].vacunacion}
              url={catsList[catSelected].url}
            />
            <div className="flex gap-10 flex-wrap justify-between mt-10">
              {catsList.map((cat, index) => {
                return (
                  <CircleCatItem
                    key={index}
                    index={index}
                    url={cat.url}
                    onclickCat={() => handleChangeCatInfo(index)}
                  ></CircleCatItem>
                );
              })}
            </div>
          </div>
          <InfoContact></InfoContact>
          <div className="h-20"></div>
        </div>
      </div>
    </>
  );
}

export default App;
