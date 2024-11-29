import React from 'react'
const Project = (props) => {
  const {img} = props.item;
  return (
      <div className='project'>
        <iframe className='video-container' src={img} width="100%" height="145" title="YouTube video" allowFullScreen="true" loading='lazy' >
          </iframe>
      </div>
  )
}

export default Project;

