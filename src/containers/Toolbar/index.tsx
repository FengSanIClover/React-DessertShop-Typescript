import React from 'react';
import 'asset/styles/Containers/Toolbar.scss';
import Logo from '../../components/Logo';
import NavigationItems from '../../components/NavigationItems';

const toolbar: React.FC = () => {
    return (
        <nav className="t-container">
            <Logo />
            <NavigationItems />
        </nav>
    )
}

export default toolbar;