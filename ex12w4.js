// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:
//
// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000

function shoppingTime(memberId, money) {
  // var barang = [ {produk: 'Sepatu Stacattu', price: 1500000},
  //                {produk: 'Baju Zoro', price: 500000},
  //                {produk: 'Baju H&N', price: 250000},
  //                {produk: 'Sweater Uniklooh', price: 175000},
  //                {produk: 'Casing Handphone', price: 50000}
  //              ]

  var arrbarang = [['Sepatu Stacattu', 1500000],
                   ['Baju Zoro', 500000],
                   ['Baju H&N', 250000],
                   ['Sweater Uniklooh', 175000],
                   ['Casing Handphone', 50000]]

  if (memberId === undefined || memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }
  var object = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: money
  }

  // for (var i = 0; i < barang.length; i++) {
  //   if (object.changeMoney >= barang[i].price) {
  //     object.listPurchased.push(barang[i].produk)
  //     object.changeMoney -= barang[i].price
  //   }
  // }

  for (var i = 0; i < arrbarang.length; i++) {
    if (object.changeMoney >= arrbarang[i][1]) {
      object.listPurchased.push(arrbarang[i][0])
      object.changeMoney -= arrbarang[i][1]
    }
  }

  return object
}
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
