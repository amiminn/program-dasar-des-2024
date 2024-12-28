<?php

session_start();

if (!isset($_SESSION['tiket'])) {
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit();
}

if (isset($_SESSION['tiket'])) {
    echo "kita sedang nonton film";
}
