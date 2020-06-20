export abstract class Member{
    constructor(protected name: string, protected id: number){

    }
}

export interface ExtraInfo{
    email: string
}