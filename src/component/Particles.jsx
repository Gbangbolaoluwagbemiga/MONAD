import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "hsl(270, 80%, 70%)", // this sets a background color for the canvas
        // height: "100%",
      },
      fullScreen: {
        enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "pop", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        destroy: {
          mode: "split",
          split: {
            count: 1,
            factor: {
              value: {
                min: 2,
                max: 4,
              },
            },
            rate: {
              value: 100,
            },
            particles: {
              Wobble: {
                count: 1,
                duration: {
                  value: {
                    min: 2,
                    max: 3,
                  },
                },
              },
              move: {
                speed: {
                  min: 10,
                  max: 15,
                },
              },
            },
          },
        },
        number: {
          value: 80,
        },
        color: {
          value: [
            "#3998D0",
            "#2EB6AF",
            "#A9BD33",
            "#FEC73B",
            "#F89930",
            "#F45623",
            "#D62E32",
            "#EB586E",
            "#9952CF",
          ],
        },
        shape: {
          type: "star",
        },
        opacity: {
          value: 1,
        },
        size: {
          value: {
            min: 7,
            max: 8,
          },
        },
        collisions: {
          enable: true,
          mode: "bounce",
        },
        move: {
          enable: true,
          speed: 3,
          outModes: "bounce",
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
