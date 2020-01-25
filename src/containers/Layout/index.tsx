import React from 'react';

const layout: React.FC = (props) => {
    return (
        <>
            <div>Toolbar</div>
            <main>{props.children}</main>
            <div>Footer</div>
        </>
    )
}

export default layout;