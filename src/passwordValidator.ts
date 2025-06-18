const regexCheckUpper = /[A-Z]/;
const regexCheckLower = /[a-z]/;
const regexCheckNumber = /[0-9]/;
const regexCheckSpecialCharacter = /\W/;
const regexCheckSpace = /\s/;
const regexCheckConsecutiveCharacter = /.{4}/;

type Rule = (password: string) => boolean;

export const Rules = {
    checkPasswordLengthMin: (password: string) => password.length >= 8,
    checkUppercaseLetter: (password: string) => regexCheckUpper.test(password),
    checkLowercaseLetter: (password: string) => regexCheckLower.test(password),
    checkNumber: (password: string) => regexCheckNumber.test(password),
    checkSpecialCharacter: (password: string) => regexCheckSpecialCharacter.test(password),
    checkSpace: (password: string) => !regexCheckSpace.test(password),
    checkConsecutiveCharacter: (password: string) => !regexCheckConsecutiveCharacter.test(password),
    checkPasswordLengthRange: (password: string) => password.length >=8 && password.length <= 20,
}

export function ValidatePassword(password: string, rules: Rule[]) {
    return rules.every(rule => rule(password));
}