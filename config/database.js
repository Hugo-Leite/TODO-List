const mongoose = require("mongoose"); // Incluindo o mogoose na minha aplicação

async function main() {
    // Conectando a aplicação no banco de dados
    await mongoose.connect("mongodb://localhost/todo-list");
}

main()
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));
