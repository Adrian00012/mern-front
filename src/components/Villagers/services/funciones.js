import axios from 'axios'
const getRecords= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Villagers/`)
    
    state(response.data)   
}
const getRecordsSpecies= async (species,state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/${species}`)
    state(response.data) 
}
const getRecordsVillagers=async(id,state)=>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Villagers/${id}`)
     state(response.data)
}
export{
    getRecords,
    getRecordsSpecies,
    getRecordsVillagers
}