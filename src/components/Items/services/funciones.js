import axios from 'axios'
const getItems= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Items`)
    
    state(response.data)   
}

const getItemsID=async(id,state)=>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Items/${id}`)
  
     state(response.data)
}
export{
    getItems,
    getItemsID
}