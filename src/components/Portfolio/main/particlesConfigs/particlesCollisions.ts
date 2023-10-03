export const particlesCollisions = {
    /*"background": {
        "color": {
            "value": "#0d47a1"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    "fullScreen": {
        "zIndex": 1
    },*/
    /*"interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "onHover": {
                "mode": "repulse",
                "parallax": {
                    "force": 60
                }
            }
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
            },
            "grab": {
                "distance": 400
            }
        }
    },*/
    "particles": {
        "collisions": {
            "enable": true
        },
        "color": {
            "value": "#ffffff"
        },
        "links": {
            "color": {
                "value": "#ffffff"
            },
            "distance": 150,
            "opacity": 0.4
        },
        "move": {
            "attract": {
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "enable": true,
            "outModes": {
                "default": "bounce",
                "bottom": "bounce",
                "left": "bounce",
                "right": "bounce",
                "top": "bounce"
            },
            "speed": 5
        },
        "number": {
            "density": {
                "enable": true
            },
            "value": 40
        },
        /*"opacity": {
            "value": 0.5,
            "animation": {
                "speed": 1,
                "minimumValue": 0.1
            }
        },*/
        "size": {
            "random": {
                "enable": true,
                "minimumValue": 10
            },
            "value": {
                "min": 10,
                "max": 15
            },
            "animation": {
                "speed": 40,
                "minimumValue": 0.1
            }
        },
        fps_limit: 30,
    }
} as const;