import React from 'react';
import IntroComp from './IntroComp';
import './intro.css';

const Intro=({state})=> {
    return(
        <div className='Intro'>
            <div className='intro-box'>
                {
                    state.filter((item) => item.id === 0).map((data, index) => (
                        <IntroComp data={data} classStyle='classStyle1' key={index} />
                    ))
                }
                {
                    state.slice(1, 3).map((data, index) => (
                        <IntroComp data={data} classStyle='classStyle2' key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Intro;