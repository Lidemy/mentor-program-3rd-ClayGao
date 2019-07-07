<?php
  require_once('./conn.php');
  require_once('./verify.php');
  if (!$verifyCookie) { 
    echo "<script>alert('您沒有權限訪問這個頁面!');parent.location.href='./index.php';</script>"; 
  } else {
    $id = $_GET['id'];
    $stmt = $conn->prepare("SELECT * FROM `claygao_comments` WHERE id = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
  }
?>
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="style.css" />
  <title>Love Message Board</title>
</head>
<body>
   <nav>
    <a href="./index.php">Loves Board</a>
    <span class='member'>
      <a href="./sign_out.php">Sign out</a>
    </span>
   </nav>
   <main>
   <div class="container">
    <form class="form__style" method="POST" action="handle_update.php">
      Title : <input type="text" autocomplete="off" name="title" value="<?php echo $row['title']; ?>">
      Comment : <textarea name="content"><?php echo $row['content']; ?></textarea>
      <input type="hidden" name="id" value="<?php echo $row['id']; ?>" >
      <button>Send</button>
    </form>
  </div>
   </main>
</body>