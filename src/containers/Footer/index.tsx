import React from 'react';
import 'asset/styles/Containers/Footer.scss';
import Register from '../../components/Register';
import Copyright from '../../components/Copyright';

const footer: React.FC = () => {
    return (
        <footer className="f-container">
            <Register />
            <Copyright />
        </footer>
    )
}

export default footer;