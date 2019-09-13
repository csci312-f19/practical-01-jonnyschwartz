/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 0 if 1 year old birthday is tomorrow', () => {
    expect(birthday.howOld(new Date('02 Jan 2017'))).toBe(0);
  });

  test('Returns 1 if 1 year old birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Returns 0 if birthday was yesterday', () => {
    expect(birthday.howOld(new Date('31 Dec 2017'))).toBe(0);
  });

  test('Returns 1 if 1 year old birthday was yesterday', () => {
    expect(birthday.howOld(new Date('31 Dec 2016'))).toBe(1);
  });

  test('Returns 0 if birthday is tomorrow', () => {
    expect(birthday.howOld(new Date('02 Jan 2018'))).toBe(0);
  });

  test('Returns -1 if birthday is same day next year', () => {
    expect(birthday.howOld(new Date('01 Jan 2019'))).toBe(-1);
  });

  test('Returns -1 if birthday is 1 year from tomorrow', () => {
    expect(birthday.howOld(new Date('02 Jan 2019'))).toBe(-1);
  });
});
