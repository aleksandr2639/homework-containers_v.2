export default class ErrorRepository {
  constructor() {
    this.errors = new Map(([
      [54045, 'ReferenceError: name is not defined'],
      [56594, 'TypeError: undefined is not a function'],
      [54958, 'SyntaxError: Unexpected token ";"'],
    ]));
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    } else return this.errors.get(code);
  }
}
