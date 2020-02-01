import React from 'react';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeSectionFirst from '../../components/Home/HomeSectionFirst';
import HomeSectionSecond from '../../components/Home/HomeSectionSecond';
import HomeSectionThird from '../../components/Home/HomeSectionThird';

const home: React.FC = () => {
    return (
        <div>
            <HomeHeader />
            <HomeSectionFirst />
            <HomeSectionSecond />
            <HomeSectionThird />
        </div>
    )
}

export default home;