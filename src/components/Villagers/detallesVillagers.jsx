import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecordsVillagers } from "./services/funciones";
import moment from "moment";
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
      
          <TarjetaDetalles 
          Nombre={VillagersDetalles.translations.eUes} 
          iconImage={VillagersDetalles.iconImage}
          House={VillagersDetalles.houseImage}  
          hobby={VillagersDetalles.hobby}  
          gender={VillagersDetalles.gender} 
          colors={VillagersDetalles.colors}
          styles={VillagersDetalles.styles}
          personality={VillagersDetalles.personality}
          photo={VillagersDetalles.photoImage}
          FN={moment(VillagersDetalles.birthday, "MMDD").format("DD/MM")}/>
          
      ) : (
        "no hay nada"
      )}
    </>
  );
};

export default DetallesVillagers;
