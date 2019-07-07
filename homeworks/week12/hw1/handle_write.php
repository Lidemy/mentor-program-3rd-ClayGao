<?php
  require_once('./conn.php');
  require_once('./verify.php');
  $user_id = $row['user_id'];

  $title = $_POST['title'];
  $content = $_POST['content'];
  //$id = $_COOKIE['member_username']; // 利用 cookie 的 username 判斷發文者為誰
  if ( empty($title) || empty($content)) {
    echo "<script>alert('標題和內容不可空白唷 !');parent.location.href='./write.php';</script>";
  } else {
    
    $stmt = $conn->prepare("SELECT * FROM claygao_users WHERE id_number = ?");
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    
    $nickName = $row['nickname'];
    $id_number = $row['id_number'];

    $stmt = $conn->prepare("INSERT INTO claygao_comments(title, content, nickname, `id_number`) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $title, $content, $nickName, $id_number);
   
    if ($stmt->execute()) {
      echo "<script>alert('發文成功 !');parent.location.href='./index.php';</script>";
    } else {
      echo "<script>alert('發文失敗，請洽管理員 !');parent.location.href='./write.php';</script>";
    }
    
  }
?>