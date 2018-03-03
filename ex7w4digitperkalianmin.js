function digitPerkalianMinimum(angka) {
  // you can only write your code here!

  let tmp = []

  for (let i = 0; i <= angka; i++) {

    for (let j = 0; j <= angka; j++) {

      if (i * j === angka) {

        tmp.push(i+''+j)

      }

    }

  }

  let digit = []

  for (let i = 0; i < tmp.length; i++) {

    digit.push(tmp[i].length)

  }

  let digitMin = digit[0]

  for (let i = 0; i < digit.length; i++) {

    if (digitMin > digit[i]) {

      digitMin = digit[i]

    }

  }

return digitMin

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
