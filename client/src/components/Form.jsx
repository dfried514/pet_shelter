import React, { useState, useEffect } from 'react';

const Form = props => {
    const { initialPet, onPetSubmit, formErrors } = props;
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');

    useEffect(() => {
        setName(initialPet.name);
        setType(initialPet.type);
        setDescription(initialPet.description);
        setSkill1(initialPet.skill1);
        setSkill2(initialPet.skill2);
        setSkill3(initialPet.skill3);
    },[initialPet]);

    const handleSubmit = e => {
        e.preventDefault();
        onPetSubmit({name, type, description, skill1, skill2, skill3});
    }

    return (
        <>
            {
                Object.values(formErrors) && (
                    <div>
                        {Object.values(formErrors).map((item, i) => <p key={i}>{item.message}</p>)}        
                    </div>
                )
            }
            <form onSubmit={ handleSubmit }>
                <label>Name:   </label>
                <input type="text" value={ name } onChange={ (e) => setName(e.target.value)}/>
                <br /><br />
                <label>Type:   </label>
                <input type="text" value={ type } onChange={ (e) => setType(e.target.value)}/>
                <br /><br />
                <label>Description:   </label>
                <input type="text" value={ description } onChange={ (e) => setDescription(e.target.value)}/>
                <br /><br />
                <h2>Skills (Optional)</h2>
                <label>Skill 1:   </label>
                <input type="text" value={ skill1 } onChange={ (e) => setSkill1(e.target.value)}/>
                <br /><br />
                <label>Skill 2:   </label>
                <input type="text" value={ skill2 } onChange={ (e) => setSkill2(e.target.value)}/>
                <br /><br />
                <label>Skill 3:   </label>
                <input type="text" value={ skill3 } onChange={ (e) => setSkill3(e.target.value)}/>
                <br /><br />
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}
export default Form;
