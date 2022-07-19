import React from 'react';
import s from './Main.module.scss';
import photo from '../assets/image/myPhoto.jpg'
// import Particles from "react-tsparticles";
import ReactTypingEffect from "react-typing-effect";
import {Fade} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import {particlesPreset} from "./particlesConfigs/particlesPreset";
import {particlesFirstConfig} from "./particlesConfigs/particlesFirstConfig";
import {particlesCollisions} from "./particlesConfigs/particlesCollisions";
// import Particles from "react-particles-js";
import {PaticleFastPerfomanceMaybe} from "./particlesConfigs/PaticleFastPerfomanceMaybe";
import Particles from "react-tsparticles";

export function Main() {
    const particleOptions = particlesFirstConfig

    return (
        <div className={s.main} id={'main'}>
            {/*<Particles className={s.particles} options={particleOptions}/>*/}
            <Particles className={s.particles} options={particleOptions}/>
            <div className={s.mainBlock}>
                <Fade>

                    <div className={s.text}>
                        <h1>
                            <ReactTypingEffect
                                text={["HI, I`M REACT DEVELOPER"]}
                            />
                            {/*HI, I`M REACT DEVELOPER*/}
                        </h1>
                        <h2>
                           {/* <ReactTypingEffect
                                text={["BRIWS USTYUGOV"]}
                            />*/}
                            BRIWS USTYUGOV
                        </h2>
                    </div>
                    <Tilt>
                        <div className={s.imgBlock}>
                            <img src={photo} alt="myPhoto" className={s.img}/>

                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
}