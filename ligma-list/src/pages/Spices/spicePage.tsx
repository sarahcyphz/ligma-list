import "./spicePage.css";
import trash from "/trash.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddSpice from "./addSpice";

type Spice = {
  id: number;
  name: string;
  isNeeded: number;
};

const emptySpices: Spice[] = [];

const SpicesPage = () => {
  const [spices, setSpices]: [Spice[], (spices: Spice[]) => void] = useState(
    emptySpices
  );

  const handleButtonClick = async (index: number) => {
    const updatedSpices = [...spices];
    updatedSpices[index].isNeeded = updatedSpices[index].isNeeded === 0 ? 1 : 0;
    setSpices(updatedSpices);

    try {
      await axios.put(`http://localhost:5086/catalog/${updatedSpices[index].id}`, updatedSpices[index]);
    } catch (error) {
      console.log(error);
    }

  }

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
          <button 
            className={`spice-card ${spice.isNeeded === 1 ? 'spice-card-need' : ''}`} 
            id={'spice-${index}'} 
            name={spice.name} 
            value={spice.name}
            onClick={() => handleButtonClick(index)}
          >
          <div className="spice-button" key={index}>
            <h2 className="spice-name">{spice.name}</h2>
            <h2 className="spice-needed">{spice.isNeeded}</h2>
            <img src={trash} alt="trash" />
          </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default SpicesPage;
