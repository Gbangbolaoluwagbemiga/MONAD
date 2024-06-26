import { createContext, useContext, useState } from "react";

const MonadContext = createContext();

function MonadProvider({ children }) {
  const [showLoader, setShowLoader] = useState(true);
  const [monadMode, setMonadMode] = useState(false);

  return (
    <MonadContext.Provider value={{ showLoader, setShowLoader, monadMode,setMonadMode }}>
      {children}
    </MonadContext.Provider>
  );
}

function UseMonad() {
  const context = useContext(MonadContext);
  if (context === undefined) {
    throw new Error(`context used outside the Wallet context scope`);
  }
  return context;
}

export { MonadProvider, UseMonad };
