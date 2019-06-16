<html>
  <header>
    <title>主頁面</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css">
  </header>
  <body>
    <div class="wrapper">
      <div class="write">
        <form  method="POST" action="./handle_article.php">
          <div>
            <h2>請輸入標題 :</h2>
            <input class="enter__title" name="title" />
          </div>
          <div>
            <h2>請輸入文章 :</h2> 
            <textarea class="enter__content" name="content"></textarea>
          </div>
          <div><input class="btn" type="submit" value="送出文章" /></div>
        </form>
        <a href="handle_loginout.php">登出<a>
      </div>
    </div>
  </body>
</html>