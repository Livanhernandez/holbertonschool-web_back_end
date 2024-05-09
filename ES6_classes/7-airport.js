export default class Airport {
    constructor(name, code) {
        if (typeof name === 'string') {
            this.name = name;
        }
        else {
            throw new Error('name must be a string');
        }

        if (typeof code ==='string') {
            this.code = code;
        }
        else {
            throw new Error('code must be a string');
        }
    }
    
    get [Symbol.toStringTag]() {
        return `${this.code}`;
    }
}
