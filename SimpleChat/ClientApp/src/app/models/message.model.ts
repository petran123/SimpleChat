import { Deserializable } from './deserializable.model';
import { User } from './user.model'

export class Message implements Deserializable {
    id: number;
    userName: string;
    messageBody: string;

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
