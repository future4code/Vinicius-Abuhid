import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

export class GenerateToken{
    private static expiresIn: number = 120
    
    generateToken = (input: AuthenticationData): string =>{
        const token = jwt.sign({
            // payload
            id: input.id
        },
            // chave
        process.env.JWT_KEY as string,
            // opções
        {
            expiresIn: GenerateToken.expiresIn
        })
        return token
    }

    verifyToken = (token: string): AuthenticationData=> {
        const payload = jwt.verify(token,'process.env.JWT_KEY as string') as any
        const result = {id:payload.id}
        return result
    }
}

export interface AuthenticationData {
    id: string;
}