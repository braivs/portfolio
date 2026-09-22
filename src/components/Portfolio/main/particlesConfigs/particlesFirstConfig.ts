export const getParticlesFirstConfig = (isDark: boolean) => {
    const particleColor = isDark ? '#f5df4e' : '#fff'

    return {
        particles: {
            color: {
                value: particleColor,
            },
            number: {
                value: 100,
                limit: 200,
                /*density: {
                    enable: true,
                    value_area: 800
                }*/
            },
            line_linked: {
                enable: true,
                color: particleColor,
                distance: 100,
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
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
        fps_limit: 30,
        fullScreen: false,
    } as const
}