import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../Data/BlogData';
import AuthorDetailsComponent from './AuthorDetailsComponent';
import RelatedReadComponent from './RelatedReadComponent';
import './PostPage.css';

const PostPage = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog = BlogData.find(blog => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, [id]);

    return (
        <div className='PostPage'>
            {
                blog ? <div>
                        <div key={blog.id} className='post-page-box'>
                            <div className='post-page-title'>
                                {blog.title}
                                <div className='author-flexbox'>
                                    <AuthorDetailsComponent data={blog} classStyle='written-by-hide' />
                                    <div className='social-btns'>
                                        <a href="https://twitter.com/i/flow/login" target="blank"><i className="fab fa-twitter-square"></i></a>
                                        <a href="https://www.facebook.com/login.php/" target="blank"><i className="fab fa-facebook-square"></i></a>
                                        <a href="https://www.instagram.com/accounts/login/" target="blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <img src={blog.img} className="post-page-img" alt="blog-img" />
                                <div className='post-page-para' dangerouslySetInnerHTML={{__html: blog['para'] }}></div>
                                <div className='post-page-tags-box'>
                                    {
                                        blog.tags.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))
                                    }
                                </div>
                                {/* add likes later */}
                                <div className='written-by-box'>
                                    <AuthorDetailsComponent data={blog} classStyle='written-by' />
                                </div>
                            </div>
                        </div>
                        <div className='related-read-box'>
                            <div className='related-read-innerbox'>
                                <div className='more-from-siren'>More From The Siren</div>
                                <div className='related-read-flexbox'>
                                    {
                                        BlogData.filter((item) => item.author === blog.author).slice(1, 4).map((data, index) => (
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