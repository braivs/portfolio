export const getParticlesFirstConfig = (isDark: boolean) => {
    const particleColor = isDark ? '#f5df4e' : '#fff'

    return {
        particles: {
            color: {
                value: particleColor,
            },
            opacity: {
                value: 0.7,
            },
            number: {
                value: 100,
                limit: 200,
                density: {
                    enable: true,
                    area: 800
                }
            },
            links: {
                enable: true,
                color: particleColor,
                distance: 100,
                opacity: 0.7,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "bounce",
                },
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
        },
        detectRetina: true,
        fpsLimit: 60,
        fullScreen: {
            enable: false,
        },
    } as const
}