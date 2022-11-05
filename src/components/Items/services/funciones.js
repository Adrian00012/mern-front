import axios from 'axios'
const getItems= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Items`)
    const Items=response.data.filter(item=>item.sourceSheet!=="Artwork")
    state(Items)   
}

const getItemsID=async(id,state)=>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Items/${id}`)
  
     state(response.data)
}
export{
    getItems,
    getItemsID
}