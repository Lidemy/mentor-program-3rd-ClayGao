<?php
  require_once('./conn.php');
  $user_id_number = $_POST['ID_number'];
  $user_password = $_POST['password'];

  if (empty($user_id_number) || empty($user_password)) {
    die('有空格沒有填寫 !');
  } 

  $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '$user_id_number'";

  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  if ($user_password === $row['password']) {
    setcookie("member_id", $row['username'], time()+3600*24);
    header("Location: ./index.php");
   
  } else {
    echo '登入失敗，請檢查帳號密碼是否正確';
  }
?>