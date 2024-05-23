import Header from "./component/Header";
import Intro from "./component/Intro";
import Main from "./component/Main";
import Team from "./component/Team";
import { UseMonad } from "./context/UseMonad";

function App() {
  const { showLoader } = UseMonad();

  return (
    <div
      //  style={{ background: "hsl(270, 80%, 70%)" }}
      className=""
    >
      <Intro />

      {!showLoader && (
        <>
          <Header />
          <Main />
          <Team />
        </>
      )}
    </div>
  );
}

export default App;
