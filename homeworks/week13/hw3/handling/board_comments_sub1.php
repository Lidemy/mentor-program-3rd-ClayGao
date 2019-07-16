<?php
  require_once('../conn.php');

  function XSSDef($content) {
    return htmlspecialchars($content,ENT_QUOTES,'utf-8');
  }

  class Sub_comments {
    public $nickname;
    public $sub_content;
  }

  $stmt = $conn->prepare("SELECT * FROM claygao_comments_sub1");
  $stmt->execute();
  $result = $stmt->get_result();
  while($row = $result->fetch_assoc()) {
    $sub_comment = new Sub_comments();
    $sub_comment->parent_id = $row['parent_id'];
    $sub_comment->nickname = XSSDef($row['nickname']);
    $sub_comment->sub_content = XSSDef($row['sub_content']);
    $sub_comment->created_at = XSSDef($row['created_at']);
    $arr[] = $sub_comment;
  }
  echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>