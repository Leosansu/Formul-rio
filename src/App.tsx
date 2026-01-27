import { FormularioCadastro } from "./assets/components/FomularioCadastro/FormularioCadastro";
import { Typography, Container } from "@mui/material";
import "@fontsource/roboto";

export const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" mt={2} mb={2}>
        Formulário de cadastro
      </Typography>

      <FormularioCadastro
        aoEnviar={(dados) => {
          console.log("Dados recebidos:", dados);
          // exemplo: enviar para API
          // fetch("/api/cadastro", { method: "POST", body: JSON.stringify(dados) })
        }}
      />
    </Container>
  );
};

