import { useNavigate } from "react-router-dom";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <div>
            <motion.h2 variants={textVariants}>Kamleshbhai Jadav</motion.h2>
            <motion.h1 variants={textVariants} className="size">
              Printer Repairing, Toner Cartridge Refilling & Sales
            </motion.h1>
          </div>
          <div className="button-wrapper">
            <motion.div variants={textVariants} className="buttons">
              <motion.button style={{ zIndex: 3 }} variants={textVariants} onClick={() => {}}>
                <motion.a href="#Portfolio">See the latest works</motion.a>
              </motion.button>
              <motion.button variants={textVariants}>
              <motion.a href="#Contact">Contact Me</motion.a>
               </motion.button>
            </motion.div>
          </div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Printer Repairing & Printer Sales
      </motion.div>
      {/* <div className="imageContainer"><img src="/hero.png" alt="" /></div> */}
    </div>
  );
};

export default Hero;
