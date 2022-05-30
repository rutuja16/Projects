import React from 'react';
import { Link } from 'react-router-dom';


const CarosuelComponent = ({data}) => {
    console.log("sdbfjsbjfdjbsds",{data})
    return (
        <div id="CarouselComponent" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                 <div className="carousel-item">
                    <img src={data[15].img} alt="Slide1"  className="d-block w-100" />
                    <div className="carousel-caption">
                        <Link to={`/${data[15].category}/${data[15].id}`}><h3>{data[15].title}</h3></Link>
                        <p>{data[15].category} / {data[15].date}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={data[14].img} alt="Slide1"  className="d-block w-100" />
                    <div className="carousel-caption">
                        <Link to={`/${data[14].category}/${data[14].id}`}><h3>{data[14].title}</h3></Link>
                        <p>{data[14].category} {data[14].date}</p>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src={data[41].img} alt="Slide1"  className="d-block w-100"/>
                    <div className="carousel-caption">
                        <Link to={`/${data[41].category}/${data[41].id}`}><h3>{data[41].title}</h3></Link>
                        <p>{data[41].category} {data[41].date}</p>
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

