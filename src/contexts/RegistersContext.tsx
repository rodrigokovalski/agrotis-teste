import { ReactNode, useState, createContext } from "react";

export type Propriedade = {
  id: number;
  nome: string;
};

export type Laboratorio = {
  id: number;
  nome: string;
};

export interface Register {
  id: string;
  nome: string;
  dataInicial: string;
  dataFinal: string;
  propriedades: Propriedade[];
  laboratorio: Laboratorio;
  observacoes: string;
}

interface RegistersContextType {
  registers: Register[];
  setRegisters: React.Dispatch<React.SetStateAction<Register[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const RegistersContext = createContext({} as RegistersContextType);

interface RegistersProviderProps {
  children: ReactNode;
}

export function RegistersProvider({ children }: RegistersProviderProps) {
  const [registers, setRegisters] = useState<Register[]>([]);

  return (
    <RegistersContext.Provider
      value={{
        registers,
        setRegisters,
      }}
    >
      {children}
    </RegistersContext.Provider>
  );
}
