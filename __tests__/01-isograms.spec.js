const isIsogram = (str) => {
    if (str) {
        const wordArray = str.split('')
        const test = wordArray.reduce((prev, actual, index) => {
            if (index === 1) {
                return prev.toLowerCase() === actual.toLowerCase() ? false : [prev.toLowerCase(), actual.toLowerCase()]
            }
            if (!prev) {
                return false
            }
            if (prev.length) {
                return prev.includes(actual.toLowerCase()) ? false : [...prev, actual]
            }
        })
        return test === false ? false : true
    }
    return true

}

describe("isograms", () => {
    test("isograms", () => {
        expect(isIsogram("Dermatoglyphics")).toBeTruthy();
        expect(isIsogram("isogram")).toBeTruthy();
        expect(isIsogram("aba")).toBeFalsy();
        expect(isIsogram("moOse")).toBeFalsy();
        expect(isIsogram("isIsogram")).toBeFalsy();
        expect(isIsogram("isIsogram")).toBeFalsy();
        expect(isIsogram("")).toBeTruthy();
    });
});
