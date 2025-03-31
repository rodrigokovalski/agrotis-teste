import { Register } from "../../contexts/RegistersContext";

const DataExample: Register[] = [
  {
    id: 1,
    nome: "Jon doe",
    dataInicial: "2022-02-02T17:41:44Z",
    dataFinal: "2022-02-02T17:41:44Z",
    propriedades: [
      {
        id: 1,
        nome: "Fazenda Agrotis",
      },
    ],
    laboratorio: {
      id: 3,
      nome: "Osborne Agro",
    },
    observacoes: "Observacao exemplo de teste",
  },
  {
    id: 2,
    nome: "Jon doe",
    dataInicial: "2022-02-02T17:41:44Z",
    dataFinal: "2022-02-02T17:41:44Z",
    propriedades: [
      {
        id: 1,
        nome: "Fazenda Agrotis",
      },
    ],
    laboratorio: {
      id: 3,
      nome: "Osborne Agro",
    },
    observacoes: "Observacao exemplo de teste",
  },
];

export default function Registers() {
  return (
    <div>
      {DataExample.map((data) => (
        <div key={data.id}>{data.nome}</div>
      ))}
    </div>
  );
}
