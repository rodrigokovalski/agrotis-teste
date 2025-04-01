import { useContext } from "react";
import { RegistersContext } from "../../contexts/RegistersContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

export default function Registers() {
  const { registers } = useContext(RegistersContext);
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/register");
  }
  return (
    <div>
      <button onClick={handleButtonClick}>+ Adicionar</button>
      <TableContainer sx={{ padding: 1 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Data Inicial</TableCell>
              <TableCell>Data Final</TableCell>
              <TableCell>Propriedades</TableCell>
              <TableCell>Laboratórios</TableCell>
              <TableCell>Observações</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registers.map((register) => (
              <TableRow key={register.id}>
                <TableCell>{register.id}</TableCell>
                <TableCell>{register.nome}</TableCell>
                <TableCell>{register.dataInicial}</TableCell>
                <TableCell>{register.dataFinal}</TableCell>
                <TableCell>
                  Propriedades ({register.propriedades.length})
                </TableCell>
                <TableCell>{register.laboratorio.nome}</TableCell>
                <TableCell>{register.observacoes}</TableCell>
                <TableCell>
                  <IconButton aria-label="editar">
                    <MoreVertIcon></MoreVertIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
