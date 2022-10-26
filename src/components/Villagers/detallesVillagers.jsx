import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecordsVillagers } from "./services/funciones";
import moment from "moment";
import Tarjeta from "./Components/Tarjeta";
import TarjetaDetalles from "./Components/TarjetaDetellas";
const DetallesVillagers = () => {
  const { Villagers_id } = useParams();
  const [VillagersDetalles, setVillagersDetalles] = useState(null);
  useEffect(() => {
    getRecordsVillagers(Villagers_id, setVillagersDetalles);
  }, []);

  return (
    <>
      {VillagersDetalles != null ? (
        <div>
          <Tarjeta Nombre={VillagersDetalles.translations.eUes} iconImage={VillagersDetalles.iconImage}></Tarjeta> 
          <TarjetaDetalles 
          House={VillagersDetalles.houseImage}  
          hobby={VillagersDetalles.hobby}  
          gender={VillagersDetalles.gender} 
          colors={VillagersDetalles.colors}
          styles={VillagersDetalles.styles}
          personality={VillagersDetalles.personality}
          photo={VillagersDetalles.photoImage}
          FN={moment(VillagersDetalles.birthday, "MMDD").format("DD/MM")}/>
          {/* // <img src={VillagersDetalles.photoImage}></img> */}
          {/* <img src={VillagersDetalles.iconImage}></img> */}
          {/* // <img src={VillagersDetalles.houseImage}></img> */}
          {/* <p>{moment(VillagersDetalles.birthday, "MMDD").format("DD/MM")}</p> */}
        </div>
      ) : (
        "no hay nada"
      )}
    </>
  );
};

export default DetallesVillagers;
