<?php
  require_once('./conn.php');
  $id = $_GET['id'];
  $spl = "DELETE FROM `claygao_comments` WHERE id = " . $id;
  $result = $conn->query($spl);
  if ($result) {
    echo "<script>alert('刪除成功 !');parent.location.href='./index.php';</script>";
  }
?>