<html>
  <header>
  <title>主頁面</title>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="style.css">
  </header>
  <body>
  <div class="wrapper">
    <div>
      <div class="register">
      <form  method="POST" action="./handle_signin.php">
        <div>請輸入帳號 : <input name="ID_number" /></div>
        <div>請輸入密碼 : <input name="password" type="password" /></div>
        <div><input class="btn" type="submit" value="送出" /></div>
      </form>
      <a href="./member_create.php"> 沒有帳號 ? 註冊一下 !</a>
      </div>
    </div>
  </div>
  </body>
</html>