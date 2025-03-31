import {
  ReactNode,
  useEffect,
  useState,
  useCallback,
  createContext,
} from "react";

export type Propriedade = {
  id: number;
  nome: string;
};

export interface Register {
  id: number;
  nome: string;
  dataInicial: string;
  dataFinal: string;
  propriedades: Propriedade[];
  laboratorio: {
    id: number;
    nome: string;
  };
  observacoes: string;
}

interface RegistersContextType {
  registers: Register[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const RegistersContext = createContext({} as RegistersContextType);

interface RegistersProviderProps {
  children: ReactNode;
}

export function RegistersProvider({ children }: RegistersProviderProps) {
  const [registers, setRegisters] = useState<Register[]>([]);

  const fetchRegisters = useCallback(async () => {
    // Pegar dados do localStorage
    setRegisters([]);
  }, []);

  useEffect(() => {
    fetchRegisters();
  }, [fetchRegisters]);

  return (
    <RegistersContext.Provider
      value={{
        registers,
      }}
    >
      {children}
    </RegistersContext.Provider>
  );
}
