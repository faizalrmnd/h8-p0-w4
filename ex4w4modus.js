function cariModus(arr) {
	var i = 0;
	var max = 0;
	var modus = 0;

	while (i < arr.length) {
		var sama = 0;

		var j = 0;
		while (j < arr.length) {
			if (arr[i] === arr[j]) {
				sama += 1;
			}
			j++;
		}
		if (sama > max) {
			max = sama;
			modus = arr[i];
		}

		i++;
	}
	if (max === 1 || max === arr.length) {
		return -1;
	}
	return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
