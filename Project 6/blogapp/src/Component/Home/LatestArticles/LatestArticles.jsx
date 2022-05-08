import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LatestArticles.css';
import BlogData from '../../Data/BlogData';
import LatestArticlesComponent from './LatestArticlesComponent';
import CarouselComponent from './CarouselComponent';
import TopPostComponent from './TopPostComponent';

const LatestArticles = () => {

    const [postNumber, setPostNumber] = useState(10);

    return (
        <div className='LatestArticles'>
            <div className='latest-articles-heading'>Latest Articles</div>
            <div className='latest-articles-box'>
                <div className='latest-articles-left'>
                    {
                        BlogData.slice(6, postNumber).map((data, index) => (
                            <LatestArticlesComponent data={data} key={index} />
                        ))
                    }
                    <div className='load-more' onClick={() => setPostNumber(postNumber + 2)}>
                        <i className="fas fa-arrow-down"></i>  LOAD MORE
                    </div>
                    <CarouselComponent />
                </div>
                <div className='latest-articles-right'>
                    <div className='advertisement-box'></div>
                    <div className='top-post-heading'>Top Posts</div>
                    <div className='top-post-flexbox'>
                        <Link to={`/${BlogData[23].category}/${BlogData[23].id}`}>
                            <img src={BlogData[23].img} alt="top-post" />
                            <div className='top-post-title'>{BlogData[23].title}</div>
                        </Link>
                        <div className='top-post-details'>
                            <span className='top-post-type'>{BlogData[23].category} </span>
                            <span className='top-post-date'>/ {BlogData[23].date}</span>
                        </div>
                        {
                            BlogData.slice(11, 14).map((data, index) => (
                                <TopPostComponent data={data} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticles;