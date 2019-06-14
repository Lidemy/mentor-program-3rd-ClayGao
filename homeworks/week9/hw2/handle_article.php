<?php
    require_once('./conn.php');

    $title = $_POST['title'];
    $content = $_POST['content'];



    if (empty($title) || empty($content)) {
        die('有空格沒有填寫 !');// echo $id . '' . $password  . '' .  $password2  . '' . $name ;
    } else {
        echo "註冊成功 ! ";
    }

    // 傳送資料至資料庫

    $sql = "INSERT INTO `messages_board`(`title`, `content`) VALUES ('$title', '$content')";
    echo $sql;

    $result = $conn->query($sql);

    if ($result) {
        echo "Success!";
        header('Location: ./index.php');
    } else {
        echo "Failed!";
    }
?>