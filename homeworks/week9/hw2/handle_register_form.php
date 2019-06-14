<?php
require_once('./conn.php');
$id_number = $_POST['ID_number'];
$password = $_POST['password'];
$password2 = $_POST['password2'];
$username = $_POST['name'];



if (empty($id_number) || empty($password) || empty($password2) || empty($username) ) {
    die('有空格沒有填寫 !');// echo $id_number . '' . $password  . '' .  $password2  . '' . $name ;
} else {
    if ( $password !== $password2) {
        die('密碼不相同 ! ');
    }
    echo "註冊成功 ! ";
}

// 連接資料庫

$sql = "INSERT INTO `register_data`(`id_number`, `password`, `password2`, `username`) VALUES('$id_number', '$password', '$password2', '$username')";
echo $sql;

$result = $conn->query($sql);

if ($result) {
    echo "Success!";
    header('Location: ./index.php');
} else {
    echo "Failed!";
}
?>