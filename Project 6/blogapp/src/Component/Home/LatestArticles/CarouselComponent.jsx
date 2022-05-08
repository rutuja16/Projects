import React from 'react';
import BlogData from '../../Data/BlogData';
import { Link } from 'react-router-dom';

const CarosuelComponent = () => {
    return (
        <div id="CarouselComponent" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item">
                    <img src={BlogData[15].img} alt="Slide1"  className="d-block w-100" />
                    <div className="carousel-caption">
                        <Link to={`/${BlogData[15].category}/${BlogData[15].id}`}><h3>{BlogData[15].title}</h3></Link>
                        <p>{BlogData[15].category} / {BlogData[15].date}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={BlogData[14].img} alt="Slide1"  className="d-block w-100" />
                    <div className="carousel-caption">
                        <Link to={`/${BlogData[14].category}/${BlogData[14].id}`}><h3>{BlogData[14].title}</h3></Link>
                        <p>{BlogData[14].category} {BlogData[14].date}</p>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src={BlogData[41].img} alt="Slide1"  className="d-block w-100"/>
                    <div className="carousel-caption">
                        <Link to={`/${BlogData[41].category}/${BlogData[41].id}`}><h3>{BlogData[41].title}</h3></Link>
                        <p>{BlogData[41].category} {BlogData[41].date}</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#CarouselComponent" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#CarouselComponent" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}

export default CarosuelComponent;

