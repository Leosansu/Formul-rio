<form>
  <label htmlFor="nome">Nome:</label>
  <input type="text" id="nome" />
</form>

A tag <form> é utilizada para coletar dados do usuário e agrupa campos onde esses dados serão coletados

Atributos: 
.action, aponta o destino dos dados cletados.
.method, define se os dados enviados serão POST,GET


<label> é como uma etiqueta que explica o que cada campo significa.

Atributos:
.htmlFor, conecta o texto do label ao input

<input> é onde o usuário insere dados.
Atributos: 
.type: define o tipo de dado inserido ,password, esconde os dados digitados. checkbox, é uma caixinha que pode ser marcada e desmarcada. radio: É um botão circular que só permite uma escolha por grupo.

.name: dá um nome interno ao campo, usado quando os dados são enviados.

.value: valor inicial do campo.

.placeholder: texto de exemplo dentro do campo (ex.: “Digite seu nome”).

<form action="/enviar">
            <label >Nome:<input type='text' /></label>
            <label>Sobrenome:<input type='text'/></label>
            <label>CBF: <input type='text' /> </label>  
            <label >Promoções:<input type='checkbox' /></label>     
            <label >Novidades:<input type='checkbox' /></label> 
            <Button type="submit"variant="contained" color="primary">Cadastrar</Button>
             
              
</form>
        

<TexField> é um componente do material ui utilizado para reunir campos de input

<TextField
             onChange={(event) => {
                nome = event.target.value; console.log(nome); }}>

oneChange é uma função chamada de função callback, que é uma função que recebe outra função dentro, isso permite personalizar o comportamento