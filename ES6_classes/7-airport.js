export default class Airport {
    constructor(name, code) {
        if (typeof name === 'string') {
            this.name = name;
        }
        else {
            throw new TypeError('name must be a string');
        }

        if (typeof code ==='string') {
            this.code = code;
        }
        else {
            throw new TypeError('code must be a string');
        }
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    displayFullAirport() {
        return `${this.name} (${this.code})`;
    }
}
