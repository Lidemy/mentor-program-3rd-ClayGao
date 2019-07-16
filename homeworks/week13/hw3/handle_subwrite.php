<?php
  require_once('./conn.php');
  $subContent = $_POST['sub_content'];
  $subContentSender = $_POST['sender']; // 確定這是第幾篇文章的留言
  $id_sub1 = $_POST['id_sub1']; // 獲取是哪一篇文的子留言
  if ( empty($subContent)) {
    echo "<script>alert('內容不可空白唷 !');parent.location.href='./index.php';</script>";
  } else {
    $stmt = $conn->prepare("INSERT INTO claygao_comments_sub1(parent_id, sub_content, nickname) VALUES(?, ?, ?)");
    $stmt->bind_param("iss", $id_sub1, $subContent, $subContentSender);
    if (!$stmt->execute()) {
      echo "<script>alert('發文失敗，請洽管理員 !');parent.location.href='./write.php';</script>";
    } else {
      header("location:./index.php");
    }
  }
?>