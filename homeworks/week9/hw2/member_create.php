<html>
    <header>
        <title>主頁面</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="sign_up.css">
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
                <div class="sign__up">
                    <div class="register">
                        <form  method="POST" action="./handle_register_form.php">
                            <div>請輸入帳號 : <input name="ID_number" /></div>
                            <div>請輸入密碼 : <input name="password" type="password" /></div>
                            <div>再輸入密碼 : <input name="password2" type="password" /></div>
                            <div>請輸入暱稱 : <input name="name" /></div>
                            <div><input type="submit" value="送出" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>