import React, { useEffect, useState } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom'

const Slider = ({ blogs }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [blogs]);

    const handleClickIndicator = (index) => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    };


    return (
        <div className="carousel-container">
            {blogs && blogs.map((blog, index) => {
                if (index === currentIndex) {
                    return (
                        <div>
                            <img src={"../uploads/" + blog.image} alt="Carousel" />
                            <div className="caption">
                                <Link to={`/post/${blog._id}`} >
                                    {blog.title}
                                </Link>

                            </div>
                        </div>
                    )
                }

            })}

            <div className="arrow-buttons">
                <button onClick={() => handleClickIndicator(currentIndex)}>&#9664;</button>
                <button onClick={() => handleClickIndicator(currentIndex)}>&#9654;</button>
            </div>
        </div>
    );
};

export default Slider;

