import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { UseMonad } from "../context/UseMonad";
// import monad from "../assets/IMG_0274.gif";

function Main() {
  const { setMonadMode, monadMode} = UseMonad();



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
    <div className={`main px-6 py-4 text-purple-400 md:px-12 md:py-8 md:text-[#05040c]`}>
      <motion.h1
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1}
        className="mb-4 text-xl font-extrabold md:text-center md:text-3xl"
      >
        Buckle Up for Monad: The Next-Gen Blockchain Built for Speed
      </motion.h1>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className="mb-4 text-xl font-extrabold md:text-2xl"
      >
        Hey everyone, let's dive into the world of @monad_xyz, a revolutionary
        layer-1 blockchain poised to break the Web3 speed barrier!
      </motion.p>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={2}
      >
        <em className="my-3 block text-2xl font-bold">
          Monad: A Game Changer{" "}
        </em>
        <span className="text-xl font-semibold">
          Monad isn't your average blockchain. It boasts a whopping 10,000
          transactions per second (tps), offering developers unparalleled
          portability and performance. This means faster transactions, lower
          fees, and a smoother experience for everyone involved.
        </span>
      </motion.p>

      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={3}
      >
        <em className="my-3 block text-2xl font-bold">Why Monad Matters</em>
        <span className="text-xl font-semibold">
          Current blockchains like Ethereum struggle with scalability, leading
          to sluggish transactions and high costs. This hinders innovation and
          limits Web3's potential. Monad tackles these challenges head-on,
          paving the way for a more efficient and accessible future.
        </span>{" "}
      </motion.p>

      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={4}
      >
        <em className="my-3 block text-2xl font-bold">
          The Power Behind Monad
        </em>
        <span className="text-xl font-semibold">
          Monad Labs, a team of dedicated blockchain experts, is building Monad.
          Their mission? To unlock the true potential of decentralization and
          empower developers to create groundbreaking applications.
        </span>{" "}
      </motion.p>

      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={5}
      >
        <em className="my-3 block text-2xl font-bold">The Value Proposition</em>
        <span className="text-xl font-semibold">
          Monad's magic lies in its smart contract capabilities. Imagine
          censorship-resistant transactions and seamless interaction between
          apps – that's what Monad offers. Plus, lower gas costs and enhanced
          functionality open doors for exciting new possibilities.
        </span>{" "}
      </motion.p>

      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={6}
      >
        <em className="my-3 block text-2xl font-bold">EVM for the Win!</em>
        <span className="text-xl font-semibold">
          Here's the cherry on top: Monad is EVM-equivalent, meaning it
          integrates flawlessly with Ethereum's infrastructure. Developers can
          leverage existing tools and expertise, while enjoying the benefits of
          Monad's superior speed.
        </span>{" "}
      </motion.p>

      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={7}
      >
        <em className="my-3 block text-2xl font-bold">Unleashing the Tech</em>
        <span className="text-xl font-semibold">
          Monad achieves its lightning-fast performance through parallel and
          asynchronous transaction execution. It processes transactions
          simultaneously, unlike traditional blockchains, and achieves consensus
          independently, further boosting efficiency. ⚡
        </span>{" "}
      </motion.p>

      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={8}
      >
        <em className="my-3 block text-2xl font-bold">
          Beyond Compatibility: True Innovation
        </em>
        <span className="text-xl font-semibold">
          Monad isn't just another Ethereum clone. It implements groundbreaking
          changes throughout the blockchain architecture, delivering unmatched
          performance while maintaining full compatibility with Ethereum.
        </span>{" "}
      </motion.p>

      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={9}
      >
        <em className="my-3 block text-2xl font-bold">
          Join the Monad Movement!
        </em>
        <span className="text-xl font-semibold">
          Monad is more than just a technology, it's a community.The future of
          Monad is bright!
        </span>{" "}
      </motion.p>
    </div>
  );
}

export default Main;
