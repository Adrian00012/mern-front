import axios from 'axios'
const getFosiles= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Fosiles`)
    
    state(response.data)
    
    
}
const getFosilesId= async (id,state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Fosiles/${id}`)
   
     state(response.data)
    
    
}
const getFish= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Creatures`)
    const Fish=response.data.filter(item => item.sourceSheet === "Fish" )
    state(Fish)
    
    
}
const getFishId= async (id,state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Creatures/${id}`)
  
     state(response.data)
    
    
}
const getBugs= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Creatures`)
    const Bugs=response.data.filter(item => item.sourceSheet === "Insects" )
    state(Bugs)
    
    
}
const getBugsId= async (id,state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Creatures/${id}`)
   
     state(response.data)
    
    
}
const getSeaCreatures= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Creatures`)
    const SeaCreatures=response.data.filter(item => item.sourceSheet === "Sea Creatures" )
    state(SeaCreatures)
    
    
}
const getSeaCreaturesId= async (id,state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Creatures/${id}`)
  
     state(response.data)
    
    
}
const getArtwork= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Artwork`)
    const ArtworkV=response.data.filter(item=>item.genuine ===true)
    // console.log(ArtworkV)
    state(ArtworkV)
    
    
}
const getArtworkF= async (state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Artwork`)
    const ArtworkF=response.data.filter(item=>item.genuine===false)
    state(ArtworkF)
    
    
}
const getArtworkId= async (id,state) =>{
    const response =  await axios.get(`https://acnh-world-server.onrender.com/Artwork/${id}`)
//    console.log(response.data)
     state(response.data)
    
    
}
export{
    getFosiles,
    getFosilesId,
    getFish,
    getFishId,
    getBugs,
    getBugsId,
    getSeaCreatures,
    getSeaCreaturesId,
    getArtwork,
    getArtworkF,
    getArtworkId,
}
