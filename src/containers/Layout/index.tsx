import React from 'react';
import Toolbar from '../Toolbar';

const layout: React.FC = (props) => {
    return (
        <>
            <Toolbar />
            <main>{props.children}</main>
            <div>Footer</div>
        </>
    )
}

export default layout;