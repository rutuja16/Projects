import React from 'react';
import Intro from './Intro/Intro';
import Latest from './Latest/Latest';
import LatestArticles from './LatestArticles/LatestArticles';
import LatestStories from './LatestStories/LatestStories';

function Home() {
    return (
        <div className='Home'>
            <Intro/>
            <Latest/>
            <LatestArticles/>
            <LatestStories/>
        </div>
    );
}

export default Home;