<?php

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
$servername = 'localhost';
$db_username= 'root';
$db_password ='';
$db_name = 'comments';

$conn = new mysqli($servername, $db_username, $db_password, $db_name);
if ($conn->connect_error) {
    die('connection 失敗' . $conn->connect_error);
} else {
    echo '連接至資料庫成功!';
}

$sql = "INSERT INTO `register_data`(`id_number`, `password`, `password2`, `username`) VALUES('$id_number', '$password', '$password2', '$username')";
echo $sql;

$result = $conn->query($sql);

if ($result) {
    echo "Success!";
} else {
    echo "Fail!";
    echo $result;
}
?>