import React from 'react';
import ShoppingCard from '../ShoppingCard';
import 'asset/styles/Components/Home/HomeOrderArea.scss';
import orderImg1 from 'asset/images/img-header-order1.jpg';
import orderImg2 from 'asset/images/img-header-order2.jpg';
import orderImg3 from 'asset/images/img-header-order3.jpg';

const homeOrderArea: React.FC = () => {
    return (
        <section className="h-o-layout">
            <ShoppingCard imgPath={orderImg1} prodName="焦糖甜甜圈" prodPrice={450} />
            <ShoppingCard imgPath={orderImg2} prodName="草莓嘉年華" prodPrice={500} />
            <ShoppingCard imgPath={orderImg3} prodName="藍莓世代" prodPrice={420} />
        </section>
    )
}

export default homeOrderArea;