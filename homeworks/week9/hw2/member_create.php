<html>
  <header>
    <title>主頁面</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css">
  </header>
  <body>
    <div class="wrapper">
      <h1>Walk here and write your story</h1>
        <div class="register">
          <form  method="POST" action="./handle_register_form.php">
            <div>請輸入帳號 : <input name="ID_number" /></div>
            <div>請輸入密碼 : <input name="password" type="password" /></div>
            <div>再輸入密碼 : <input name="password2" type="password" /></div>
            <div>請輸入暱稱 : <input name="name" /></div>
            <div><input class="btn "type="submit" value="送出" /></div>
          </form>
        </div>
    </div>
  </body>
</html>