import React, {useCallback} from 'react'
import s from './Main.module.scss'
import photo from '../../../assets/image/myPhoto.jpg'
// import Particles from "react-tsparticles";
import ReactTypingEffect from "react-typing-effect"
import {Fade} from "react-awesome-reveal"
import Tilt from 'react-parallax-tilt'
import {particlesFirstConfig} from "./particlesConfigs/particlesFirstConfig"
// import Particles from "react-particles-js";
import Particles from "react-tsparticles"
import type {Engine} from "tsparticles-engine"
import {loadFull} from "tsparticles"

export function Main() {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className={s.main} id={'main'}>
            <Particles id="tsparticles" init={particlesInit} options={particlesFirstConfig} height={'100vh'}/>
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
                            BRAIVS USTIUGOV
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