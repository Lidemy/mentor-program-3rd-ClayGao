<?php
  require_once('./conn.php');
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
    <a href="./register.php">Join us</a>
    </span>
  </nav>
  <main>
    <div class="container">
    <form class="form__style" method="POST" action="./handling/handle_sign_in.php">
      Username : <input type="text" autocomplete="off" name="username">
      Password : <input type="password" autocomplete="off" name="password">
      <button>Send</button>
    </form>
    </div>
  </main>
</body>