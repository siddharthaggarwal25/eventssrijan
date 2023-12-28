import React, { useEffect, useRef } from 'react';
import VANTA_BIRDS from 'vanta/dist/vanta.birds.min';

const Vanta = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize Vanta.js effect
    const vantaEffect = VANTA_BIRDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
    });

    // Clean up on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div ref={vantaRef} className="vanta-container" />;
};

export default Vanta;