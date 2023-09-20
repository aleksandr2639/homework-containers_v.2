import ErrorRepository from '../Errors';

test.each([
  [54045, 'ReferenceError: name is not defined'],
  [56594, 'TypeError: undefined is not a function'],
  [54958, 'SyntaxError: Unexpected token ";"'],
])('text error received', (code, expected) => {
  const error = new ErrorRepository();
  expect(error.translate(code)).toEqual(expected);
});

test('error undefined', () => {
  const error = new ErrorRepository();
  expect(() => error.translate(111111)).toThrow('Unknown error');
});
