
import React ,{ useState, useRef, useEffect }from "react";
import { useParams } from "react-router-dom";
import {getRecordsNpc} from "./services/funciones"
const Detalles = () => {
  const { npc_id } = useParams()
  const [npcsDetalles, setNpcsDetalles] = useState(null);
 
  useEffect(() => {
    getRecordsNpc(npc_id,setNpcsDetalles)
    
    
  }, [])
  
  return (
    <>{npcsDetalles!=null?(<div>
    
    <p>nombre {npcsDetalles.translations.eUes}</p>
    </div>):("no hay nada")}
    </>
      
      )
}

export default Detalles
