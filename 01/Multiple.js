class Multiple {
	isMultiple(value, multiple) {
		return value % multiple === 0;
	}

	isMultipleOfNumber(value, multiples) {
		return multiples.some((multiple) => value % multiple === 0);
	}

	isMultipleOfAllMultiples(value, multiples) {
		return multiples.every((multiple) => value % multiple === 0);
	}

	sumOfMultipleOfNumber(limit, multiples) {
		let multiple = 0;

		for (let value = 0; value < limit; value++) {
			if (this.isMultipleOfNumber(value, multiples)) {
				multiple += value;
			}
		}

		return multiple;
	}

	sumOfMultipleOfMultiples(limit, multiples) {
		let multiple = 0;

		for (let value = 0; value < limit; value++) {
			if (this.isMultipleOfAllMultiples(value, multiples)) {
				multiple += value;
			}
		}

		return multiple;
	}

	sumOfMultipleOfMultiplesAndMultiple(limit, multiples, multiples2) {
		let multiple = 0;

		for (let value = 0; value < limit; value++) {
			if (
				this.isMultipleOfNumber(value, multiples) &&
				this.isMultipleOfAllMultiples(value, multiples2)
			) {
				multiple += value;
			}
		}

		return multiple;
	}
}

module.exports = Multiple;
