import { describe, expect, it } from "vitest";
import { Rules, ValidatePassword } from "../src/passwordValidator";

describe('PasswordValidator', () => {
    it('should reject passwords shorter than 8 characters', () => {

        const fail: boolean = ValidatePassword('azerty', [Rules.checkPasswordLengthMin]);
        const success: boolean = ValidatePassword('azertyui', [Rules.checkPasswordLengthMin]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });

    it('should reject passwords without one uppercase letter', () => {

        const fail: boolean = ValidatePassword('azerty', [Rules.checkUppercaseLetter]);
        const success: boolean = ValidatePassword('aZerty', [Rules.checkUppercaseLetter]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });

    it('should reject passwords without one lowercase letter', () => {

        const fail: boolean = ValidatePassword('AZERTY', [Rules.checkLowercaseLetter]);
        const success: boolean = ValidatePassword('AZErTY', [Rules.checkLowercaseLetter]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });

    it('should reject passwords without one number', () => {

        const fail: boolean = ValidatePassword('azerty', [Rules.checkNumber]);
        const success: boolean = ValidatePassword('azerty1', [Rules.checkNumber]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });

    it('should reject passwords without one special character', () => {

        const fail: boolean = ValidatePassword('azerty', [Rules.checkSpecialCharacter]);
        const success: boolean = ValidatePassword('azerty!', [Rules.checkSpecialCharacter]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });

    it('should reject passwords with space', () => {

        const fail: boolean = ValidatePassword('azer ty', [Rules.checkSpace]);
        const success: boolean = ValidatePassword('azerty', [Rules.checkSpace]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });

    it('should reject passwords with more than 3 consecutive identical characters', () => {

        const fail: boolean = ValidatePassword('aaaa', [Rules.checkConsecutiveCharacter]);
        const success: boolean = ValidatePassword('aaa', [Rules.checkConsecutiveCharacter]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });

    it('should reject passwords with less than 8 characters and more than 20 characters', () => {

        const fail: boolean = ValidatePassword('aaaaaaaaaaaaaaaaaaaaa', [Rules.checkPasswordLengthRange]);
        const success: boolean = ValidatePassword('aaaaaaaaaa', [Rules.checkPasswordLengthRange]);

        expect(fail).toBe(false);
        expect(success).toBe(true);
    });
});
