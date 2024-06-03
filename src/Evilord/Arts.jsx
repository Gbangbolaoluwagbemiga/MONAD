import asset1 from "./EAsset/e1.jpg";
import asset2 from "./EAsset/e2.jpg";
import asset3 from "./EAsset/e3.jpg";
import asset4 from "./EAsset/e4.jpg";
import asset5 from "./EAsset/e5.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Arts() {
  const fade = {
    initial: { opacity: 0, y: 150 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.25 * index },
    }),
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="p-6 md:p-20">
      <p className="text-center text-2xl font-bold md:text-4xl">ART</p>
      <p className="my-5 justify-between md:flex">
        <motion.img
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="mx-auto my-3 h-96 w-[99%] md:mx-0 md:w-96"
          src={asset1}
          alt="#"
        />
        <motion.img
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="m3-2 mx-auto h-96 w-[99%] md:mx-0 md:w-96"
          src={asset2}
          alt="#"
        />
        <motion.img
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="mx-auto my-3 h-96 w-[99%] md:mx-0 md:w-96"
          src={asset3}
          alt="#"
        />
      </p>
      <p className="gap-40 md:flex">
        <motion.img
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="mx-auto my-3 h-96 w-[99%] md:mx-0 md:w-96"
          src={asset4}
          alt="#"
        />
        <motion.img
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="m3-2 mx-auto h-96 w-[99%] md:mx-0 md:w-96"
          src={asset5}
          alt="#"
        />
      </p>
    </div>
  );
}

export default Arts;
