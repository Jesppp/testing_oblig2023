'use client'
import React, { useState } from 'react';

export const UserHandling = () => {
    const [username, setUsername] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [isValidated, setIsValidated] = useState(true);

    const handleSubmittionOfData = () => {
        if (username && emailAddress.includes('@')) {
            console.log('Bruker input', {username, emailAddress});

            setIsValidated(true);
        }
        else {
            setIsValidated(false);
        }
    };

    return (
        <div>
            <input value={username} onChange={l => setUsername(l.target.value)} placeholder='Brukernavn' />
            <input value={emailAddress} onChange={l => setEmailAddress(l.target.value)} placeholder='Epost addresse' />
            <button onClick={handleSubmittionOfData}>Lag bruker</button>
            {!isValidated && <p>Invalid input av verdier. Epost addressen må inneholde alfakrøll: @.</p>}
        </div>
    )
}