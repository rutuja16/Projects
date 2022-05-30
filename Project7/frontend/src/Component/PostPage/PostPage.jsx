import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuthorDetailsComponent from './AuthorDetailsComponent';
import './PostPage.css';

const PostPage = () => {

    const {category,id } = useParams();
    
    const [blog, setBlog] = useState(false);
    const [tag,setTag]=useState([])
    const [state, setState] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/blog/${category}/${id}`).then((response) => {
            setState(response.data.data[0]); 
            setTag(response.data.data[0].tags)
            setBlog(!blog);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    //console.log("state",state);
    //console.log("tag",tag)

    return (
        <div className='PostPage'>
            {
            blog ? 
                <div>
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
                        </div>
                        <img src={state.img} className="post-page-img" alt="blog-img" />
                        <div className='post-page-para' >{state.para}</div>
                        <div className='post-page-tags-box'>
                            {
                                tag.map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))
                            }
                        </div>
                    </div>

                    <div className='written-by-box'>
                        <AuthorDetailsComponent data={state} classStyle='written-by' />
                    </div>
                </div> : 
            null
            }
        </div>
    );
}

export default PostPage;