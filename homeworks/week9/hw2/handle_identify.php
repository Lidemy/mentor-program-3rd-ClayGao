<?php
  require_once('./conn.php');

  if(!isset($_COOKIE["member_id"])) {
    echo "本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼<br>";
    echo " 目前為會員登出狀態<br>";
    require_once('./member_login.php');
  } else {
    echo "本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼<br>";
    echo " 目前為會員登入狀態<br>";
    echo "登入者為 " . $_COOKIE["member_id"];
    require_once('./message_board.php');
  }
?>