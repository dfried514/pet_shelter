import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Form from '../components/Form';

const Update = props => {
    const { setPetsUpdated } = props;
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [badId, setBadId] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setPet(res.data.record)
                setBadId(false);
            })
            .catch(() => setBadId(true))
    }, [id, formErrors]);
 
    const updatePet = pet => {
        axios.put('http://localhost:8000/api/pets/' + id, pet)
            .then(() => setPetsUpdated(false))
            .then(() => navigate('/'))
            .catch(err => {
                if (err.response.data.code === 11000) 
                    setFormErrors({duplicateNameError: {message: 'Name already in use.'}});
                else if (err.response.data.errors) 
                    setFormErrors(err.response.data.errors);
                else 
                    setFormErrors({unknownError: {message: 'Input invalid'}});
            });
    }
    
    return (
        <>
            <h1>Pet Shelter</h1>
            {pet && (<h2>Edit {pet.name}</h2>)}
            <hr />
            {
                badId && (<p>Error:  Id not found in system.</p>)
            }
            { 
                pet && 
                (<Form 
                    initialPet={pet}
                    onPetSubmit={updatePet}
                    formErrors={formErrors}
                />)
            }
            <p><Link to={'/'}>back to home</Link></p>
        </>
    )
}
export default Update;
