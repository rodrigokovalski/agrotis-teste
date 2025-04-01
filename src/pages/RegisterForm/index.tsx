import { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";

import {
  Laboratorio,
  Propriedade,
  Register,
  RegistersContext,
} from "../../contexts/RegistersContext";
import { getProperties } from "../../api/properties";
import { getLaboratories } from "../../api/laboratories";
import Form from "../../components/Form/Form";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function RegisterForm() {
  const { setRegisters } = useContext(RegistersContext);
  const navigate = useNavigate();

  const { control, handleSubmit, setValue } = useForm<Register>({
    defaultValues: {
      nome: "",
      dataInicial: "",
      dataFinal: "",
      propriedades: [],
      laboratorio: { id: 0, nome: "" },
      observacoes: "",
    },
  });

  const [propriedades, setPropriedades] = useState<Propriedade[]>([]);
  const [laboratorios, setLaboratorios] = useState<Laboratorio[]>([]);

  useEffect(() => {
    async function fetchData() {
      const propriedadesData = await getProperties();
      const laboratoriosData = await getLaboratories();
      setPropriedades(propriedadesData);
      setLaboratorios(laboratoriosData);
    }
    fetchData();
  }, []);

  function handleCreateRegister(data: Register) {
    setRegisters((prev) => [...prev, { ...data, id: uuidv4() }]);

    navigate("/");
  }

  return (
    <Form onSubmit={handleSubmit(handleCreateRegister)}>
      <PageHeader>
        <div className="flex -space-between">
          <h1>Teste Front-End / Novo Cadastro</h1>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </div>
      </PageHeader>
      <div className="form-group">
        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <TextField label="Nome" fullWidth {...field} />
          )}
        />

        <div className="form-group">
          <Controller
            name="dataInicial"
            control={control}
            render={({ field }) => (
              <TextField type="date" fullWidth {...field} />
            )}
          />

          <Controller
            name="dataFinal"
            control={control}
            render={({ field }) => (
              <TextField type="date" fullWidth {...field} />
            )}
          />
        </div>
      </div>

      <div className="form-group">
        <FormControl fullWidth>
          <InputLabel id="properties-label">Propriedades</InputLabel>
          <Controller
            name="propriedades"
            control={control}
            render={({ field }) => (
              <Select
                labelId="properties-label"
                multiple
                value={field.value.map((p) => p.id)}
                onChange={(event) => {
                  const selectedIds = event.target.value as number[];
                  const selectedObjects = propriedades.filter((p) =>
                    selectedIds.includes(p.id)
                  );
                  field.onChange(selectedObjects);
                }}
                renderValue={(selected) =>
                  propriedades
                    .filter((p) => (selected as number[]).includes(p.id))
                    .map((p) => p.nome)
                    .join(", ")
                }
              >
                {propriedades.map((propriedade) => (
                  <MenuItem key={propriedade.id} value={propriedade.id}>
                    {propriedade.nome}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="laboratories-label">Laboratório</InputLabel>
          <Controller
            name="laboratorio"
            control={control}
            render={({ field }) => (
              <Select
                labelId="laboratories-label"
                value={field.value.id || ""}
                onChange={(event) => {
                  const selectedLab = laboratorios.find(
                    (lab) => lab.id === event.target.value
                  );
                  setValue("laboratorio", selectedLab || { id: 0, nome: "" });
                }}
              >
                {laboratorios.map((laboratorio) => (
                  <MenuItem value={laboratorio.id} key={laboratorio.id}>
                    {laboratorio.nome}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </div>

      <Controller
        name="observacoes"
        control={control}
        render={({ field }) => (
          <TextField label="Observações" fullWidth {...field} />
        )}
      />
    </Form>
  );
}
