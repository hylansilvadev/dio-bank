# Frontend Dio Bank 

página de login criada para o projeto do Dio Bank


Criado por: [Hylan Silva](https://github.com/hylansilva)
### Tecnologias Usadas
 - TypeScript
 - React.Ts
 - Styled-Components
 - Jest
 - Chakra Ui
 - React Router


### Como rodar o projeto

1 - Clone o reposítório

2 - Instale as dependências

        npm install

3 - Execute o projeto

        npm start


#### Desafio: 1
[X] Crie os componentes referentes aos elementos na página inicial

 - Crie um componente para o header, com logo e o título da aplicação
 - Crie um componente para o botão, que aceite onClick como uma das props do componente
 - Refatore o componente Card para receber o formulário de login. Ao invés de chamar o elemento na página inicial, apenas o componente Card deve ser chamado.

[X] Crie uma função de Boas vindas

 - Ao clicar no botão, deve aparecer um alert com uma mensagem de boas vindas
 - Crie o teste unitário da função

#### Desafio: 2

[X] Incluir validação da senha no campo de login

 - Para logar, além do email faça a validação com a senha informada pelo usuário.
 - Durante a implementação, aplique o TDD e escreva os testes unitários para a nova validação

[X] Implemente um sistema de login com a Context API

 - Seguindo os exemplos demonstrados ao longo do curso, crie um estado global para realizar o login
 - Utilize o localStorage para armazenar os dados do usuário ao logar
 - Caso os dados do usuário existam no localStorage, a tela de login não deve ser exibida

[X] Crie uma página para exibir as informações do usuário

 - Crie uma página onde será exibido o nome, email
 - Esta página só poderá ser acessada caso a usuária esteja logada
 - Caso a usuária não esteja logada, deve ser mantida na página com a tela de login
 - Escreva os testes unitários para as funções criadas ou refatoradas.

[X] Fazer o deploy no Vercel e compartilhar o link da página