const getRecords= async (state) =>{
    const response =  await fetch(`https://acnh-world-server.onrender.com/Music/`)
    .then(response => response.json())
   response.sort(function (a, b) {
        return (a.id - b.id)
    })
    state(response)
    
}

export{
    getRecords
}