<?php
  require_once('./handle_identify.php');
?>

<html>
  <header>
    <title>主頁面</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css">
  </header>
  <body>
    <div class="wrapper">
        <h1>Walk here and write your story</h1>
        <div class="stories">
        <?php
        $sql = "SELECT * FROM claygao_comments ORDER BY created_at DESC LIMIT 50";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
            echo "<div class='story'>";
            echo "<h2> 第 " . $row['id'] . " 樓</h2>";
            echo "<h2> 作者 :" . $row['name'] . "</h2>";
            echo "<div>" . $row['title'] . "</div>";
            echo "<p>" . $row['content'] . "</p>";
            echo "<div>" .$row['created_at'] . "</div>";
            echo "</div>";
            }
        }
        ?>
        </div>
    </div>
  </body>
</html>