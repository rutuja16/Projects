import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuthorDetailsComponent from './AuthorDetailsComponent';
import RelatedReadComponent from './RelatedReadComponent';
import './PostPage.css';

const PostPage = () => {
    const { id } = useParams();
    const [state, setState] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/blog/:category/:id`).then((response) => {
            setState(response.data.blogs); 
            //console.log(response.data.blogs)
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
    useEffect(() => {
        let blog = state.find(blog => blog.id === parseInt(id));
        if (blog) {
            setState(blog);
        }
    }, [id]);

    return (
        <div className='PostPage'>
            {
                state ? <div>
                        <div key={state.id} className='post-page-box'>
                            <div className='post-page-title'>
                                {state.title}
                                <div className='author-flexbox'>
                                    <AuthorDetailsComponent data={state} classStyle='written-by-hide' />
                                    <div className='social-btns'>
                                        <a href="https://twitter.com/i/flow/login" target="blank"><i className="fab fa-twitter-square"></i></a>
                                        <a href="https://www.facebook.com/login.php/" target="blank"><i className="fab fa-facebook-square"></i></a>
                                        <a href="https://www.instagram.com/accounts/login/" target="blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <img src={state.img} className="post-page-img" alt="blog-img" />
                                <div className='post-page-para' dangerouslySetInnerHTML={{__html: state['para'] }}></div>
                                <div className='post-page-tags-box'>
                                    {
                                        state.tags.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))
                                    }
                                </div>
                                {/* add likes later */}
                                <div className='written-by-box'>
                                    <AuthorDetailsComponent data={state} classStyle='written-by' />
                                </div>
                            </div>
                        </div>
                        <div className='related-read-box'>
                            <div className='related-read-innerbox'>
                                <div className='more-from-siren'>More From The Siren</div>
                                <div className='related-read-flexbox'>
                                    {
                                        state.filter((item) => item.author === state.author).slice(1, 4).map((data, index) => (
                                            <RelatedReadComponent data={data} key={index}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
        </div>
    );
}

export default PostPage;