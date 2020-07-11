import React, { useState } from 'react';
import FormValidation from './lib';

function App() {
    const [formData, setForm] = useState({
        name: '',
        lastname: ''
    });
    const onSubmitForm = () => {
        
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...formData,
            [name]: value
        })
    }
    return (
    <div className='container'>
        <div className='row'>
            <FormValidation onSubmit={onSubmitForm}>
                <div style={{
                    marginBottom: 10
                }}>
                    <input
                        style={{
                            padding: 10
                        }}
                        className='form-control input-name'
                        name='name'
                        placeholder='Nome'
                        value={formData.name}
                        isrequired={true}
                        onChange={handleChange}/>
                </div>
                <div style={{
                    marginBottom: 10
                }}>
                    <input
                        style={{
                            padding: 10
                        }}
                        className='form-control input-lastname'
                        name='lastname'
                        placeholder='Último nome'
                        value={formData.lastname}
                        isrequired={true}
                        onChange={handleChange}/>
                </div>
                <button type='submit'>Enviar</button>
            </FormValidation>
        </div>
    </div>
    );
}

export default App;