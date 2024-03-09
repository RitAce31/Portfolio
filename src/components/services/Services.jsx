import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Precision in every print, expertise in every repair
          <br /> we keep your printers running seamlessly
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://st2.depositphotos.com/16122460/44940/i/450/depositphotos_449403410-stock-photo-repairman-screwdriver-fixing-modern-printer.jpg"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unlock</motion.b> Peak Printing
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}></motion.b> Performance
          </h1>
          <button>
            <motion.a href="#Portfolio">WHAT WE DID?</motion.a>
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Expert Printer Repairing</h2>
          <p>
            Efficient solutions for any printer issue. Our skilled technicians specialize in diagnosing and fixing
            problems, ensuring optimal printer performance.
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Toner Cartridge Refilling</h2>
          <p>
            Budget-friendly and eco-conscious toner refilling service. We use high-quality toner to extend cartridge
            life, providing consistent print quality and significant cost savings.
          </p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Printer Sales Solutions</h2>
          <p>
            Elevate your office with our top-tier printers. Our sales experts guide you to the perfect solution,
            offering speed, capacity, and versatility. Upgrade your printing experience with our quality printers.{" "}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
