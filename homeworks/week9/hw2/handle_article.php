<?php
  require_once('./conn.php');

  $title = $_POST['title'];
  $content = $_POST['content'];
  $creator = $_COOKIE["member_id"];

  if (empty($title) || empty($content)) {
    die('標題或內容不能都不寫唷 !');
  } else {
    echo "提交成功! ";
  }
  // 傳送資料至資料庫

  $sql = "INSERT INTO `claygao_comments`(`title`, `content`,`name`) VALUES ('$title', '$content','$creator')";
  echo $sql;

  $result = $conn->query($sql);
  if ($result) {
    echo "Success!";
    header('Location: ./index.php');
  } else {
    echo "Failed!";
  }
?>