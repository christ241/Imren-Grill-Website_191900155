function computePrice() {
  var number = document.getElementById("number").value;
  var price = document.getElementById("price").value;
  var tot_harga = number * price;
  var total_price = document.getElementById("tot_harga");
  total_price.innerHTML = tot_harga
    .toString()
    .replace(/\B(?=(\d{3})+?!d)/g, ",");
  return false;
}
// var entry = document.getElementById("entry");
// entry.addEventListener("click", displayDetails);

// function displayDetails() {
//   var name = document.getElementById("name").value;
//   var price = document.getElementById("price").value;
//   var amount = document.getElementById("amount").value;
//   var total = amount + "*" + price;
//   var tot_harga = document.getElementById("tot_harga");
//   var cash = document.getElementById("cash"),
//     income = 0;
//   var time = document.getElementById("time");
//   var tot_har_mak = document.getElementById("total_harga_makanan");
//   var row = 1;

//   if (!name || !price || !amount) {
//     alert("Tolong isi semua opsi");
//     return;
//   }

//   var display = document.getElementById("display");

//   var newRow = display.insertRow(row);

//   var cell1 = newRow.insertCell(0);
//   var cell2 = newRow.insertCell(1);
//   var cell3 = newRow.insertCell(2);

//   cell1.innerHTML = name;
//   cell2.innerHTML = total;
//   cell3.innerHTML = amount * price;

//   tot_harga.innerHTML = parseInt(tot_harga.innerHTML) + amount * price;
//   income += tot_harga;
//   cash.innerHTML = parseInt(tot_harga.innerHTML) + parseInt(income);

//   var displayRight = document.getElementById("display_right");

//   var newRowright = displayRight.insertRow(row);

//   var cell4 = newRowright.insertCell(0);
//   var cell5 = newRowright.insertCell(1);
//   var cell6 = newRowright.insertCell(2);

//   cell4.innerHTML = time.innerHTML;
//   cell5.innerHTML = name;
//   cell6.innerHTML = tot_har_mak;

//   row++;
// }

// function transfer() {
//   var transfer = document.getElementById("transfer");
//   var pemasukan = document.getElementById("pemasukan");
//   var cash = document.getElementById("cash");

//   if (cash % 1000000 > 0) {
//   }

//   cash.innerHTML = parseInt(cash.innerHTML) - 1000000;
//   pemasukan.innerHTML = parseInt(pemasukan.innerHTML) + 1000000;
//   transfer.innerHTML = parseInt(transfer.innerHTML) + 1000000;

//   return false;
// }
