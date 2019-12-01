export class Message {
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