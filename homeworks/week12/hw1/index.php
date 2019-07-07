<?php
  require_once('./conn.php');
  require_once('./verify.php');
  $user_id = $row['user_id'];
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
      
      $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '$user_id'";
      $result = $conn->query($sql);
      $row = $result->fetch_assoc();
      $theUser = $row['nickname']; // 存入當前使用者
      echo "<span>Hi " . $theUser . ", Share your story ! </span>";
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
          // 防止 XSS 攻擊
          function XSSDef($content) {
            return htmlspecialchars($content,ENT_QUOTES,'utf-8');
          }
          // 撈取留言
          if ($total > 0) {
            while($row = $result->fetch_assoc()) {
              echo "<div class='msg'>";
                echo "<div>" . XSSDef($row['nickname']) . " : </div>";
                echo "<h1>" . XSSDef($row['title']) . "</h1>";
                echo "<p>" . XSSDef($row['content']) . "</p>";
                echo "<div> Final edit at " .$row['created_at'] . "</div>";
                $msgID = $row['id'];
                
                // 如果發文者為登入者，加入更新與刪除功能
                if ($row['id_number'] === $user_id) {
                  echo "<div class='edit'>";
                    echo "<a href='./update.php?id=" . $row['id'] . "'> Edit </a>";
                    echo "<a href='./handle_delete.php?id=" . $row['id'] . "'> Delete </a>";
                  echo "</div>";
                }
                
                // 撈取留言底下的子留言
                $sql="SELECT * FROM claygao_comments_sub1 WHERE `parent_id` = '" . $row['id'] ."'";
                $result_sub1 = $conn->query($sql);
                while($row_sub1 = $result_sub1->fetch_assoc()) {
                  echo "<div class='sub__msg'>";
                    // 如果留言的是原作者，留言會多套用 creator__sub__msg，字體加粗，文字顏色改變
                    if ( $row['nickname'] == $row_sub1['nickname']) {
                      echo "<div class='creator__sub__msg'>" . XSSDef($row_sub1['nickname']) . " : " . XSSDef($row_sub1['sub_content']) . "</div>";
                    } else {
                      echo "<div>" . XSSDef($row_sub1['nickname']) . " : " . XSSDef($row_sub1['sub_content']) . "</div>";
                    }
                    echo "<div class='create__time'> at " . $row_sub1['created_at'] . "</div>";
                  echo "</div>";
                }
                
                // 子留言輸入框
                if ($verifyCookie) {
                  echo "<div class='sub__write'>";
                    echo "<form method='POST' class='sub__write__form' action='handle_subwrite.php'>";
                      echo "<textarea placeholder='Reply' name='sub_content'></textarea>";
                      echo "<input type='hidden' name='sender' value='" . $theUser . "' >";
                      echo "<input type='hidden' name='id_sub1' value='" . $row['id'] . "' >";
                      echo "<button>send</button>";
                    echo "</form>";
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
</html>