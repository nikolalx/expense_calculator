import React from 'react'
// import PocketBase from 'pocketbase';

import Stars from '../Components/Stars.jsx'
// import StarfieldAnimation from '../node_modules/react-starfield-animation';


// bg-breakpoint - za lakse responsive class

// import Page from './Components/Users';  vezbao fetchovanje i autenth
import Loggin from '.././Components/Loggin';

export default function Home() {

  return (
    <>

      {/* <Stars>{
        <div>
          <StarfieldAnimation
            lineWidth={"0.8"}
            alphaFactor={"0.5"}
            numParticles={"1000"}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      }</Stars> */}

      <div className={'bg-black grid content-center border-black border-[2px] w-screen h-screen '}>
        <div className={'relative flex mx-auto border-transparent ring-offset-2 ring-offset-purple-100/[.90] border-[2px] rounded-lg 2xl:w-[50rem] 2xl:h-[50rem] xl:w-[35rem] xl:h-[30rem] '}>
          <Loggin />
        </div>
      </div>
    </>
  );
}
