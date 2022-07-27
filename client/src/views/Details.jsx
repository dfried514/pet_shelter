import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Details = props => {
    const { setPetsUpdated } = props;
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [badId, setBadId] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setPet(res.data.record)
                setBadId(false);
            })
            .catch(() => setBadId(true))
    }, [id]);

    return (
        <>
            <h1>Pet Shelter</h1>
            {
                badId && (<p>Error:  Id not found in system.</p>)
            }
            { 
                pet && 
                (<div>
                    <h2>Details about {pet.name}</h2>
                    <p>Pet Type:   {pet.type}</p>
                    <p>Description:  {pet.description}</p>
                    <p>Skills:</p>
                        {pet.skill1.length > 0 && (<p>{pet.skill1}</p>)}
                        {pet.skill2.length > 0 && (<p>{pet.skill2}</p>)}
                        {pet.skill3.length > 0 && (<p>{pet.skill3}</p>)}
                    <br /><br />
                    <DeleteButton petId={id} petName={pet.name} setPetsUpdated={setPetsUpdated} />
                </div>)
            }
            <p><Link to={'/'}>back to home</Link></p>
        </>
    )
}
export default Details;
