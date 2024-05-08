export default class Holbertoncourse {
  constructor(name, lenght, students) {
    this.name = name;
    this.lenght = lenght;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(newLenght) {
    if (typeof newLenght === 'number') {
      this._lenght = newLenght;
    } else {
      throw new TypeError('Lenght must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (typeof newStudents === 'number') {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be a number');
    }
  }
}
