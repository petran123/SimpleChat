export class Message {
    constructor(id, userName, messageBody) {
        this.id = id;
        this.userName = userName;
        this.messageBody = messageBody;
    }
    deserialize(input) {
        // make sure this works as intented
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