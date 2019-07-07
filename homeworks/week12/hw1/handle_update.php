<?php
  require_once('./conn.php');
  $title = $_POST['title'];
  $content = $_POST['content'];
  $id = $_POST['id'];
  if ( empty($title) || empty($content)) {
    echo "<script>alert('標題和內容不可空白唷 !');parent.location.href='./update.php';</script>";
  } else {
    $stmt = $conn->prepare("UPDATE `claygao_comments` SET title = ?, content = ? WHERE id = ?");
    $stmt->bind_param("ssi", $title, $content, $id);

    if ($stmt->execute()) {
      echo "<script>alert('編輯成功 !');parent.location.href='./index.php';</script>";
    } else {
      echo "<script>alert('編輯失敗 !');parent.location.href='./update.php';</script>";
    }
  }

/**
 * 下下週新增功能 :
 * 
 * 可以覆蓋 created_at，讓留言板顯示的編輯時間為最後編輯時間
 * 沒錯 Week12 依舊沒做 QQ
 */
?>