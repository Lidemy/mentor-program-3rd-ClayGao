<?php
  require_once('./conn.php');

  $idNumberSignIn = $_POST['username'];
  $passwordSignIn = $_POST['password'];

  // 判斷輸入框是否為空
  if ( empty($idNumberSignIn) || empty($passwordSignIn) ) {
    echo "<script>alert('帳號密碼未輸入 !');parent.location.href='./sign_in.php';</script>";
  } else {
    // 比對使用者資料庫中該使用者的密碼是否相符
    $stmt = $conn->prepare("SELECT * FROM `claygao_users` WHERE `id_number` = ?");
    $stmt->bind_param("s", $idNumberSignIn);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $verify = password_verify($passwordSignIn , $row['password']); // 比對密碼是否相符

    // 發送 cookie 到 claygao_users_certificate 與 Clinet
    // 出現一個 id 當作 session id 發給資料庫與 Client
    if ( $verify ) {
      session_start(); // 啟動 Session
      $sessionID = session_id();
      $id = $row['id_number'];

      $stmt = $conn->prepare("INSERT INTO claygao_users_certificate(id, `user_id`) VALUES(?, ?) ON DUPLICATE KEY UPDATE `id` = ?");
      $stmt->bind_param("sss",$sessionID, $id, $sessionID);
      $stmt->execute();
      echo "<script>alert('登入成功 !');parent.location.href='./index.php';</script>";
    } else {
      echo "<script>alert('登入失敗，請檢查是否輸入錯誤 !');parent.location.href='./sign_in.php';</script>";
    }
  }
?>	