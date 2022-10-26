import React from "react";

import { Route, Routes } from "react-router-dom";
 
import Navbar from "./components/navbar";
import Reproductor from "./components/Reproductor/Reproductor"
import Npc from "./components/Npc/Npc";
import Villagers from "./components/Villagers/Villagers"
import Detalles from "./components/Npc/detalles";
import DetallesVillagers from "./components/Villagers/detallesVillagers";
import Species from "./components/Villagers/species";
import Fosiles from "./components/Museom/Fosiles/Fosiles";
import Fish from "./components/Museom/Fish/Fish";
import Bugs from "./components/Museom/Bug/Bugs";
import SeaCreatures from "./components/Museom/Creatures/seaCreatures";
import Artwork from "./components/Museom/Artwork/Artwork";
import Items from "./components/Items/items";
function App  ()  {
 return (
  <div>
<Navbar/>
  <Routes>
      <Route exact path="/Villagers" element={<Villagers/>}/>
       <Route exact path="/Reproductor" element={<Reproductor/>} />
       <Route exact path="/Npc" element={<Npc/>} />
       <Route exact path="/detalles/:npc_id" element={<Detalles/>} ></Route>
       <Route exact path="/detallesVillagers/:Villagers_id" element={<DetallesVillagers/>} ></Route>
      <Route exact path="/Villagers/:species" element={<Species/>}></Route>
      <Route exact path="/Fosiles" element={<Fosiles/>}/>
      <Route exact path="/Fish" element={<Fish/>}/>
      <Route exact path="/Bugs" element={<Bugs/>}/>
      <Route exact path="/SeaCreatures" element={<SeaCreatures/>}/>
      <Route exact path="/Artwork" element={<Artwork/>}/>
      <Route exact path="/Items" element={<Items/>}/>
     </Routes>
     
     
     </div>
 );
};
 
export default App;