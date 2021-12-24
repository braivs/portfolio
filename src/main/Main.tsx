import React from 'react';
import s from './Main.module.scss';
import photo from '../assets/image/myPhoto.jpg'
import sContainer from '../common/styles/Container.module.scss'
import Particles from "react-tsparticles";


export function Main() {
    const particlesInit = () => {
        console.log('particles init');

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    const particlesLoaded = () => {
        console.log('particles loaded');
    };

    const particleOptions = {

        fullScreen: {
            enable: true,
            zIndex: 0
        },
        particles: {
            number: {
                value: 200,
                limit: 300,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "images/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.5,
                    sync: false
                }
            },
            size: {
                value: 30,
                random: true,
                anim: {
                    enable: true,
                    speed: 10,
                    size_min: 10,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: "#ffffff",
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
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 60,
                        smooth: 10
                    }
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    lineLinked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 100,
                    duration: 2,
                    opacity: 1,
                    speed: 2
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        backgroundMask: {
            enable: true,
            cover: {
                color: {
                    value: {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                },
                opacity: 0.3
            }
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
            image:
                "url('https://particles.js.org/images/background3.jpg')"
        }
    } as const;

    return (
        <div className={s.mainBlock}>
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions}/>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h1>HI, I`M REACT DEVELOPER</h1>
                    <h2>BRIWS USTYUGOV</h2>
                    <p>aka Sergey</p>
                </div>
                <img src={photo} alt="myPhoto"/>
            </div>
        </div>
    );
}