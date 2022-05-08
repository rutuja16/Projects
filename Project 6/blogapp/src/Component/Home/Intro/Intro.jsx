import React from 'react';
// import BlogList from "../../Data/BlogList";
import BlogData from "../../Data/BlogData";
import IntroComp from './IntroComp';
import './intro.css';

const Intro=()=> {
    return (
        <div className='Intro'>
            <div className='intro-box'>
                {
                    BlogData.filter((item) => item.id === 0).map((data, index) => (
                        <IntroComp data={data} classStyle='classStyle1' key={index} />
                    ))
                }
                {
                    BlogData.slice(1, 3).map((data, index) => (
                        <IntroComp data={data} classStyle='classStyle2' key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default Intro;