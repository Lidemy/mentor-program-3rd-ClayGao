<?php
  session_start();
  if (isset($_SESSION['id_number'])) {
    $arr = array( 'islogin' => 1, 'currect_user' => $_SESSION['nickname']); // 返還當前使用者名稱
  } else {
    $arr = array( 'islogin' => 0);
  }
  echo json_encode($arr);
?>