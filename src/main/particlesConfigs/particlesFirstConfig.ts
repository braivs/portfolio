export const particlesFirstConfig = {
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
        fps_limit: 30,
} as const;