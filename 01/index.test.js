const Multiple = require("./Multiple");

describe("check if number is multiple of 3 or 5", () => {
	test("if the number is multiple of 3", () => {
		const expectedValue = true;
		const multiple = 3
		const checkNumber = new Multiple();

		const result = checkNumber.checkMultiple(3, multiple);

		expect(expectedValue).toEqual(result);
	});

	test("if the number is multiple of 5", () => {
		const expectedValue = true;
		const multiple = 5
		const checkNumber = new Multiple();

		const result = checkNumber.checkMultiple(10, multiple);

		expect(expectedValue).toEqual(result);
	});

	test("if the number is multiple of 7", () => {
		const expectedValue = true;
		const multiple = 7
		const checkNumber = new Multiple();

		const result = checkNumber.checkMultiple(7, multiple);

		expect(expectedValue).toEqual(result);
	});

	test("if the sum of numbers multiple of 3 or 5 below 10 is 23", () => {
		const expectedValue = 23;
		const checkNumber = new Multiple();

		const result = checkNumber.sum(10, [3, 5]);

		expect(expectedValue).toEqual(result);
	});

});
