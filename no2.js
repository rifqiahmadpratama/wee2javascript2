var nama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function cariItem(input, outputCount, callbackData) {
  try {
    if (input == "") {
      console.log("Data Search Kosong");
    } else if (!isNaN(input)) {
      console.log("Data Search Harus String");
    }
    validasiOutput(outputCount);
    MencariNama(input, outputCount, callbackData);
  } catch (error) {
    console.log(error);
  }
}

function validasiOutput(outputCount) {
  if (outputCount == "") {
    console.log("Data Output Kosong");
  } else if (isNaN(outputCount)) {
    console.log("Data Output Harus Number");
  }
  outputCount = Number(outputCount);
}

function MencariNama(input, outputCount, callback) {
  filter = input.toLowerCase();

  dataElement = [];

  nama.map((element) => {
    const isiElement = element.toLowerCase();
    if (isiElement.indexOf(filter) != -1) {
      dataElement.push(element);
    }
  });

  result = dataElement.slice(0, outputCount);

  if (result == "") {
    console.log(`Data ${input} tidak dapat ditemukan`);
  } else {
    callback(result);
  }
}

function callbackData(result) {
  console.log(result);
}

cariItem("an", 3, callbackData);
