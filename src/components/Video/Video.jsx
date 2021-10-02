import React from 'react';
import PropTypes from 'prop-types';

const Video = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/EpLFJR_OxYU?start=2"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    controls="1"
    start="2"
    loop="1"
  />
);

// Video.propTypes = {
//   url: PropTypes.string.isRequired,
// };

export default Video;
