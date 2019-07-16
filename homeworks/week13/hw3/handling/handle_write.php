<?php
  session_start();
  require_once('../conn.php');

  $title = $_POST['title'];
  $content = $_POST['content'];
  
  if ( empty($title) || empty($content)) {
    echo "<script>alert('標題和內容不可空白唷 !');parent.location.href='../write.php';</script>";
  } else {
    $stmt = $conn->prepare("INSERT INTO claygao_comments(title, content, nickname, `id_number`) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $title, $content, $_SESSION['nickname'], $_SESSION['id_number']);
  
    if ($stmt->execute()) {
      $newMessage = array('result' => 'Success ! ');
      echo json_encode($newMessage);
    } else {
      echo "<script>alert('發文失敗，請洽管理員 !');parent.location.href='../write.php';</script>";
    }
  }
?>