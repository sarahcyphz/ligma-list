import "./spicePage.css";
import trash from "../../assets/trash.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddSpice from "./addSpice";

type Spice = {
  name: string,
};

const emptySpices: Spice[] = [];

const SpicesPage = () => {
  const [spices, setSpices]: [Spice[], (spices: Spice[]) => void] = useState(
    emptySpices
  );

  useEffect(() => {
    axios.get<Spice[]>('http://localhost:5086/catalog',
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => 
      setSpices(response.data)).catch((error) => console.log(error));
    }, []);

  return (
    <>
      <div>
        <h1>Spice Inventory</h1>
        <hr />
      </div>
      <div className="search-add-container">
        <input type="text" className="search" placeholder="Search.." />
        <Link to="/addspice" className="add-button">
          Add Spice
        </Link>
      </div>
      <div className="spices-container">
        {spices.map((spice, index) => (
          <div className="spice-card" key={index}>
            <label className="check-container">
              <input
                type="checkbox"
                id={`spice-${index}`}
                name={spice.name}
                value={spice.name}
              />
            </label>
            <h2 className="spice-name">{spice.name}</h2>
            <img src={trash} alt="trash" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SpicesPage;
