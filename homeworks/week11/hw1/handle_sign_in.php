<?php
  require_once('./conn.php');

  $idNumberSignIn = $_POST['username'];
  $passwordSignIn = $_POST['password'];

  // 判斷輸入框是否為空
  if ( empty($idNumberSignIn) || empty($passwordSignIn) ) {
    echo "<script>alert('帳號密碼未輸入 !');parent.location.href='./sign_in.php';</script>";
  } else {
    // 比對使用者資料庫中該使用者的密碼是否相符
    $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '$idNumberSignIn'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $verify = password_verify($passwordSignIn , $row['password']); // 比對密碼是否相符

    // 發送 cookie 到 claygao_users_certificate 與 Clinet
    if ($verify) {
      $cookieHash = password_hash( $row['id_number'], PASSWORD_DEFAULT); // 比對成功之後，創建一組專屬 cookie
      $id = $row['id_number'];
      $sql = "INSERT INTO `claygao_users_certificate`(`id`, `username`) VALUES('$cookieHash', '$id') ON DUPLICATE KEY UPDATE `id` = '$cookieHash'"; 
      $result = $conn->query($sql);
      setcookie("member_username", $id, time()+3600*24);
      setcookie("member_id", $cookieHash, time()+3600*24);
      echo "<script>alert('登入成功 !');parent.location.href='./index.php';</script>";
    } else {
      echo "<script>alert('登入失敗，請檢查是否輸入錯誤 !');parent.location.href='./sign_in.php';</script>";
    }
  }
?>	