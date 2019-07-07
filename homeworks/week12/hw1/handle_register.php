<?php
  require_once('./conn.php');

  $idNumber = $_POST['username'];
  $password = $_POST['password'];
  $password2 = $_POST['password2'];
  $nickName = $_POST['nickname'];

  // 檢查內容是否為空
  if ( empty($idNumber) || empty($password) || empty($password2) || empty($nickName) ) {
    echo "<script>alert('有內容未輸入 !');parent.location.href='./register.php';</script>";
  }

  // 檢查前後密碼是否相符
  if ( $password !== $password2 ) {
    echo "<script>alert('前後密碼不相符 !');parent.location.href='./register.php';</script>";
  }

  $passwordHash =  password_hash($password, PASSWORD_DEFAULT);
  
  $stmt = $conn->prepare("INSERT INTO claygao_users(id_number, password, nickname) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $idNumber, $passwordHash, $nickName);

  if($stmt->execute()) {
    echo "<script>alert('註冊成功 !');parent.location.href='./index.php';</script>";
  } else {
    echo "<script>alert('註冊失敗，此帳號或暱稱可能已有人使用 !');parent.location.href='./register.php';</script>";
  }
?>