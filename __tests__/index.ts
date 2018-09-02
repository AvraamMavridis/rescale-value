import normalizeValue from '../src';

it('Should normalize a value correctly', () => {
  const array = [1, 2, 3, 4, 5];
  expect(normalizeValue(5, array)).toBe(0.5);
  expect(normalizeValue(3, array)).toBe(0);
  expect(normalizeValue(1, array)).toBe(-0.5);
});

it('Should throw an Error if array is undefined', () => {
  const norm = () => normalizeValue(5);
  expect(norm).toThrowError('The 2nd parameter should be an Array');
});

it('Should throw an Error if array is empty', () => {
  const norm = () => normalizeValue(5, []);
  expect(norm).toThrowError('The 2nd parameter should not be an empty Array');
});

it('Should throw an Error if the value is not a number', () => {
  const norm = () => normalizeValue('test', []);
  expect(norm).toThrowError('The 1st parameter should be a number')
});