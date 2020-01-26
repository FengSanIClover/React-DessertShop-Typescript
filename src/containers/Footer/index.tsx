import React from 'react';
import 'asset/styles/Containers/Footer.scss';
import Register from '../../components/Register';

const footer: React.FC = () => {
    return (
        <footer className="f-container">
            <Register />
            <div>copyright</div>
        </footer>
    )
}

export default footer;