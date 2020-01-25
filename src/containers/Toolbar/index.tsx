import React from 'react';
import 'asset/styles/Containers/Toolbar.scss';
import Logo from '../../components/Logo';

const toolbar: React.FC = () => {
    return (
        <div className="t-container">
            <Logo />
            <div>navigation</div>
            <div>shoppingcar</div>
        </div>
    )
}

export default toolbar;