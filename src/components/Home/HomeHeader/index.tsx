import React from 'react';
import 'asset/styles/Components/Home/HomeHeader.scss';

const header: React.FC = () => {
    return (
        <section className="h-header">
            <div className="h-header-mainimg"></div>
            <ul className="h-header-sideimgbox">
                <li className="h-header-sideimg-left"></li>
                <li className="h-header-sideimg-center"></li>
                <li className="h-header-sideimg-right"></li>
            </ul>
        </section>
    )
}

export default header;