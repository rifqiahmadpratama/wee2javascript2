function cari(nilaiAwal, nilaiAkhir, dataArray) {
  let checkArray = checkTypeDataArray(dataArray);
  try {
    if (nilaiAwal > nilaiAkhir) {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
    if (dataArray.length < 5) {
      console.log("jumlah angka dalam dataArray harus lebih dari 5");
    }
    if (checkArray == true) {
      console.log("nilai adalah string");
    }
    let result = dataArray.filter(function (num) {
      return num < nilaiAkhir && num > nilaiAwal;
    });

    let data = result.sort((a, b) => a - b);
    console.log(`Nilai data adalah ${data}`);
    if (data != "") {
      console.log(data);
    } else {
      console.log("Nilai tidak di temukan");
    }
  } catch (err) {
    console.log(err);
  }
}
function checkTypeDataArray(dataArray) {
  let array = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (typeof dataArray[i] !== "number") {
      array.push("string");
    } else {
      array.push("number");
    }
  }
}

cari(1, 13, [2, 3, 41, 12, 5416, 5415]);
