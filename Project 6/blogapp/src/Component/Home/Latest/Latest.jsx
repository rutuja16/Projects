import React from 'react';
import BlogData from '../../Data/BlogData';
import LatestComp from './LatestComp';
import "./latest.css"

const Latest = () => {
    return (
        <div className='Latest'>
            <div className='latest-box'>
                <div className='latest-heading'>The Latest</div>
                <div className='latest-flex-container'>
                    {
                        BlogData.slice(3, 6).map(
                            (data, index) => (
                                <LatestComp data={data} key={index} />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Latest;