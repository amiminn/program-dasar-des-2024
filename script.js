// variabel
// 3 variabel yang berbeda
// 1. var 2. let 3. const
// const alamat = "Sleman";

// let umur = 18;
// umur = 20;
// umur = 25;
// umur = 30;

// const nama;
// nama = "Andi";
// debugging
// console.log(nama);

// tipe data
// 1. string
const nama = "Andi";
const alamat = "Sleman";
const output = "Nama saya adalah " + nama + " dan alamat saya ada di " + alamat;
const output2 = `Nama saya adalah ${nama} dan alamat saya ada di ${alamat}`;
// console.log(output2);

// 2. number
const umur = 18.6;
// console.log(umur);

// console.log("nama saya adalah " + nama + " dan umur saya adalah " + umur);

// 3. boolean true false

const absen = false;
// console.log(absen);
// if (absen) {
//   console.log("Siswa hadir");
// } else {
//   console.log("Siswa tidak hadir");
// }

// 4. array
const buah = ["apel", "jeruk", "mangga"];
// apel ada di index ke 0
// console.log(buah[1]);

// buah.map((item) => {
//   console.log(item);
// });

// beda object dan array adalah array menggunakan index [12], sedangkan object menggunakan key {nama: "Andi"}

// 5. object
const siswa = {
  nama: "Andi",
  umur: 18,
  alamat: {
    jalan: "Jalan Merapi",
    kota: "Sleman",
  },
};

// console.log(
//   "Nama saya adalah " +
//     siswa.nama +
//     " dan umur saya adalah " +
//     siswa.umur +
//     " dan alamat saya ada di " +
//     siswa.alamat.jalan
// );

// null dan undefined
// null adalah nilai yang kosong
// undefined adalah nilai yang tidak ada

const kosong = "";
const stringKosong = null;

// console.log(kosong);
// if (kosong == null) {
//   console.log("ada");
// } else {
//   console.log("kosong");
// }

// operator
// 1. aritmatika + - * / %
// 2. perbandingan > < >= <= == === !=
// 3. logika && || !
// 4. ternary
// 5. increment dan decrement ++ --

const x = 2;
const y = 5;

// console.log(x > y ? "benar" : "salah");
const kkm = 70;
const nilai = 70;
// if (nilai > kkm) {
//   console.log("lulus");
// } else {
//   console.log("tidak lulus");
// }

// statement if else

// if (nilai >= kkm) {
//   console.log("lulus");
// }

// if (nilai > kkm) {
//   console.log("lulus");
// } else if (nilai == kkm) {
//   console.log("nilai anda pas");
// } else if (nilai < 50) {
//   console.log("belajar lagi ya");
// } else {
//   console.log("tidak lulus");
// }

// variabel baru nilai
// buatkan soal statement if else if else
// 1. jika nilai lebih dari 90 maka outputnya A
// 2. jika nilai lebih dari 80 maka outputnya B
// 3. jika nilai lebih dari 70 maka outputnya C
// 4. jika nilai lebih dari 60 maka outputnya D
// 5. jika nilai kurang dari 60 maka outputnya E
