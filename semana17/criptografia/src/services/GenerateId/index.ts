import { v4 } from "uuid"

const id = v4();

export class GenerateId {
    public generateId(): string {
        return v4()
    }
}