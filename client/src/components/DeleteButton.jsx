import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const DeleteButton = props => {
    const { petId, petName, setPetsUpdated } = props; 
    const navigate = useNavigate();
    
    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${petId}`)
        .then(() => setPetsUpdated(false))
        .then(() => navigate('/'))
        .catch(err => console.error(err));
    }

    return (
        <button onClick={deletePet}>
            Adopt {petName}
        </button>
    )
}
export default DeleteButton;
