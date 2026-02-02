

/**
 * FormularioCadastro
 *
 * Componente de formulário para cadastro com campos Nome, Sobrenome, CPF,
 * checkboxes de Promoções e Novidades e botão de envio.
 * 
 * O atributo action="/enviar" do elemento <form> indica a URL para a qual os
 * dados do formulário serão enviados quando o formulário for submetido.
 * "/enviar" é um caminho relativo ao host atual (por exemplo, https://exemplo.com/enviar).
 * Se não for especificado o atributo method, o método HTTP padrão é GET; para enviar
 * dados em corpo (por exemplo, via POST) deve-se definir method="post" e garantir
 * que exista um endpoint no servidor que trate a rota "/enviar".
 *

 */
import ValidaCpf from "../validators/ValidaCpf";
import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

// 1) Props: se você quer que onSubmit NÃO seja obrigatório, deixe com "?"

export type DadosCadastro = {
  nome: string;
  sobrenome: string;
  cpf: string;
  promocoes: boolean;
  novidades: boolean;
};

type FormularioCadastroProps = {
  aoEnviar: (dados: DadosCadastro) => void;
};

export function FormularioCadastro({ aoEnviar }: FormularioCadastroProps): React.ReactElement {

  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [promocoes, setPromocoes] = useState<boolean>(true);
  const [novidades, setNovidades] = useState<boolean>(false);
  const [erro , setErro] = useState({cpf: { valido: true, texto: "" }});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dados: DadosCadastro = { nome, sobrenome, cpf, novidades, promocoes };
    aoEnviar(dados);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={nome}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="dense"
        fullWidth
        error ={!erro.cpf.valido}
        helperText={erro.cpf.texto}
       onBlur={(event) => {
  const ehValido = ValidaCpf(event.target.value);
  setErro({ cpf: ehValido });
}}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
            
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
