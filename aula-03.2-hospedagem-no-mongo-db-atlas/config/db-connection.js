// Importando o mongoose
import mongoose from "mongoose";

// Usuário e senha do banco de dados
const dbUser = "TesteDDadusYK";
const dbPassword = "HC2p5d13YXILJ3Cy";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://TesteDDadusYK:HC2p5d13YXILJ3Cy@cluster0.rco9i3k.mongodb.net/api-thegames?appName=Cluster0`,
  );
};

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB.");
});
connection.on("open", () => {
  console.log("Conectado ao mongoDB com sucesso!");
});

connect();
export default mongoose;
