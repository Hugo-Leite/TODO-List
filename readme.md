# Lista de tarefas

O ToDo List é uma aplicação simples e intuitiva desenvolvida para ajudar você a gerenciar suas
tarefas diárias de forma eficiente. Com uma interface amigável e recursos essenciais, esta aplicação
permite que você adicione, edite, remova e marque tarefas como concluídas, mantendo você organizado
e produtivo.

## Métodos

-   Adicionar Lista de tarefas: Adicione novas listas com tarefas detalhadas.
-   Editar Lista e tarefas: Atualize as informações de uma lista existente.
-   Excluir lista e tarefas: Remova tarefas que não são mais necessárias.
-   Marcar como Concluída: Marque tarefas como concluídas para acompanhar seu progresso.

## Stack utilizada

![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&nbsp;
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![EXPRESS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)&nbsp;
![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Instalação

1. Clone o repositório:

```bash
  git clone https://github.com/seu-usuario/todo-list-app.git
```

2. Instale as dependências:

```bash
  npm install
```

## Configuração do Banco de Dados

Para conectar sua aplicação ao MongoDB, siga os seguintes passos:

1. Certifique-se de que o MongoDB está instalado e em execução na sua máquina.
2. No caminho `config/database.js`, você encontrará o seguinte código para conexão:

```javascript
const mongoose = require("mongoose"); // Incluindo o mogoose na minha aplicação

async function main() {
    // Conectando a aplicação no banco de dados
    await mongoose.connect("mongodb://localhost/todo-list");
}

main()
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));
```

3. Este código utiliza o Mongoose para conectar-se ao banco de dados MongoDB localizado no endereço
   mongodb://localhost/todo-list.

4. Para rodar o código de conexão, execute o seguinte comando no terminal:

```javascript
node config\database.js
```

5. Se a conexão for bem-sucedida, você verá a mensagem Conectado ao MongoDB no console. Caso ocorra
   algum erro, ele será exibido no console.

## Iniciar aplicação

Para rodar a aplicação, rode o seguinte comando

```bash
  npm run start
```
