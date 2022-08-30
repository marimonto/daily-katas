/* function createPhoneNumber(numbers) {
    let result = ''
    numbers.forEach((number, i) => {
        if (i === 0) {
            result += '('
        }
        if (i === 6) {
            result += '-'
        }
        result += number
        if (i === 2) {
            result += ') '
        }
    })
    return result
}
 */


/* function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
} */

function createPhoneNumber(numbers) {
    return numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
}

/* function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";

    numbers.forEach(number => {
        format = format.replace('x', number);
    })
    return format;
} */

/* console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
 */

describe("Create Phone Number", () => {
    it("Fixed tests", () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890")
        expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111")
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890")
    });
});