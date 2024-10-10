import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  return (
    <div className="relative mx-10 md:mx-52 z-10 w-full h-96 md:h-screen"> {/* Ajuste de márgenes y altura */}
      <Spline
        scene="https://prod.spline.design/wAgM8iGsOxR4E6dw/scene.splinecode"
      />
    </div>
  );
};

export default SplineComponent;
