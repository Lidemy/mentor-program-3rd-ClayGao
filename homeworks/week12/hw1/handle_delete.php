<?php
  require_once('./conn.php');
  $id = $_GET['id'];
  $spl = "DELETE FROM `claygao_comments` WHERE id = " . $id;
  $stmt = $conn->prepare("DELETE FROM `claygao_comments` WHERE id = ?");
  $stmt->bind_param("i", $id);
  
  if ($stmt->execute()) {
    echo "<script>alert('刪除成功 !');parent.location.href='./index.php';</script>";
  }
?>