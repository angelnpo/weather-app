import React, { useRef, useEffect, useState } from "react";
import CLOUDS from "vanta/src/vanta.clouds";
import * as THREE from "three";

const useWelcomePage = () => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(null);

  console.log("==========================");
  console.log("Outside useEffect:", myRefDiv.current);

  //executed after render component
  //add array dependencies only change state
  useEffect(() => {
    console.log("Into useEffect:", myRefDiv.current);
    if (!vanta) {
      const vantaEffect = CLOUDS({ el: myRefDiv.current, THREE });
      setVanta(vantaEffect);
      console.log("Chnage value const vanta...");
    }

    //clean up effect resources
    return () => {
      if (vanta) {
        console.log("Cleaning resources...");
        vanta.destroy();
      }
    };
  }, [vanta]);

  return { myRefDiv, vanta };
};

export default useWelcomePage;
