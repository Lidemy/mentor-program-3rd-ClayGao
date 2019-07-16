<?php
  require_once('../conn.php');

  function XSSDef($content) {
    return htmlspecialchars($content,ENT_QUOTES,'utf-8');
  }

  class Comments {
    public $nickname;
    public $title;
    public $content;
    public $created_at;
  }

  $stmt = $conn->prepare("SELECT * FROM claygao_comments");
  $stmt->execute();
  $result = $stmt->get_result();
  while($row = $result->fetch_assoc()) {
    $comment = new Comments();
    $comment->id = $row['id'];
    $comment->nickname = XSSDef($row['nickname']);
    $comment->title = XSSDef($row['title']);
    $comment->content = XSSDef($row['content']);
    $comment->created_at = XSSDef($row['created_at']);
    $arr[] = $comment;
  }
  echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>