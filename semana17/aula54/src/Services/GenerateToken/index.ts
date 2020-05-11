import * as jwt from 'jsonwebtoken'

export class GenerateToken{
    private static expiresIn: number = 120
    
    generateToken = (input: AuthenticationData): string =>{
        const token = jwt.sign({
            id: input.id
        },
        'process.env.JWT_KEY as string,',
        {
            expiresIn: GenerateToken.expiresIn
        })
        return token
    }
}

export interface AuthenticationData {
    id: string;
}