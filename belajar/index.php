<?php
include 'koneksi.php';
session_start();
// string
$nama = "joko";
// integer
$umur = 15;
// float
$bb = 54.4;
// boolean
$ujian = true; //false
// array
$kelas8 = ["joko", "andi", "firman"];
// object
$data = [
    "nama" => "ilham",
    "alamat" => [
        "prov" => "DIY",
        "kota" => "sleman"
    ]
];

$kelas9 = [
    ["arham", 15],
    ["ilyas", 16]
];
echo $kelas9[1][0];
echo "hello, nama saya $kelas8[2], " . "umur saya " . $umur . ", saya tinggal di " . $data['alamat']['kota'];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?php echo $nama ?> </title>
</head>

<body>
    <p>Lorem ipsum dolor sit.</p>

    <?php
    $nilai = 80;
    if ($nilai >= 90) {
        echo "A";
    } else if ($nilai >= 75) {
        echo "B";
    } else {
        echo "C";
    }
    ?>
    <?php
    for ($i = 1; $i <= 5; $i++) {
        echo "Nomor: $i<br>";
    }
    ?>

    <?php
    function sapa($nama = "asan")
    {
        return "Halo, $nama!";
    }

    // public privat
    // static

    echo sapa("irfan");
    ?>

    <form method="post" action="submit.php">
        <input type="text" name="username" placeholder="masukkan username">
        <input type="password" name="password" placeholder="masukkan password">
        <button type="submit">Kirim</button>
    </form>

    <!-- plaza -->


    <!-- masuk ke bioskop -->
    <a href="/belajar/nonton.php">masuk</a>

    <!-- tiket -->
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['beli_tiket'])) {
            $_SESSION['tiket'] = 'film';
        }
    }
    ?>
    <form method="post">
        <button type="submit" name="beli_tiket">beli tiket</button>
    </form>

    <?php
    $query = "SELECT nama FROM daftar_siswa";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        echo "<ul>";
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<li>" . $row['nama'] . "</li>";
        }
        echo "</ul>";
    } else {
        echo "Tidak ada data siswa.";
    }
    ?>

</body>

</html>