import {Member} from './member'
import Student from './student'
import Instructor from './instructor'
import * as moment from 'moment';
import 'moment/locale/pt-br';

export default class Class extends Member{
    private studentsList: Student[]

    private instructorsList: Instructor[]

    private startDate: moment.Moment
    
    private endDate: moment.Moment

    constructor(protected name: string, protected id: number, startDate: string,
        endDate: string, private currentUnity: number){
            super(name, id)
            this.studentsList= []
            this.instructorsList = []
            this.startDate = moment(`${startDate}`, 'DD/MM/YYYY')
            this.endDate = moment(`${endDate}`, 'DD/MM/YYYY')
    }

    adClass(){
    }

    setInstructor(instructor: Instructor){
        this.instructorsList = [...this.instructorsList, instructor]
    }

    setStudent(student: Student){
        this.studentsList = [...this.studentsList, student]
    }
}