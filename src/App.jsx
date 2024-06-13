import Arts from "./Evilord/Arts";
import Evolution from "./Evilord/EvilHead";
import Footer from "./Evilord/Footer";
import Timer from "./Evilord/Timer";
import Header from "./component/Header";
import Intro from "./component/Intro";
import Main from "./component/Main";
import Team from "./component/Team";
import { UseMonad } from "./context/UseMonad";

function App() {
  const { showLoader } = UseMonad();

  return (
    <div className="  ">
      <Intro />

      {!showLoader && (
        <>
          <Header />
          <Main />
          <Team />
        </>
      )}
    </div>

    // EvilOrd
    // <div className="  ">

    //   {!showLoader && (
    //     <div className="evilOrd">
    //       {" "}
    //       <Timer />
    //       <Evolution />
    //       <Arts />
    //       <Footer />
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
