export class User {
    constructor(id, userName, isActive) {
        this.id = id;
        this.userName = userName;
        this.isActive = isActive;
    }
    deserialize(input) {
        return Object.assign(this, input);
    }
}
//# sourceMappingURL=user.model.js.map