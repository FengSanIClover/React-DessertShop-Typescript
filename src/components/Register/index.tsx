import React from 'react';
import 'asset/styles/Components/Register/Register.scss';
import RegisterLogo from '../Register/RegisterLogo';
import RegisterInput from '../Register/RegisterInput';

const register: React.FC = () => {
    return (
        <div className="f-r-container">
            <div className="f-r-register">
                <RegisterLogo />
                <RegisterInput />
            </div>
        </div>
    )
}

export default register;