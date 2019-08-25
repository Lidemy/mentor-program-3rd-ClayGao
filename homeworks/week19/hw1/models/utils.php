<?php
    require_once('./conn.php');

    function get_comments(){
        global $conn;
        class GetComments {
            public $todoID;
            public $todoTitle;
            public $todoComment;
            public $todoLevel;
            public $todoStatus;
        }
    
        $stmt = $conn->prepare('SELECT * FROM todo_comments');
        $stmt->execute();
        $result = $stmt->get_result();
    
        while($row = $result->fetch_assoc()) {
            $getComments = new GetComments();
            $getComments->todoID = $row['todo_id'];
            $getComments->todoTitle = $row['todo_title'];
            $getComments->todoComment = $row['todo_comment'];
            $getComments->todoLevel = $row['todo_level'];
            $getComments->todoStatus = $row['todo_status'];
            $arr[] = $getComments;
        }
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

    function add_comments(){
        global $conn;
        $todoTitle = $_POST['todoTitle'];
        $todoContext = $_POST['todoContext'];
        $todoLevel = $_POST['todoLevel'];
        
        $stmt = $conn->prepare('INSERT INTO todo_comments(todo_title, todo_comment, todo_level, todo_status) VALUES(?,?,?,?)');
        $stmt->bind_param("sssi", $todoTitle, $todoContext, $todoLevel, $todoStatus = 0);
        if($stmt->execute()) echo "<script>alert('ok');</script>";
    }

    function update_comments() {
        global $conn;
        $updateID = $_POST['updateID'];
        $updateTitle = $_POST['updateTitle'];
        $updateContext = $_POST['updateContext'];
        $updateLevel = $_POST['updateLevel'];

        $stmt = $conn->prepare('UPDATE `todo_comments` SET todo_title = ?, todo_comment = ?, todo_level = ? WHERE todo_id = ?');
        $stmt->bind_param("sssi", $updateTitle, $updateContext, $updateLevel, $updateID);
        $stmt->execute();
    }

    function finish_comments() {
        global $conn;
        $id = $_GET['taskid'];

        $stmt = $conn->prepare("UPDATE `todo_comments` SET todo_status = ? WHERE todo_id = ?");
        $stmt->bind_param("ii", $boolean = 1, $id);
        if($stmt->execute()) echo "<script>alert('ok');</script>";
    }

    function delete_comments() {
        global $conn;
        $id = $_GET['taskid'];

        $stmt = $conn->prepare('DELETE FROM `todo_comments` WHERE todo_id = ?');
        $stmt->bind_param("i", $id);
        if($stmt->execute()) echo "<script>alert('ok');</script>";
    }