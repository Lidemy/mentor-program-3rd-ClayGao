<?php
if (!isset($_COOKIE["member_id"])) {
    $verifyCookie = false;
  } else {
    $verifyUsername = $_COOKIE["member_username"];
    $verifyId = $_COOKIE["member_id"];
    $sql = "SELECT * FROM `claygao_users_certificate` WHERE `username` = '$verifyUsername'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    if ($row && $verifyId === $row['id']) { 
      $verifyCookie = true; // 可以根據滿足不同的條件給予不同的權限，比如說管理員權限 $adminPermission = true
    } else {
      $verifyCookie = false;
    }
  }

/**
 * 需要新增功能 ( 挑戰題 )：
 * 
 * 增加管理員權限 ( 需要滿足更多的條件 )
 */
?>