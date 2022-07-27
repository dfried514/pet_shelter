import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import List from '../components/List';
    
const Main = props => {
    const { petsUpdated, setPetsUpdated } = props;
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data.records);
                setPetsUpdated(true);
            })
            .catch(err => console.error(err));
    },[petsUpdated]);

    return (
        <>  
            <h1>Pet Shelter</h1>
            {
                pets.length > 0 && 
                (<div>
                    <h2>These pets are looking for a good home</h2>
                    <List pets={pets} />
                </div>)
            }
            <p><Link to={'/pets/new'}>add a pet to the shelter</Link></p>
        </>
    )
}
export default Main;
