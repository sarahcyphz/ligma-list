import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./addSpice.css";

export const AddSpice = (): JSX.Element => {
  const navigate = useNavigate();
  const [spiceName, setSpiceName] = useState<string>("");

  type SpiceRequest = {
    name: string;
  };

  const cancelAdd = () => {
    navigate("/spices");
  };

  const PostSpice = ({ newSpice }: { newSpice: SpiceRequest }): void => {
    console.log(newSpice);
    axios.post("http://localhost:5086/catalog", newSpice).catch(function (error) {
      throw error;
    });
  };

  const handleSubmit = () => {
    const newSpice: SpiceRequest = {
      name: spiceName,
    };

    PostSpice({ newSpice });
    window.location.href = "/spices";
  };

  return (
    <div>
      <h1>Add Spice</h1>
      <hr />
      <div className="add-spice-container">
        <input
          type="text"
          id="spice-name"
          name="spice-name"
          placeholder="Spice Name"
          onChange={(e) => setSpiceName(e.target.value)}
        />
        <div className="add-spice-buttons">
          <button onClick={handleSubmit} className="submit">Submit</button>
          <button onClick={cancelAdd} className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default AddSpice;

