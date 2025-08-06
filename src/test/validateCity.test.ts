// validateCity.ts

import { validateCityName } from '../validate/validateCity';
import { errors } from '../utils/dictionarty';

describe('City Validation', () => {
  it('должно возвращать значение invalid, если название города пустое', () => {
    const result = validateCityName('');
    expect(result.isValid).toBe(false);
    expect(result.message).toBe(errors.city.required);
  });

  it('должен возвращать значение invalid, если название города содержит экранирующие символы', () => {
    const result = validateCityName('London<');
    expect(result.isValid).toBe(false);
    expect(result.message).toBe(errors.city.escape);
  });

  it('должно быть возвращено значение valid, если название города содержит восклицательный знак или дефисы', () => {
    const result = validateCityName('Saint-Louis-du-Ha! Ha!');
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(errors.city.valid);
  });

  it('должен возвращать значение valid, если название города содержит специальные символы', () => {
    const result = validateCityName('Ağrı');
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(errors.city.valid);
  });

  it('должно быть возвращено значение valid, если название города содержит одну букву', () => {
    const result = validateCityName('A');
    expect(result.isValid).toBe(true);
    expect(result.message).toBe(errors.city.valid);
  });

  it('должен возвращать значение invalid, если название города содержит недопустимые символы', () => {
    const result = validateCityName('City123');
    expect(result.isValid).toBe(false);
    expect(result.message).toBe(errors.city.invalid);
  });
});