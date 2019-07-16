<?php
  require_once('./conn.php');
  setcookie("PHPSESSID", '', time()-3600*24,'/'); 
  session_unset();
  echo "<script>alert('已成功登出 !');parent.location.href='./index.php';</script>";
?>