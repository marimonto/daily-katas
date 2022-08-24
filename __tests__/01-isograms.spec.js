function isIsogram(str){
    if (str) {
        const wordArray = str.split('')
        const result = wordArray.reduce((prev, actual, index) => {
          const actualLowerCase = actual.toLowerCase();
            if (index === 1) {
                return prev.toLowerCase() === actualLowerCase ? false : [prev.toLowerCase(), actualLowerCase]
            }
            if (!prev) {
                return false
            }
            if (prev.length) {
                return prev.includes(actualLowerCase) ? false : [...prev, actual]
            }
        })
        return result === false ? false : true
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
