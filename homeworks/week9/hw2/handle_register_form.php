<?php
  require_once('./conn.php');
  $id_number = $_POST['ID_number'];
  $password = $_POST['password'];
  $password2 = $_POST['password2'];
  $username = $_POST['name'];

  if (empty($id_number) || empty($password) || empty($password2) || empty($username) ) {
    die('有空格沒有填寫 !');
  } else {
    if ( $password !== $password2) {
      die('前後密碼不相同 ! ');
    }
  } 
  
  $sql = "INSERT INTO `claygao_users`(`id_number`, `password`, `password2`, `username`) VALUES('$id_number', '$password', '$password2', '$username')";

  $result = $conn->query($sql);

  if ($result) {
    echo "Success!";
    setcookie("member_id", $username, time()+3600*24);
    header('Location: ./index.php');
  } else {
    echo "Failed!可能是這個帳號被使用過了 ! ";
  }
?>