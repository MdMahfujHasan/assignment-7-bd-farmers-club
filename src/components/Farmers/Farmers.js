import React, { useEffect, useState } from 'react';
import Farmer from '../Farmer/Farmer';
import List from '../List/List';
import './Farmers.css'

const Farmers = () => {
    const [farmers, setFarmers] = useState([])
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('./farmers.JSON')
            .then(res => res.json())
            .then(data => setFarmers(data))
    }, [])

    const handleAddToList = farmer => {
        const newList = [...list, farmer];
        setList(newList);
    }
    return (
        <div>
            <div>
                <List list={list}></List>
            </div>
            <div className="farmers-container">
                {
                    farmers.map(farmer =>
                        <Farmer
                            key={farmer.key}
                            farmer={farmer}
                            handleAddToList={handleAddToList}
                        ></Farmer>)
                }
            </div>
        </div>
    );
};

export default Farmers;