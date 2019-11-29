import { Deserializable } from './deserializable.model';
import { User } from './user.model'

export class Message implements Deserializable {
    id: number;
    userName: string;
    messageBody: string;

    //constructor(id: number, userName: string, messageBody: string) {
    //    this.id = id;
    //    this.userName = userName;
    //    this.messageBody = messageBody;
    //}

    deserialize(input: any): this {
      return Object.assign(this, input);
    }

    getUserName() {
        return this.userName;
    }

    getMessage() {
        return this.messageBody;
    }
}
