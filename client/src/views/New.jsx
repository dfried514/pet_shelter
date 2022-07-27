import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Form from '../components/Form';

const New = props => {
    const { setPetsUpdated } = props;
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const createPet = pet => {
        axios.post('http://localhost:8000/api/pets/', pet)
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
            <h3>Know a pet needing a home?</h3>
            <hr />
            <Form 
                initialPet={{name: '', type: '', description: '', skill1: '', skill2: '', skill3: ''}}
                onPetSubmit={createPet}
                formErrors={formErrors}
            />
            <p><Link to={'/'}>back to home</Link></p>
        </>
    )
}
export default New;
