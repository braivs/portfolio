import React, {useCallback} from 'react'
import s from './Main.module.scss'
import photo from '../../../assets/image/myPhoto.jpg'
import ReactTypingEffect from "react-typing-effect"
import {Fade} from "react-awesome-reveal"
import Tilt from 'react-parallax-tilt'
import {particlesFirstConfig} from "./particlesConfigs/particlesFirstConfig"
import Particles from "react-tsparticles"
import type {Engine} from "tsparticles-engine"
import {loadFull} from "tsparticles"
import {NavLink} from "react-router-dom"

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
                        </h1>
                        <h2>
                            BRAIVS USTIUGOV
                        </h2>
                    </div>
                    <div className={s.cV_Photo}>
                        <NavLink to={'/cv'}><div className={s.cv}><b>CV <br/> here</b></div></NavLink>
                        <Tilt>
                            <div className={s.imgBlock}>
                                <img src={photo} alt="myPhoto" className={s.img}/>
                            </div>
                        </Tilt>
                    </div>

                </Fade>
            </div>
        </div>
    );
}