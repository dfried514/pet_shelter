import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
    
const List = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        setPets([...props.pets].sort((a, b) => {
            if (a.type < b.type) return -1;
            if (a.type > b.type) return 1;
            if (a.name < b.name) return -1;
            return 1;
        }));
    }, [props.pets]);
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {pets.map((pet, i) => 
                <tr key={i}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>
                        <Link to={`/pets/${pet._id}`}>details</Link> | 
                        <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                    </td>
                </tr>    
            )}
            </tbody>
        </table>
    )
}
export default List;
