function countSheeps(arrayOfSheep) {
    arrayFiltered = arrayOfSheep.filter(sheep => !!sheep)
    return arrayFiltered.length
}

//Refactor solution
/* function countSheeps(arr) {
    return arr.filter(Boolean).length;
} */

describe("countSheeps", () => {
    it("countSheeps test", () => {
        var array1 = [true, true, true, false,
            true, true, true, true,
            true, false, true, false,
            true, false, false, true,
            true, true, true, true,
            false, false, true, true];

        expect(countSheeps(array1)).toBe(17);

    });
});

