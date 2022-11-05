
import React ,{ useState, useRef, useEffect }from "react";
import { useParams } from "react-router-dom";
import {getRecordsNpc} from "./services/funciones"
import TarjetaDetallesNpc from "./Components/TarjetaDetellas";
import moment from "moment";
const Detalles = () => {
  const { npc_id } = useParams()
  const [npcsDetalles, setNpcsDetalles] = useState(null);
 
  useEffect(() => {
    getRecordsNpc(npc_id,setNpcsDetalles)
    
    
  }, [])
  
  return (
    <>{npcsDetalles!=null?(
     <TarjetaDetallesNpc 
          Nombre={npcsDetalles.translations.eUes} 
          iconImage={npcsDetalles.iconImage}
          gender={npcsDetalles.gender} 
          photo={npcsDetalles.photoImage}
          FN={moment(npcsDetalles.birthday, "MMDD").format("DD/MM")}/>
    ):("no hay nada")}
    </>
      
      )
}

export default Detalles
