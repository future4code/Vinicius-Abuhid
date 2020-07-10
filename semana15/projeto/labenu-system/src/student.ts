import {Member, ExtraInfo} from './member'
import * as moment from 'moment';
import 'moment/locale/pt-br';

export default class Student extends Member implements ExtraInfo{
    email:string

    private birthDate: moment.Moment

    private hobbies: string[]

    constructor(protected name: string, protected id: number, email: string, 
        birthDate: string, hobbies: string){
            super(name, id)
            this.email = email
            this.hobbies = hobbies.split(',')
            this.birthDate = moment(`${birthDate}`, 'DD/MM/YYYY')
    }

    getStudentAge(){
        const studentAge = moment().diff(this.birthDate, "years")
        return studentAge
    }
}