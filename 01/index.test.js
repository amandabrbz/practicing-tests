const Multiple = require("./Multiple");

describe("check if number is multiple of 3 or 5", () => {

	test("if the number is multiple of 3", () => {
		const expectedValue = true;
		const multiple = 3;
		const checkNumber = new Multiple();

		const result = checkNumber.isMultiple(3, multiple);

		expect(expectedValue).toEqual(result);
	});

	test("if the number is multiple of 5", () => {
		const expectedValue = true;
		const multiple = 5;
		const checkNumber = new Multiple();

		const result = checkNumber.isMultiple(10, multiple);

		expect(expectedValue).toEqual(result);
	});

	test("if the number is multiple of 7", () => {
		const expectedValue = true;
		const multiple = 7;
		const checkNumber = new Multiple();

		const result = checkNumber.isMultiple(7, multiple);

		expect(expectedValue).toEqual(result);
	});

	test("if the number is multiple of one of multiples numbers", () => {
		const expectedValue = true;
		const multiples = [3, 5];
		const checkNumber = new Multiple();

		const result = checkNumber.isMultipleOfNumber(5, multiples);

		expect(expectedValue).toEqual(result);
	});

	test("if the number is multiple of all multiples numbers", () => {
		const expectedValue = true;
		const multiples = [3, 5];
		const checkNumber = new Multiple();

		const result = checkNumber.isMultipleOfAllMultiples(15, multiples);

		expect(expectedValue).toEqual(result);
	});

	test("if the sum of numbers multiple of 3 or 5 below 10 is 23", () => {
		const expectedValue = 23;
		const multiples = [3, 5];
		const checkNumber = new Multiple();

		const result = checkNumber.sumOfMultipleOfNumber(10, multiples);

		expect(expectedValue).toEqual(result);
	});

	test("if the sum of numbers multiple of 3 and 5 below 10 is 15", () => {
		const expectedValue = 15;
		const multiples = [3, 5];
		const checkNumber = new Multiple();

		const result = checkNumber.sumOfMultipleOfMultiples(16, multiples);

		expect(expectedValue).toEqual(result);
	});

	test("sum all natural numbers multiple of (3 or 5) and 7", () => {
		const expectedValue = 56;
		const multiples = [3, 5];
		const multiples2 = [7];
		const checkNumber = new Multiple();

		const result = checkNumber.sumOfMultipleOfMultiplesAndMultiple(36, multiples, multiples2);

		expect(expectedValue).toEqual(result);
	})
	
});
