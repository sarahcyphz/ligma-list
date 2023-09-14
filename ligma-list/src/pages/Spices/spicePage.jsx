import "./spicePage.css";
import trash from "../../assets/trash.svg";

const SpicesPage = () => {
  return (
    <>
      <div>
        <h1>Spice Inventory</h1>
        <hr />
      </div>
      <div className="search-add-container">
        <input type="text" className="search" placeholder="Search.."></input>
        <button className="add-button">Add Spice</button>
      </div>
      <div className="spices-container">
        <div className="spice-card-need">
          <label className="check-container">
            <input type="checkbox" id="need" name="need" value="need" />
          </label>
          <h2 className="spice-name-need">Spice Name</h2>
          <img src={trash} alt="trash" />
        </div>
        <div className="spice-card">
          <label className="check-container">
            <input type="checkbox" id="need" name="need" value="need" />
          </label>
          <h2 className="spice-name">Spice Name</h2>
          <img src={trash} alt="trash" />
        </div>
        <div className="spice-card">
          <label className="check-container">
            <input type="checkbox" id="need2" name="need2" value="need2" />
          </label>
          <h2 className="spice-name">Italian Seasoning</h2>
          <img src={trash} alt="trash" />
        </div>
      </div>
    </>
  );
};

export default SpicesPage;
