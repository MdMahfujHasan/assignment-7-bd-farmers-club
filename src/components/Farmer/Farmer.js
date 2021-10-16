import React from 'react';
import './Farmer.css'

const Farmer = (props) => {
    const { name, age, experience, type, field, earning, img } = props.farmer;
    return (
        <div className="farmer-card">
            <div style={{ padding: "10px" }}>
                <img className="farmer-img" width="250px" src={img} alt="farmer" />
            </div>
            <div className="farmer-info">
                <h2 className="farmer-name">{name}</h2>
                <small>Age: {age}</small>
                <p>Experience: <b>{experience}</b></p>
                <p>Grows: {type}.</p>
                <p>Field Size: {field} acre.</p>
                <h3>Monthly Earning: <b>{earning} BDT.</b></h3>
                <button onClick={() => props.handleAddToList(props.farmer)} className="add-to-list-btn">Add to List</button>
            </div>
        </div>
    );
};

export default Farmer;