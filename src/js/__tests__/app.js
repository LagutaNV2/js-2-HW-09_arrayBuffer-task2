import ArrayBufferConverter from '../app';
import { getBuffer } from '../app';

let converter;

beforeEach(() => {
  converter = new ArrayBufferConverter();
});

test('load() загружает данные без ошибок', () => {
  const buffer = getBuffer();
  expect(() => converter.load(buffer)).not.toThrow();
});

test('toString() возвращает корректную строку', () => {
  const buffer = getBuffer();
  converter.load(buffer);
  const result = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(result).toBe(expected);
});

test('toString() выбрасывает ошибку, если buffer не загружен', () => {
  expect(() => converter.toString()).toThrow('Buffer не загружен.');
});
