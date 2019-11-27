import { Deserializable } from './deserializable.model';

export class User implements Deserializable {

    id: number;
    userName: string;
    isActive: boolean;

    constructor(id: number, userName: string, isActive: boolean) {
        this.id = id;
        this.userName = userName;
        this.isActive = isActive;
    }

    
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
