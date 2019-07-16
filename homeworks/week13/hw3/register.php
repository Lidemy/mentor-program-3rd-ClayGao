<?php
  require_once('./conn.php');
  echo "<script>alert('本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼')</script>";
?>
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="./css/style.css" />
  <title>Love Message Board</title>
</head>
<body>
  <nav>
    <a href="./index.php">Loves Board</a>
    <span class="member">
      <a href="./sign_in.php">Sign in</a>
    </span>
  </nav>
  <main>
    <div class="container">
      <form class="form__style" method="POST" action="./handling/handle_register.php">
        Username : <input type="text" autocomplete="off" name="username">
        Password : <input type="password" autocomplete="off" name="password">
        Password again : <input type="password" autocomplete="off" name="password2">
        Nick name : <input type="text" autocomplete="off" name="nickname">
        <button>Send</button>
      </form>
    </div>
  </main>
</body>