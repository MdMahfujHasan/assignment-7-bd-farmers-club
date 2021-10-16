import React from 'react';
import './List.css'

const List = (props) => {
    const { list } = props;
    let farmersAdded = 0;
    let totalEarning = 0;
    for (const farmer of list) {
        if (!farmer.quantity) {
            farmer.quantity = 1;
        }
        farmersAdded = farmersAdded + farmer.quantity;
        totalEarning = totalEarning + farmer.earning * farmersAdded;
    }
    return (
        <div className="farmers-list">
            <h1 className="list-title">Farmers List</h1>
            <h3>Farmers Added: {farmersAdded}</h3>
            <h3>Monthly Earning: {totalEarning}</h3>
            <button style={{ marginBottom: "5px" }} className="add-to-list-btn">Save</button>
        </div>
    );
};

export default List;