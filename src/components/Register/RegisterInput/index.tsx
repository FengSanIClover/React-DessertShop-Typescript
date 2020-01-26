import React from 'react';
import 'asset/styles/Components/Register/RegisterInput/RegisterInput.scss';

const registerInput: React.FC = () => {
    return (
        <div className="f-r-i-container">
            <div><i className="fas fa-envelope f-r-i-envelop"></i></div>
            <input type="text" className="f-r-i-input" maxLength={20} />
            <button type="button" className="f-r-i-btn">
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default registerInput;