<?php
  require_once('./conn.php');
  setcookie("member_username", '', time()+3600*24);
  setcookie("member_id", '', time()+3600*24);
  echo "<script>alert('已成功登出 !');parent.location.href='./index.php';</script>";
?>