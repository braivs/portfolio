import React from 'react';
import s from './Main.module.scss';
import photo from '../assets/image/myPhoto.jpg'
import sContainer from '../common/styles/Container.module.scss'
import Particles from "react-tsparticles";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';


export function Main() {
    const particleOptions = {
        particles: {
            number: {
                value: 150,
                limit: 300,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
        },
        retina_detect: true,
        fps_limit: 60,
    } as const;

    return (
        <div className={s.mainBlock} id={'main'}>
            <Particles id={'tsparticles'} className={s.particles} options={particleOptions}/>

            <div className={`${sContainer.container} ${s.myDiv}`}>
                <div className={s.text}>
                    <h1>
                        <ReactTypingEffect
                            text={["HI, I`M REACT DEVELOPER"]}
                        />
                    </h1>
                    <h2>
                        <ReactTypingEffect
                            text={["BRIWS USTYUGOV"]}
                        />
                    </h2>
                    <p>
                        <ReactTypingEffect
                            text={["aka Sergey"]}
                        />
                    </p>
                </div>

                <img src={photo} alt="myPhoto" className={s.img}/>
                {/*<Tilt>
                    <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
                        <h1>React Parallax Tilt 👀</h1>
                    </div>
                </Tilt>*/}
            </div>
        </div>
    );
}