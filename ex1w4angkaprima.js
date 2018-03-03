function angkaPrima(angka) {
  // var i = 2
  //   while (i<angka) {
  //     if (angka%i !== 0) {
  //       return true
  //     }
  //     i++
  //   }
  //   return false

  for (i = 2; i < angka; i++) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// sintaks for di gunakan untuk mengulang variabel i sampai dengan i = variabel angka.
 // kenapa dimulai dari angka 2, karena bilangan prima adalah bilangan yang tidak habis di bagi
 // selain oleh bilangan itu sendiri atau bilangan 1.
 // setelah for ada kondisi jika angka habis di bagi dengan variabel i maka hasil false karena
 // bukan dari ketentuan bilangan prima.
 // setelah itu mengapa return true di tulis di luar for, karena fungsi for adalah mengembalikan
 // angka sekaligus menghentikan function. Jika tidak di taruh di luar maka oleh kondisi
 // tidak akan dijalankan karena telah di return false
