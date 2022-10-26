import axios from 'axios'
const getRecords= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Npc/`)
    
    state(response.data.filter(function (e) {
        return (
          e.name === "Wisp" ||
          e.name === "K.K." ||
          e.name === "Celeste" ||
          e.name === "Kicks" ||
          e.name === "Gulliver" ||
          e.name === "Gullivarrr" ||
          e.name === "Flick" ||
          e.name === "Daisy" ||
          e.name === "Daisy Mae" ||
          e.name === "C.J." ||
          e.name === "Label" ||
          e.name === "Redd" ||
          e.name === "Saharah"
        );
      }))
    
    
}
const getRecordsNpc= async (id,state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Npc/${id}`)
  
     state(response.data)
    
    
}
export{
    getRecords,
    getRecordsNpc
}