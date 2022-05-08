import React from 'react';
import { Link } from 'react-router-dom';

function IntroComp({data,classStyle}) {
    return (
        <div key={data.id} className={classStyle} >
            <Link to={`/${data.category}/${data.id}`}>
                <img src={data.img} className='intro-img' alt="intro-img" />
                <div className='intro-title'>
                    <div className='intro-title-head'>{data.title}</div>
                    <div className='intro-title-subhead'>{data.category} / {data.date}</div>
                </div>
            </Link>
        </div>
    );
}

export default IntroComp;