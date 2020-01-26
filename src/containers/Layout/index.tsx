import React from 'react';
import Toolbar from '../Toolbar';
import Footer from '../Footer';

const layout: React.FC = (props) => {
    return (
        <>
            <Toolbar />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default layout;