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
// } else{
//   console.log("tidak lulus");
// }

// variabel baru nilai = 80 const nilai = 80;
// buatkan soal statement if else if else
// 1. jika nilai lebih dari 90 maka outputnya A
// 2. jika nilai lebih dari 80 maka outputnya B
// 3. jika nilai lebih dari 70 maka outputnya C
// 4. jika nilai lebih dari 60 maka outputnya D
// 5. jika nilai kurang dari 60 maka outputnya E

// if (nilai > 90) {
//   console.log("A");
// } else if (nilai > 80) {
//   console.log("B");
// } else if (nilai > 70) {
//   console.log("C");
// } else if (nilai > 60) {
//   console.log("D");
// } else {
//   console.log("E");
// }

// array dan object

const sekolah = {
  nama: "SMK N 1 Sleman",
  alamat: "Jalan Merapi",
  siswa: [
    {
      nama: "Andi",
      umur: 18,
    },
    {
      nama: "Budi",
      umur: 19,
    },
    {
      nama: "Caca",
      umur: 20,
    },
  ],
  guru: ["Pak A", "Pak B", "Pak C"],
};
// sekolah.siswa[1].nama sekolah.guru[2]
// console.log(sekolah.siswa[1].nama); // Budi
// console.log(sekolah.guru[2]); // Pak C

const toko = {
  nama: "Toko Buah",
  alamat: "Jalan Merapi",
  buah: ["apel", "jeruk", "mangga"],
  minuman: {
    dingin: ["es teh", "es jeruk"],
    panas: ["teh", "kopi"],
  },
  makanan: {
    ringan: ["kerupuk", "permen"],
    berat: {
      kuah: ["soto", "rawon"],
      goreng: ["tempe", "tahu"],
    },
  },
};

// console.log(toko.makanan.berat.goreng[0]); // tahu

//function

function hujan() {
  return "hujan";
}
// console.log(hujan());

// parameter pertama berupa x, param 2 = y
function tambah(x, y) {
  const z = x + y;
  return "hasil nya = " + z;
}

function kurang(x, y, z) {
  const hasil = x - y - z;
  return hasil;
}

// console.log(tambah(15, 7));
// console.log(kurang(15, 7, 2));

// function dengan param default
function kali(x = 1, y = 2) {
  const hasil = x * y;
  return hasil;
}

// console.log(kali());

// function kubus(x)

function kubus(s) {
  return s * s * s;
}

// function persegipanjang() x,y

// type 1
function bagi(x, y) {
  return x / y;
}

// type 2 variable function
const modulus = function (x, y) {
  return x % y;
};

// type 3 arrow function, ada 2 bentuk
const penjumlahan = (...x) => {
  let sum = 0;
  x.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log(penjumlahan(12, 23, 83));

const box2 = (x, y) => x * y;

async function getData() {
  const data = await fetch("https://api.amiminn.my.id");
  const res = await data.json();
  console.log(res.author);
}

// getData();

// cek2();

function cek() {
  console.log("hasil cek");
}

const cek2 = function () {
  console.log("hasil cek 2");
};
