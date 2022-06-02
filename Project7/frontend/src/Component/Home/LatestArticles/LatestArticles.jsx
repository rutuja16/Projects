import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LatestArticles.css';
import LatestArticlesComponent from './LatestArticlesComponent';
import TopPostComponent from './TopPostComponent';

const LatestArticles = ({state}) => {
    const [postNumber, setPostNumber] = useState(10);
    console.log("latest",{state})
    return (
        <div className='LatestArticles'>
            <div className='latest-articles-heading'>Latest Articles</div>
            <div className='latest-articles-box'>
                <div className='latest-articles-left'>
                    {
                        state.slice(4, postNumber).map((data, index) => (
                            <LatestArticlesComponent data={data} key={index} />
                        ))
                    }
                    <div className='load-more' onClick={() => setPostNumber(postNumber + 2)}>
                        <i className="fas fa-arrow-down"></i>  LOAD MORE
                    </div>
                </div>
                <div className='latest-articles-right'>
                    <div className='advertisement-box'></div>
                    <div className='top-post-heading'>Top Posts</div>
                    <div className='top-post-flexbox'>
                        {
                            state.slice(7,10).map((data, index) => (
                                <div key={index}>
                                    <Link to={`/${data.category}/${data.id}`}>
                                        <img src={data.img} alt="top-post" />
                                        <div className='top-post-title'>{data.title}</div>
                                    </Link>
                                    <div className='top-post-details'>
                                        <span className='top-post-type'>{data.category} </span>
                                        <span className='top-post-date'>/ {data.date}</span>
                                    </div>
                                </div>
                            ))
                        }

                        {
                            state.slice(11, 14).map((data, index) => (
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