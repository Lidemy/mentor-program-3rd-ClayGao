<?php
  require_once('./conn.php');
  setcookie("PHPSESSID", '', time()-3600*24,'/'); //如此會刪除失敗
  //session_destroy();

  //setcookie(session_name(),'',time()-3600*24);
  //setcookie("member_id", '', time()+3600*24);
  echo "<script>alert('已成功登出 !');parent.location.href='./index.php';</script>";
?>