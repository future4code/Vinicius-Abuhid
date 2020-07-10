import Student from "./student";
import Instructor from "./instructor";
import Class from './class'
import FileManager from './fileManager'
import 'moment/locale/pt-br';

class MainTaskManager{
    
    createStudent(name: string, id: number, email: string, birthDate: string, hobbies: string){
        const newStudent = new Student(name, id, email, birthDate, hobbies)
        return newStudent
    }

    getStudentAge(student: Student){
        const studentAge = student.getStudentAge()
        return studentAge
    }

    createInstructor(name: string, id: number, email: string, specialities: string){
        const newInstructor = new Instructor(name, id, email, specialities)
        return newInstructor
    }

    createClass(name: string, id: number, startDate: string, endDate: string, currentUnity: number){
        const newClass = new Class(name, id, startDate, endDate, currentUnity)
        return newClass
    }

    setStudentToClass(mission: Class, student: Student){
        mission.setStudent(student)
        return mission
    }

    setInstructorToClass(mission: Class, instructor: Instructor){
        mission.setInstructor(instructor)
        return mission
    }

    saveData(path: string, content: Student | Instructor | Class){
        const myFileManager = new FileManager(path)
        myFileManager.saveData(content)
    }

    getData(path: string){
        const myFileManager = new FileManager(path)
        const myData = myFileManager.getData()
        return myData
    }

}

const mainTaskManager = new MainTaskManager
const studentCreator = mainTaskManager.createStudent('Vinicius', 1, 'vinicius@email', 
'23/06/1992', 'comer, dormir')
const myAge = mainTaskManager.getStudentAge(studentCreator)
const instructorCreator = mainTaskManager.createInstructor('Joao', 3, 'sostenes@email',
'React, Redux, Testes')
const classCreator = mainTaskManager.createClass('bouman', 7, '26/10/2019', '20/05/2020', 6)
const studentSetter = mainTaskManager.setStudentToClass(classCreator, studentCreator)
const instructorSetter = mainTaskManager.setInstructorToClass(classCreator, instructorCreator)
const saveStudentData = mainTaskManager.saveData('../students.json', studentCreator)
const saveInstructorData =  mainTaskManager.saveData('../teachers.json', instructorCreator)
const saveClassData = mainTaskManager.saveData('../missions.json', classCreator )
const dataFinder = mainTaskManager.getData('../missions.json')
