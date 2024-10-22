import { createContext, useState } from "react";

export const KATTContext = createContext("");
export const KATTProvider = ({ children }) => {
  const [lista, setLista] = useState([
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    false,
  ]);
  function katt(index) {
    const segedLista = [...lista];
    if (segedLista[index]) {
      segedLista[index] = false;
    } else {
      segedLista[index] = true;
    }
    setLista(segedLista);
  }
  return (
    <KATTContext.Provider value={{ lista, katt }}>
      {children}
    </KATTContext.Provider>
  );
};
