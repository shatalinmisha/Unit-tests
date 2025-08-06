// validateDate.ts

import { validateDate } from '../validate/validateDate';
import { errors } from '../utils/dictionarty';

describe('Date Validation', () => {
    it('должна возвращять значение valid, если дата в формате ДД.ММ.ГГГГ', () => {
        const result = validateDate('15.09.2025');
        expect(result.isValid).toBe(true);
        expect(result.message).toBe(errors.date.valid);
    });

    it('должен возвращать значение invalid, если для даты передаются недопустимые символы', () => {
        const result = validateDate('15.09.2025!');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(errors.date.invalidCharacters);
    });

    it('должен возвращать значение invalid, если в дате содержится буквенные значения.', () => {
        const result = validateDate('15.09.abc');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(errors.date.invalidCharacters);
    });

    it('должен возвращать значение invalid, если дата раньше текущей', () => {
        const result = validateDate('01.01.2020');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(errors.date.past);
    });

    it('должен возвращать значение invalid, если недопустимый формат даты (неправильный разделитель)', () => {
        const result = validateDate('15-09-2025');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(errors.date.pattern);
    });

    it('должен возвращать значение invalid, если недопустимый формат даты (пропущенный день, месяц или год)', () => {
        const result = validateDate('15.2025');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe(errors.date.pattern);
    });
});