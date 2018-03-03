// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
//
// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
//
// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
//
// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

function changeVocals (str) {

  var vocal = 'aAiIuUeEoO'
  var pengganti = 'bBjJvVfFpP'
  var hasil = []
  for (var i = 0; i < str.length; i++) {
    hasil.push(str[i])
    for (var j = 0; j < pengganti.length; j++) {

      if (str[i] === vocal[j]) {
        hasil.splice(i, 1)
        hasil.push(pengganti[j])
      }
    }
  }
  var hasil2 = hasil.join('')
  //return hasil2
  return hasil2
}
// console.log(changeVocals('Sergei Dragunov'))


function reverseWord (str) {
  var reversed = ''
  for (var i = changeVocals(str).length-1 ; i >= 0; i--) {
    reversed += changeVocals(str)[i]
  }
  return reversed
}

function setLowerUpperCase (str) {
  var lowerupper = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lower = 'abcdefghijklmnopqrstuvwxyz'
  var lowereduppered = ''

  for (var i = 0; i < reverseWord(str).length; i++) {
      if (reverseWord(str)[i] === ' ') {
        lowereduppered += ' '
      } else  if (reverseWord(str)[i] === lower[lower.indexOf(reverseWord(str)[i])]) {
         lowereduppered += lowerupper[lowerupper.indexOf(reverseWord(str)[i])+1]
      } else {
         lowereduppered += lowerupper[lowerupper.indexOf(reverseWord(str)[i])-1]
      }
  }
  return lowereduppered
}

function removeSpaces (str) {
  var arr = []

  for (var i = 0; i < setLowerUpperCase(str).length; i++) {
    arr.push(setLowerUpperCase(str)[i])
    if (setLowerUpperCase(str)[i] === ' ') {
      arr.splice(arr.indexOf(' '), 1)
    }
  }
  var hasil = arr.join('')
  return hasil
}


function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
  return removeSpaces(name)
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
