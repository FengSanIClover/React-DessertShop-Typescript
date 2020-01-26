import React from 'react';
import 'asset/styles/Components/Register/Register.scss';
import RegisterLogo from '../Register/RegisterLogo';
import RegisterInput from '../Register/RegisterInput';

const register: React.FC = () => {
    return (
        <div className="f-r-container">
            <RegisterLogo />
            <RegisterInput />
        </div>
    )
}

export default register;