function ubahHuruf(kata) {
  var alph = 'abcdefghijklmnopqrstuvwxz'
  var str = ''

  var i = 0
  while (i < kata.length){
    str += alph[alph.indexOf(kata[i])+1];
    i++
  }
  return str
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
