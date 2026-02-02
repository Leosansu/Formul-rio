import { FormularioCadastro } from "./assets/components/FomularioCadastro/FormularioCadastro";
import { Typography, Container } from "@mui/material";
import "@fontsource/roboto";
import ValidaCpf from "./assets/components/validators/ValidaCpf";

export const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" mt={2} mb={2}>
        Formulário de cadastro
      </Typography>

      <FormularioCadastro aoEnviar={aoEnviar} />

    </Container>
  );
};

function aoEnviar(dados: any) {
  console.log(dados);
}