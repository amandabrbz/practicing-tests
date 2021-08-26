class Multiple {
	checkMultiple (value, multiple) {
		return value % multiple === 0;
	}

	sum(limit, multiples) {
		let multiple = 0

		for (let value = 0; value < limit; value++) {
			if(this.checkMultiple(value, multiples[0]) || this.checkMultiple(value, multiples[1])) {
				multiple += value
			}
		}
		
		return multiple
	}
}

module.exports = Multiple;