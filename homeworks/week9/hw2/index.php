
<?php
    require_once('./conn.php');

?>
<html>
    <header>
        <title>主頁面</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="style.css">
    </header>
    <body>
        <nav class="bar">
            <input class="btn from__end" type="button" value="New"> 
            <input class="btn from__start" type="button" value="Begin"> 
            <input class="btn create__story" type="button" value="Create" onclick="location.href='message_board.php'"> 
            <input class="btn create__member" type="button" value="Log in" onclick="location.href='member_login.php'">
            <input class="btn create__member" type="button" value="Sign up" onclick="location.href='member_create.php'"> 
        </nav>
        <div class="wrapper">
            <h1>Walk here and write your story</h1>
            <div>
                <div class="stories">
                    <?php
                        $sql = 'SELECT * FROM messages_board ORDER BY created_at';
                        $result = $conn->query($sql);
                        if ($result->num_rows > 0) {
                            while($row = $result->fetch_assoc()) {
                                echo "<div class='story'>";
                                echo "<h2>" . $row['id'] . "</h2>";
                                echo "<div>" . $row['title'] . "</div>";
                                echo "<p>" . $row['content'] . "</p>";
                                echo "<div>" .$row['created_at'] . "</div>";
                                echo "</div>";
                            }
                        }
                    ?>
                </div>
            </div>
        </div>
    </body>
</html>