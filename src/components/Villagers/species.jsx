import React, { Component, useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecordsSpecies } from "./services/funciones";
import { Link } from "react-router-dom";
const Species = () => {
  const { species } = useParams();
  const [VillagersDetalles, setVillagersDetalles] = useState(null);

  useEffect(() => {
    getRecordsSpecies(species, setVillagersDetalles);
  }, []);

  return (
    <>
      {VillagersDetalles != null ? (
        <div>
          {VillagersDetalles.map((p) => (
            <div className="card">
              <Link to={`/detallesVillagers/${p._id}`}>
                <img src={p.iconImage}></img>
                <p>{p.translations.eUes}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        "no hay nada"
      )}
    </>
  );
};

export default Species;
