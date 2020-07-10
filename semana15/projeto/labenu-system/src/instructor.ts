import {Member, ExtraInfo} from './member'

export default class Instructor extends Member implements ExtraInfo{
    email:string

    private specialties: string[]

    constructor(protected name: string, protected id: number, email: string,
         specialties: string){
            super(name, id)
            this.email = email
            this.specialties = specialties.split(',')
    }
    
}