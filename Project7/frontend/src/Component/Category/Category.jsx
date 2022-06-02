import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import LatestArticlesComponent from '../Home/LatestArticles/LatestArticlesComponent';
import TopPostComponent from '../Home/LatestArticles/TopPostComponent';
import './Category.css';


function Category() {
    const {category } = useParams();

    //console.log(category)
    const [postNumber, setPostNumber] = useState(5);
    const [state, setState] = useState([]);
    const [blog,setBlog]=useState(null)
    

    useEffect(() => {
        axios.get(`https://sleepy-scrubland-44667.herokuapp.com/blog/${category}`).then((response) => {
            setState(response.data.data); 
        })
        .catch((err) => {
            console.log(err);
        });
    },[category]);

    // useEffect(() => {
    //     let blog = state.find((blog) => blog.category === category)
    //     if (blog) {
    //         setBlog(blog);
    //         console.log(blog)
    //     }
    // },[category]);

    return (
        <div className='CategoryPage'>
            <div className='latest-articles-heading'>{category}</div>
            <div className='latest-articles-box'>
                <div className='latest-articles-left'>
                    {/* {
                        state.filter((item) => item.category=== blog.category).map((data, index) => (
                            <LatestArticlesComponent data={data} key={index} />
                        ))
                    } 
                        <div className='load-more' onClick={() => setPostNumber(postNumber + 3)}>
                        <i className="fas fa-arrow-down"></i>LOAD MORE post
                    </div> */}
                    {
                        state.filter((item) => item.category=== category).slice(0, postNumber).map((data, index) => (
                            <LatestArticlesComponent data={data} key={index} />
                        ))
                    }
                    <div className='view-more'onClick={() => setPostNumber(postNumber + 3)}>
                        VIEW MORE <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className='latest-articles-right'>
                    <div className='top-post-heading'>Top Posts</div>
                    <div className='top-post-flexbox'>
                    {
                        state.slice(1,3).map((post, index) => (
                            <div key={index} >
                                <img src={post.img} alt="top-post" />
                                <Link to={`/category/${post.id}`}>
                                    <div className='top-post-title'>{post.title}</div>
                                </Link>
                                <div className='top-post-details'>
                                    <span className='top-post-type'>{post.category} </span>
                                    <span className='top-post-date'>/ {post.date}</span>
                                </div>
                            </div>
                        ))
                    }
                    {
                        state.filter((item) => item.category === category).slice(4, 7).map((data, index) => (
                            <TopPostComponent data={data} key={index}/>
                        ))
                    }
                    </div>
                    <div className='advertisement-box'></div>
                </div>
            </div>
        </div>
    );
}

export default Category;