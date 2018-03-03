function fpb(angka1, angka2) {
	for (var i = angka2; i > 0; i--) {
		if (angka1 % i === 0 && angka2 % i === 0) {
			return i;
		}
	}
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
