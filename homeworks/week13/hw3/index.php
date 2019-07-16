<?php
  require_once('./conn.php');
  session_start();
?>
<!DOCTYPE html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>Love Message Board</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- JS -->
    <script src="./js/main.js"></script>
  </head>
  <!-- body -->
  <body>
    <nav>
    <a href="index.php">Loves Board</a>
    <?php
    // 根據使用者是否登入，顯示不同的 nav bar
    if(isset($_SESSION['id_number'])) { 
    ?>
      <a id='write'>Write</a>
      <span class='member'>
      <span>Hi <span id="member_name"><?php echo $_SESSION['nickname'] ?></span> Share your story ! </span>
      <a href='./handling/sign_out.php'>Sign out</a>
      </span>
    <?php } else { ?>
      <span class='member'>
      <a href='./sign_in.php'>Sign in</a>
      <a href='./register.php'>Join us</a>
      </span>
    <?php } ?>
    </nav>
    <main>
      <!-- 留言輸入框 -->
      <div id="write_block" class="container" style="display:none">
        <form class="form__style" method="POST">
            Title : <input id="new_title" type="text" autocomplete="off" placeholder="Enter title..." name="title">
            Comment : <textarea id="new_comment" placeholder="Enter content..." name="content"></textarea>
            <input id="send_comment" type="submit" value="send">
        </form>
      </div>
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
      <div id="messages_board" class="container">
        <div class="messages">
        <!-- 撈留言給 JS 處理 -->
        </div>
      </div>
    </main>
  </body>
</html>