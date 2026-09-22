import React, {useCallback, useMemo} from 'react'
import s from './Main.module.scss'
import photo from '../../../assets/image/myPhotoThai.jpg'
import {Fade} from "react-awesome-reveal"
import Tilt from 'react-parallax-tilt'
import {getParticlesFirstConfig} from "./particlesConfigs/particlesFirstConfig"
import Particles from "react-tsparticles"
import type {Engine} from "tsparticles-engine"
import {loadFull} from "tsparticles"
import {NavLink} from "react-router-dom"
import {useTheme} from "../../../common/theme/ThemeContext"

export function Main() {
    const {theme} = useTheme()
    const particlesConfig = useMemo(() => getParticlesFirstConfig(theme === 'dark'), [theme])

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className={s.main} id={'main'}>
            <Particles
                key={theme}
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
                height={'100vh'}
            />
            <div className={s.mainBlock}>
                <Fade>
                    <div className={s.text}>
                        <h1>
                           {/* <ReactTypingEffect
                                // text={["Hi, I'm a React developer", "Hi, I'm a Next.js developer"]}
                                text={["Hi, I'm a Frontend Developer", "Hi, I'm a Full Stack Web Developer"]}
                                speed={30}
                                eraseSpeed={30}
                            />*/}
                            Hi, I'm an iGaming Frontend/Full-Stack Engineer.
                        </h1>
                        <h2>
                            Braivs Ustiugov
                        </h2>
                    </div>
                    <div className={s.cV_Photo}>
                        <NavLink to={'/cv'}><div className={s.cv}><b>View <br/> CV</b></div></NavLink>
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