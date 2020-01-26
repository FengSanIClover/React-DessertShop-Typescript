import React from 'react';
import 'asset/styles/Components/Register/Register.scss';
import RegisterLogo from '../Register/RegisterLogo';

const register: React.FC = () => {
    return (
        <div className="f-r-container">
            <RegisterLogo />
            <div>inputbox</div>
        </div>
    )
}

export default register;