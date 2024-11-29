import React from 'react';
import LazyLoad from 'react-lazy-load';
const Projects2 = (props) => {
    const { img } = props.item;
    return (
        <div className='project2'>
            <LazyLoad>
                <img className='gallery-img' src={img} alt="img" height="400"  width="100%" />
            </LazyLoad>
        </div>
    )
}
export default Projects2;