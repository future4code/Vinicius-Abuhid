import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { signUp } from './Functions/SignupFunction/index'
import { login } from './Functions/LoginFunction/index'
import { searchUserById } from './Functions/SearchFunction/index'
import { deleteUser } from "./Functions/DeleteFunction";
import { getUserById } from "./Functions/getUserFunction";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.post('/signup', signUp)
app.put('/login', login)
app.get('/user/profile', searchUserById)
app.delete('user/:id', deleteUser)
app.get('user/:id', getUserById)