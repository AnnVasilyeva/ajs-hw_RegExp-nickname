import Validator from '../index';

test('validateUsername normal', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('Bor89-_is');
  const expected = true;
  expect(received).toBe(expected);
});

test('validateUsername start-num', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('67Boris');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername end-num', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('Boris85');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername star/end', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('_Boris-');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername num count', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('Bori6779s');
  const expected = false;
  expect(received).toBe(expected);
});
