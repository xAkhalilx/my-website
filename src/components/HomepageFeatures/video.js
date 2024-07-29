import React from 'react';

const Video = ({ src, width = '600', type = 'video/mp4' }) => (
  <video width={width} controls>
    <source src={src} type={type} />
    Your browser does not support the video tag.
  </video>
);

export default Video;
