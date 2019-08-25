<?php
require('utils.php');

$reqMethod = $_SERVER['REQUEST_METHOD'];
//$isUpdating = $_POST['updatingID'];

switch($reqMethod) {
    case 'GET' :
        get_comments();
        break;
    case 'POST' :
        if(!isset($_POST['updateID'])) {
            add_comments();
        } else {
            update_comments();
        }
        break;
    case 'PATCH' :
        finish_comments();
        break;
    case 'DELETE' :
        delete_comments();
        break;
    default:
        break;
}

?>