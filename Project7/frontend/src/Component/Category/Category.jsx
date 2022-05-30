import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import LatestArticlesComponent from '../Home/LatestArticles/LatestArticlesComponent';
import TopPostComponent from '../Home/LatestArticles/TopPostComponent';
import './Category.css';


function Category(props) {
    let {category } = useParams();
    
    //console.log(category)
    const [postNumber, setPostNumber] = useState(5);
    const [state, setState] = useState([]);
    const [blog,setBlog]=useState(null)
    

    useEffect(() => {
        axios.get(`http://localhost:8080/blog/${category}`).then((response) => {
            setState(response.data.data); 
            
        })
        .catch((err) => {
            console.log(err);
        });

        
    },[]);

    useEffect(() => {
        let blog = state.find((blog) => blog.category === category)
        if (blog) {
            setBlog(blog);
            console.log(blog)
        }
    },[{category}]);
    
    console.log("abc",state)
    return (
        <div className='CategoryPage'>
            {
                blog ? <div>
                    <div className='LatestArticles'>
                        <div className='latest-articles-heading'>{category}</div>
                        <div className='latest-articles-box'>
                            <div className='latest-articles-left'>
                                {
                                    state.filter((item) => item.category=== blog.category).map((data, index) => (
                                        <LatestArticlesComponent data={data} key={index} />
                                    ))
                                }
                                <div className='load-more' onClick={() => setPostNumber(postNumber + 2)}>
                                    <i className="fas fa-arrow-down"></i>LOAD MORE
                                </div>
                            </div>
                            <div className='latest-articles-right'>
                                <div className='top-post-heading'>Top Posts</div>
                                <div className='top-post-flexbox'>
                                    <img src={state.filter((item) => item.category === blog.category)[1].img} alt="top-post" />
                                    <Link to={`/${state.filter((item) => item.category === blog.category)[1].category}/${state.filter((item) => item.category === blog.category)[1].id}`}>
                                        <div className='top-post-title'>{state.filter((item) => item.category === blog.category)[1].title}</div>
                                    </Link>
                                    <div className='top-post-details'>
                                        <span className='top-post-type'>{state.filter((item) => item.category === blog.category)[1].category} </span>
                                        <span className='top-post-date'>/ {state.filter((item) => item.category === blog.category)[1].date}</span>
                                    </div>
                                    {
                                        state.filter((item) => item.category === blog.category).slice(4, 7).map((data, index) => (
                                            <TopPostComponent data={data} key={index}/>
                                        ))
                                    }
                                </div>
                                <div className='advertisement-box'></div>
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </div>
    );
}

export default Category;