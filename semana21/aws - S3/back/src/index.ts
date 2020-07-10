import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import { sendFile } from "./FileRouter";
import { AddressInfo } from "net";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/home", sendFile);
export default app;

const server = app.listen(process.env.PORT || 3001, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });