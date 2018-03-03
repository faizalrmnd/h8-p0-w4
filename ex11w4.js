function changeMe(arr) {

  for (var i =0; i < arr.length; i++) {

    var obj = {
    firstName : arr[i][0],
    lastName : arr[i][1],
    gender : arr[i][2],
    age : arr[i][3]
  }
  if (arr[i][3] === undefined || arr[i][3] > 2017) {
    obj['age'] = 'Invalid Birth Year'
  }

console.log(obj)
}

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
