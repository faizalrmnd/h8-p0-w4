function totalDigitRekursif(angka) {

  var numstr = String(angka)
  var total = 0

  if (numstr.length === 1) 
    total = total + Number(numstr)
   else

    total = total + Number(numstr[0]) + totalDigitRekursif(Number(numstr.slice(1)))
    return total

  // for (var i = 0; i < str.length; i++) {
  //   hasil += parseInt(str[i])
  // }
  // return hasil
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
