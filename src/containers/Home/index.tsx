import React from 'react';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeSectionFirst from '../../components/Home/HomeSectionFirst';
import HomeSectionSecond from '../../components/Home/HomeSectionSecond';

const home: React.FC = () => {
    return (
        <div>
            <HomeHeader />
            <HomeSectionFirst />
            <HomeSectionSecond />
        </div>
    )
}

export default home;