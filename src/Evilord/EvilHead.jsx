import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountDown from "./countdown";

const Evolution = () => {
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
    <div className="my-4 p-4">
      <motion.h1
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1}
        className="text-xl font-bold italic md:text-2xl"
      >
        Calling All Renegades: Your Gang Awaits in Gangster All Star: Evolution!
      </motion.h1>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className=" p-2 font-medium"
      >
        Ever craved a community where individuality thrives? A place to connect,
        create, and push boundaries? Look no further than Gangster All Star:
        Evolution!
      </motion.p>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className=" p-2 font-medium"
      >
        This isn't your average NFT collection. It's your gateway to a vibrant
        metaverse overflowing with 50 unique gangs – each one a melting pot of
        innovation and imagination. Here, you'll find "The Bar," your exclusive
        hub for forging connections and fueling your creative fire.
      </motion.p>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className=" p-2 font-medium"
      >
        Owning a Gangster All Star: Evolution NFT grants you access beyond the
        metaverse. Think exclusive educational content, coveted physical merch
        drops, and priority access to future collaborations – the perks are
        endless!
      </motion.p>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className=" p-2 font-medium"
      >
        Here's where things get even wilder: owning an NFT from the original
        Gangster All Star collection unlocks a treasure trove of benefits for
        the Evolution mint!
      </motion.p>
      <motion.h2
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1}
        className="my-3 text-xl font-bold italic md:text-2xl"
      >
        OG Holders Rejoice! Your Gang Loyalty Pays Off:
      </motion.h2>
      <ul>
        <motion.li
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1.5}
          className="p-2 font-medium"
        >
          <strong>Bosses:</strong> Free mints galore! You get 4 FREE mints and 1
          sweet allowlist spot per Boss NFT.
        </motion.li>
        <motion.li
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="p-2 font-medium"
        >
          <strong>1/1 Specials (ERC721):</strong> Feeling special? You deserve
          it! Enjoy 4 FREE mints and 1 allowlist spot per 1/1 Special (ERC721)
          NFT.
        </motion.li>
        <motion.li
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="p-2 font-medium"
        >
          <strong>Non-unique Specials (ERC1155):</strong> Double the trouble,
          double the fun! You get 2 FREE mints and 1 allowlist spot per
          Non-unique Special (ERC1155) NFT.
        </motion.li>
        <motion.li
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="p-2 font-medium"
        >
          <strong>1/1 Universe Gangsters:</strong> Feeling legendary? You get 2
          FREE mints per 1/1 Universe Gangster NFT.
        </motion.li>
        <motion.li
          ref={ref}
          variants={fade}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          whileInView="animate"
          custom={1}
          className="p-2 font-medium"
        >
          <strong>FND Artwork:</strong> Owning FND artwork from the original
          collection? That scores you 1 allowlist spot for the Evolution mint!
        </motion.li>
      </ul>
      <motion.h2
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1}
        className="my-3 text-xl font-bold italic md:text-2xl"
      >
        Boss Move: 50 Bosses Get the Spotlight!
      </motion.h2>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className=" p-2 font-medium"
      >
        Holders of the OG 50 Bosses take center stage! Not only will your
        characters be immortalized in the lore and media of the Gangster
        Universe, some will even become central figures. Talk about boss-level
        bragging rights!
      </motion.p>
      <motion.h2
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1}
        className="my-3 text-xl font-bold italic md:text-2xl"
      >
        The Gang is Growing: Meet the New Crew!
      </motion.h2>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className=" p-2 font-medium"
      >
        The Evolution collection welcomes 3,300 fresh faces to the metaverse.
        Are you ready to join the ranks and build something revolutionary?
      </motion.p>
      <motion.p
        ref={ref}
        variants={fade}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        whileInView="animate"
        custom={1.5}
        className=" p-2 font-medium"
      >
        <strong className="flex gap-1">
          <motion.p
            ref={ref}
            variants={fade}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            whileInView="animate"
            custom={1.5}
            className="  font-medium"
          >
            Stay tuned for more details! The Gangster All Star: Evolution mint
            is coming up in
          </motion.p>
          <em>
            {" "}
            <CountDown />
          </em>
        </strong>
      </motion.p>
    </div>
  );
};

export default Evolution;
