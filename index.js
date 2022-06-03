// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = function (paramData) {
  let listTotal = [];
  for (index = 0; index < paramData.length; index++) {
    listTotal[index] = '- ' + paramData[index].nama + ' x ' + paramData[index].kuantitas;
  };
  return listTotal;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function (paramData){
  let totalHarga = 0;
  for (index = 0; index < paramData.length; index++){
    totalHarga += paramData[index].harga * paramData[index].kuantitas;
  }
  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");
  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
