import React from 'react';
import Lottie from 'react-lottie';
import ticsetLoader from './ticket.json';
export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ticsetLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Lottie options={defaultOptions} style={{
      width: '80%',
      height: '100%',
      position: 'relative',
      top: '-12px',
    }
    } />
  );
};
