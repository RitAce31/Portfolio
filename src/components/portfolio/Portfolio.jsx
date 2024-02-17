import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Monark University",
    img: "https://t3.ftcdn.net/jpg/03/35/61/04/360_F_335610466_xhws3KXSLDokdvukNHuSfMVDLRCwhiOV.jpg",
    desc: "We have successfully provided Monark University with seamless printer repairs, eco-friendly toner cartridge refilling, and cutting-edge printer sales. Our services contribute to the smooth functionality of Monark University's diverse printing infrastructure, supporting their commitment to academic excellence.",
  },
  {
    id: 2,
    title: "Dudhat Industries",
    img: "https://media.istockphoto.com/id/1134496095/photo/refilling-third-party-printer-cartridges-inkjet.jpg?s=612x612&w=0&k=20&c=iAaF8Gg18gCnOx1FZlcDdC7JBvFWDI81q3K7zl6n7OM=",
    desc: "Dudhat Industries has benefited from our precise printer repairs, sustainable toner cartridge refilling, and advanced printer sales at Shreenath Infocare. Our solutions have minimized downtime and enhanced operational efficiency, helping Dudhat Industries maintain a competitive edge in the industry.",
  },
  {
    id: 3,
    title: "Civil Hospital",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/1/YY/LY/XA/18478045/laser-printer-repairing-services-500x500.webp",
    desc: "Shreenath Infocare has played a crucial role in meeting Civil Hospital's unique printing needs. Our specialized printer repairs, eco-conscious toner cartridge refilling, and tailored printer sales have contributed to the hospital's efficient healthcare workflow.",
  },
  {
    id: 4,
    title: "Angel Coating",
    img: "https://media.istockphoto.com/id/1270632839/photo/replacement-of-cmyk-set-of-ink-cartridges-in-printer.jpg?s=170667a&w=0&k=20&c=5MacRj-D3vf0AjIE9MfbOWq8iM4krPLVKOZ9iHmchtA=",
    desc: "As a trusted service provider, Shreenath Infocare has delivered optimal printer performance for Angel Coating through detailed repairs, eco-friendly toner cartridge refilling, and advanced printer sales. Our services support Angel Coating's technological edge in the competitive coating industry.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
