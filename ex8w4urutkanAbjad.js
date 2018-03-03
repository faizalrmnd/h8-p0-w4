function urutkanAbjad(str) {
  // you can only write your code here!

  let code = []

  for (var i = 0; i < str.length; i++) {

    code.push(str[i].charCodeAt(str[i]))

  }

  charCode = code.sort((a,b) => a-b)

  let result = []

  for (var i = 0; i < charCode.length; i++) {

    result.push(String.fromCharCode(charCode[i]))

  }

  return result.join('')

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
