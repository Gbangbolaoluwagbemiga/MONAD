import { useEffect, useState } from "react";
import "../loader.css";
import { UseMonad } from "../context/UseMonad";

const Intro = () => {
  const { showLoader, setShowLoader } = UseMonad();
  const [loadingText, setLoadingText] = useState("");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const text = "MONAD";
    let index = 0;

    const interval = setInterval(() => {
      if (index === text.length) {
        clearInterval(interval);
        setShowImage(true);
        return;
      }

      setLoadingText(text.substring(0, index + 1));
      index++;
    }, 900);

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [setShowLoader]);

  return (
    <div
      className={`loader-container m-auto w-96 gap-6 px-8 text-4xl md:text-8xl ${
        showLoader ? "" : "hidden"
      }`}
    >
      <h1 className="font-extrabold text-[#5246A3]">{loadingText}</h1>
      {showImage && (
        <img
          src="https://static.chainbroker.io/mediafiles/projects/monad/monad.jpeg"
          alt="Loader Image"
          className=" spinner ms-[-0.5rem] h-8 w-8 rounded-full md:h-16 md:w-16"
        />
      )}
    </div>
  );
};

export default Intro;
