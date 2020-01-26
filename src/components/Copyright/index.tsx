import React from 'react';
import 'asset/styles/Components/Copyright/Copyright.scss';

const copyright: React.FC = () => {
    return (
        <div className="f-c-container">
            <div className="f-c-copyright">
                <div className="f-c-copyright-uparea">
                    <div className="f-c-copyright-uparea-info">
                        <div>img</div>
                        <div>addr</div>
                    </div>
                    <div className="f-c-copyright-uparea-img"></div>
                </div>
                <div className="f-c-copyright-downarea">
                    <div className="f-c-copyright-downarea-img">
                        <div className="img-at"></div>
                        <div className="img-facebook"></div>
                    </div>
                    <div className="f-c-copyright-downarea-msg">© 2018 Sweetaste* All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default copyright;