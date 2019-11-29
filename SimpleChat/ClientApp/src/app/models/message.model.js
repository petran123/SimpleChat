export class Message {
    //constructor(id: number, userName: string, messageBody: string) {
    //    this.id = id;
    //    this.userName = userName;
    //    this.messageBody = messageBody;
    //}
    deserialize(input) {
        return Object.assign(this, input);
    }
    getUserName() {
        return this.userName;
    }
    getMessage() {
        return this.messageBody;
    }
}
//# sourceMappingURL=message.model.js.map