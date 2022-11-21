import React, { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

 const Mail = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x16162f,
          shininess: 25.00,
          waveHeight: 10.50,
          waveSpeed: .50,
          zoom: 1.5


        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef} className="vanta" >

    </div>
  );
};

export default Mail;