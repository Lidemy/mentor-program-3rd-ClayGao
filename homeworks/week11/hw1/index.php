<?php
  require_once('./conn.php');
  require_once('./verify.php')
?>
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="style.css" />
  <title>Love Message Board</title>
</head>
<body>
  <nav>
  <a href="index.php">Loves Board</a>
  <?php
  // 根據使用者是否登入，顯示不同的 nav bar
  if($verifyCookie) {
    echo "<a href='write.php'>Write</a>";
    echo "<span class='member'>";
    $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '$verifyUsername'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    echo "<span>Hi " . $row['nickname'] . ", Share your story ! </span>";
    echo "<a href='./sign_out.php'>Sign out</a>";
    echo "</span>";
  } else {
    echo "<span class='member'>";
    echo "<a href='./sign_in.php'>Sign in</a>";
    echo "<a href='./register.php'>Join us</a>";
    echo "</span>";
  }
  ?>
  </nav>
  <main>
  <div class='pages__bar'>
    <?php
    // 分頁功能
    $sql = "SELECT * FROM claygao_comments";
      $result = $conn->query($sql);
      $total = $result->num_rows; // 總筆數
      $pageNum = 20; // 每一頁顯示多少
      $totalpages= ceil($total/$pageNum); 
      $page = $_GET['page'];
      if ($page === ''){ $page = 0; } // 如果沒有設定第幾頁，則設為第 0 頁
      $sql="SELECT * FROM claygao_comments ORDER BY created_at DESC LIMIT " . $page*$pageNum . "," . $pageNum;
      $result = $conn->query($sql);
      for ($i=0;$i < $totalpages; $i++)
      {
      $n = $i + 1;
      echo "<a class='page__button' href='index.php?page=". $i ."'>" . $n  . "</a>";
      }
      echo "<p class='total__pages'>Total : " . $total . " stories</p>";
    ?>
  </div>
  <div class="container">
    <div class="messages">
    <?php
      // 撈取留言
      if ($total > 0) {
        while($row = $result->fetch_assoc()) {
          echo "<div class='msg'>";
          echo "<div>" . $row['name'] . ":</div>";
          echo "<h1>" . $row['title'] . "</h1>";
          echo "<p>" . $row['content'] . "</p>";
          echo "<div> Final edit at " .$row['created_at'] . "</div>";
          if ($row['id_number'] === $_COOKIE['member_username']) {
            echo "<div class='edit'>";
              echo "<a href='./update.php?id=" . $row['id'] . "'> Edit </a>";
              echo "<a href='./handle_delete.php?id=" . $row['id'] . "'> Delete </a>";
            echo "</div>";
          }
          echo "</div>";
        }
      }
    ?>
    </div>
  </div>
  </main>
</body>