function rgb(r, g, b) {

    const firstNumber = getFirstPart(r)
    const secondNumber = getSecondPart(r)
    const thirdNumber = getFirstPart(g)
    const fourthNumber = getSecondPart(g)
    const fifthNumber = getFirstPart(b)
    const sixthNumber = getSecondPart(b)

    return firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber + sixthNumber
}

function getFirstPart(number) {
    const validation = validationNumber(number)
    return validation || Math.floor(number / 16).toString(16).toUpperCase()
}

function getSecondPart(number) {
    const validation = validationNumber(number)
    return validation || Math.floor(number % 16).toString(16).toUpperCase()
}

function validationNumber(number) {
    if (number <= 0) {
        return '0'
    }
    if (number >= 255) {
        return 'F'
    }
    return;
}

/* function rgb(r, g, b) {
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
    if (d < 0) { return "00"; }
    if (d > 255) { return "FF"; }
    return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
} */

/* console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47)) */

describe("Tests", () => {
    it("Basic Tests", () => {
        expect(rgb(0, 0, 0)).toBe('000000')
        expect(rgb(0, 0, -20)).toBe('000000')
        expect(rgb(300, 255, 255)).toBe('FFFFFF')
        expect(rgb(173, 255, 47)).toBe('ADFF2F')
    });
});