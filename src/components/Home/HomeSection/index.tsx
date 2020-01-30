import React from 'react';
import 'asset/styles/Components/Home/HomeSection.scss'

const headerSection: React.FC = () => {
    return (
        <section className="h-s-container">
            <div className="h-s-layout">
                <div className="h-s-leftlogo"></div>
                <div className="h-s-centermsg">
                    <p>青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
                    <p>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
                </div>
                <div className="h-s-rightlogo"></div>
            </div>
        </section>
    )
}

export default headerSection;
