# 前言

以往在老師複習週的作業都是說，將前四週的心得寫下來，如果覺得複習很累，不寫也沒關係。

其實這不會發生在我身上，因為對我來說，寫心得和複習是同一件事

但往往會變成心得寫太多，code 寫太少，我的意思不是心得裡面的 code 太少，而是專注在寫 code 時間太少

一個是觀念，一個是實作技巧，兩者缺一不可，而後者的重要性不言可喻，太重要了，可以說寫 code 才是根本

不如這樣說，其實觀念要化為實作，都是要通過 coding。觀念講得太多，而沒寫太多 code，跟光說不練似乎沒有兩樣

所以這是未來的複習周 ( 也只剩下一次 ) 我需要去調整的。

**註 : 目前還是學習階段，觀念釐清可能會有錯誤，歡迎大家指點糾正，感謝 !**

-----

# Week9

## 資料庫基礎語法

- 建立資料庫

    ```sql
    CREATE DATABASE [資料庫名稱];
    ```
-----
- 刪除資料庫

    ```sql
    DROP DATABASE [資料庫名稱];
    ```
-----
- 使用資料庫

     ```sql
    USE [資料庫名稱];
    ```
-----
- 列出所有資料庫

    ```sql
    SHOW DATABASE;
    ```
-----
- 列出資料表內容

    ```sql
    DESCRIBE [資料表名稱];
    ```
-----
- 改資料表欄位

    ```sql
    ALTER TABLE [資料表名稱] CHANGE COLUMN [原欄位名] [新欄位名稱] [新欄位資料型態]
    ```
-----
- 新增資料表欄位

    ```sql
    ALTER TABLE [資料表名稱] ADD COLUMN [新欄位名稱]  [新欄位資料型態];
    ```
-----
- 刪除資料表欄位

    ```sql
    ALTER TABLE [資料表名稱] DROP COLUMN [新欄位名稱];
    ```
-----
- 刪除資料表

    ```sql
    DROP TABLE [資料表名稱];
    ```
-----
- 清空資料表 ( 保留結構、欄位與索引 )

    ```sql
    TRUNCATE TABLE [資料表名稱];
    ```
-----
**以下為重要 SQL 語法**

- 插入新欄位

    ```sql
    INSERT INTO [資料表名稱]([欄位1],[欄位2]...) VALUES([值1],[值2]...);
    ```
- 更新欄位資料

    ```sql
    UPDATE 資料表名稱 SET [欄位1]='[值1]',[欄位2]='[值2]',[欄位3]='[值3]'... [欄位n]='[值n]'
    WHERE [條件式];
    ```
    條件式 : 比如說 class = 'student', color = 'red'
-----
- 刪除資料欄位

    ```sql
    DELETE FROM [資料表名稱] WHERE [條件式];
    ```
    條件式 : 條件式與條件式之間可以用 AND 串聯

    ```sql
    DELETE FROM [資料表名稱] WHERE [條件式1] AND [條件式2];
    ```
    有 AND 當然也可以使用 OR

    ```sql
    DELETE FROM [資料表名稱] WHERE [條件式1] OR [條件式2];
    ```
    - 比對刪除

        ```sql
        DELETE FROM [資料表名稱] WHERE [條件式] LIKE '%[字串]%';
        ```
-----
- 查詢全部資料

    ```sql
    SELECT * FROM [資料表名稱];
    ```
    與 DELETE 一樣可以搭配條件式 WHERE

    ```sql
    SELECT * FROM [資料表名稱] WHERE [條件式];
    ```
    AND

    ```sql
    SELECT * FROM [資料表名稱] WHERE [條件式1] AND [條件式2];
    ```
    OR
    ```sql
    SELECT * FROM [資料表名稱] WHERE [條件式1] OR [條件式2];
    ```
-----
- 查詢**某一範圍**的欄位資料

    ```sql
    SELECT * FROM [資料表名稱] WHERE [欄位] BETWEEN [值1] AND [值2]
    ```
-----
- 查詢**單個**欄位資料

    ```sql
    SELECT [欄位名稱] FROM [資料表名稱];
    ```
-----
- 查詢**多個**欄位資料

    ```sql
    SELECT [欄位名稱1],[欄位名稱2].. FROM [資料表名稱];
    ```
-----
- 查詢**值為空**的欄位名

    ```sql
    SELECT * FROM [資料表名稱] WHERE [欄位] IS NULL;
    ```

- 查詢**特定筆數**資料

    ```sql
    SELECT * FROM [資料表名稱] LIMIT [n], [n 之後取幾筆];
    ```
    ```sql
    SELECT * FROM sample_table LIMIT 5, 20;
    ```
    就是從第 6 筆開始取 20 筆，所以是取第 6 ~ 第 26 筆
-----
- 查詢結果排序

    - 遞增

        ```sql
        SELECT * FROM [資料表名稱] ORDER BY [欄位];
        ```
        概念是比如這個欄位是 ID，有 1, 2, 3, 4....

        如此就是按照 1 2 3 4 排列

    - 遞減 ( 反向排列 )

        ```sql
        SELECT * FROM [資料表名稱] ORDER BY [欄位] DESC;
        ```
-----
- 比對字串來查詢欄位 ( 列出單一個 )

    ```sql
    SELECT [欄位] FROM [資料表名稱] WHERE [欄位] LIKE '%[字串]%';
    ```
-----
- 比對字串來查詢欄位 ( 列出所有欄位 )

    ```sql
    SELECT * FROM [資料表名稱] WHERE [欄位] LIKE '%[字串]%';
    ```
-----
**搭配 SELECT 使用的一些內建函式**

- 計算**筆數**

    ```sql
    SELECT COUNT([欄位]) 
    FROM [資料表名稱]
    WHERE [條件式];
    ```
    **條件式可以附加 IS NOT NULL 條件，表裏面有值的欄位**
    
    ```sql
    SELECT COUNT([欄位]) 
    FROM [資料表名稱]
    WHERE [欄位] IS NOT NULL;
    ```

    **搭配 DISTINCT 使用，可以不計入重複筆數，在算有幾種種類時頗好用**
    ```sql
    SELECT COUNT(DISTINCT [欄位]) 
    FROM [資料表名稱]
    WHERE [欄位] IS NOT NULL;
    ```
-----

- 取該欄位底下最大值 / 最小值

    ```sql
    SELECT MAX([欄位]) FROM [資料表名稱];
    ```

    ```sql
    SELECT MIN([欄位]) FROM [資料表名稱];
    ```

-----

- 欄位底下值加總

    ```sql
    SELECT SUM([欄位]) FROM [資料表名稱];
    ```

-----

- 欄位值總平均

    ```sql
    SELECT AVG([欄位]) FROM [資料表名稱];
    ```

## 基礎 php

基礎的 php 的程式邏輯概念在之前的 Week5 的複習周內容都有講到

if / for / function 等概念幾乎都是一樣的，這也是各個程式語言差不多相同的部分，所以這邊就不多談論基礎語法。而 echo / print_r() 等等，另外結尾一定要加 ; 

另外就是 -> 是使用該函式的屬性，這邊不要弄亂了

所以這邊需要特別提的反而是利用 php 連接資料庫時會用到的語法，這邊會開始介紹這週作業歸納出來的一些技能 :

**注意，重點是概念，而不是制式寫法，寫法因人而異，所以不要硬記程式碼**

- 資料庫連線

    通常我們會先寫一個 conn.php，因為在任何 php 要操縱資料庫都必須先連線，所以我們乾脆把連線這件事情放在 conn.php，然後在之後的各個檔案引入就好 ( require_once )

    ```php
    // 通常先設定好我的變數為何
    $server_name='localhost';
    $user_name='root';
    $user_password='';
    $db_name='claygao_board';

    $conn = new mysqli($server_name ,$user_name, $user_password, $db_name);
    // 一切的起源就是 mysqli 這個 class
    // 內中的伺服器名稱 / 帳號 / 密碼 / 與資料庫名的排序是固定的

    if ($conn->connect_error) { // connect_error 是內建的語法，表示連線Failed
        die('連線Failed');
    } else {
        echo '連線Success';
    }
    ```

    使用 require_once 引入 conn.php 如果Success就會持續執行，如果Failed就會停止所有連線，因為我們在 connect_error 的判斷式使用 die()，所以一旦連線Failed，後面的程序都不會執行，所以可以將它當作一道閘門。

    ```php
    require_once('conn.php'); // 放在第一行
    ```
    使用 require 的好處也是若引入的程序有錯誤，後面也會一併停止執行，對於需要處理 bug 時不失為一個很好的判錯方式。

- 用 php 對資料庫下指令

    首先我們要介紹的是「查詢」，這邊都知道 SQL 語法是 SELECT * FROM [資料表名稱]

    在 php 中對於對資料庫下指令的基礎做法是，我們會先將 SQL 語法放入一個變數之中，然後再將這個變數作為引數放入內建函式，這個內建函式會執行變數中的字串 ( SQL 語法 )

    具體作法如下 :

    ```php
    require_once('conn.php');

    $sql = "SELECT * FROM clay_table WHERE username = 'kai'";
    $result = $conn->query($sql); // 使用 query() 語法執行，同 mysql_query()，回傳執行語法的結果
    $row = $result->fetch_assoc(); // 與 fetch_array()、 fetch_row() 不同，回傳該我們找到的那一 row 並放入 $row;

    echo row['nickname']; // kaikai

    $result->free(); // 釋放記憶體
    $conn->close();
    ```
    延伸閱讀 : [fetch_assoc() 與 fetch_array()、 fetch_row() 的不同 By RicharLin.Tw](https://richarlin.tw/blog/php-mysql-fetch/)

    $result 會根據 $sql 的內容而有所不同，比如說 $sql 是 INSERT INTO ... / DELETE ... / UPDATE ... 就僅會回傳Success ( TRUE ) 或Failed ( FALSE )，這邊應該很好理解，根據你對資料庫做的動作決定回傳值

    ```php
    require_once('./conn.php');
    $title = $_POST['title']; // $_POST 用來接收前端 FORM 中 name 為 title 的 input/ textarea value
    $content = $_POST['content']; // 同上
    
    if ( empty($title) || empty($content)) {
        echo "<script>alert('標題和內容不可空白唷 !');parent.location.href='./write.php';</script>";
    } else {
        $sql = "INSERT INTO claygao_comments(title, content, nickname, id_number) VALUES('$title', '$content', '$nickName', '$id_number')"; // 變數以 '' 包起
        $result = $conn->query($sql); // 由於是 INSERT INTO，這邊的 result 將會是 TRUE / FALSE
        if ($result) {   
            echo "<script>alert('發文Success !');parent.location.href='./index.php';</script>";
        } else {
            echo "<script>alert('發文Failed，請洽管理員 !');parent.location.href='./write.php';</script>";
        }
        $result->free();
    }

    $conn->close();
    ```

    至於 $sql 中的語法格式正不正確，老師提供一個很好的建議，就是直接將語法丟到 phpMyAdmin 的 SQL 執行看是否Success就好。

- 其餘 php 語法

    另外這一周也有提到一些 php 常用語法，這邊一一介紹，這周的作業是寫一個簡易留言板，相對而言也代表我們僅用到了以下語法就可以做出基礎留言板的創建。

    ```php
    empty() // 判斷值是否為 null
    isset() // 判斷變數是否為空
    ```
    這邊原本在課程作業中使用沒有感覺，因為在作業中，我們用 empty() 判斷輸入值是否為空 ( null )，用 isset 判斷「變數有沒有被賦值」

    但其實兩者很像，所以我們特別提一下如何區分兩者，看看下列的測試

    ```php
    // $a 不設置
    $b = null;
    $c = 0;
    $d = 1;
    $e = "";
    $f = "abc";

    // 變數是否設置 ?
    echo isset($a); // $a 不存在 => FALSE 
    echo isset($b); // $b = null => FALSE
    echo isset($c); // $c = 0 => TRUE 
    echo isset($d); // $d = 1 => TRUE
    echo isset($e); // $e = "" => TRUE
    echo isset($f); // $f = "abc" => TRUE

    // 變數內值是否為空 ? 沒有就回傳 1 ( TRUE )
    echo empty($a); // $a 不存在 => TRUE
    echo empty($b); // $b = null => TRUE
    echo empty($c); // $c = 0 => TRUE 
    echo empty($d); // $d = 1 => FALSE
    echo empty($e); // $e = "" => TRUE
    echo empty($f); // $f = "abc" => FALSE
    ```
    有趣的是，對於 empty() 來說，$a 算是空值，而對 isset() 來說，$b = null 也算是變數沒有被賦值。

    所以歸納而言 :
    
        isset() 判斷的在於「變數有沒有被賦值」，沒有賦值的情況包括變數為 null，變數為 0、空字串或 false 都會被當作有被賦軸。

        empty() 則是判斷變數內的值，值為空的情況包括變數不存在。變數為 0、空字串或 false 都會被當作值為空。

    -------

    繼續來看

    ```php
    $_POST['input_name'] // 接收 method 為 POST 的 From input
    $_GET['input_name'] // 接收 method 為 GET 的 From input
    ```
    這邊就是後端來接收前端傳來的值，不論前端用 form / ajax 都是同樣用法。

    ```php
    header:('location: ./index.php') // 回傳 header 內容為 location : 路徑，如此會跳回首頁
    die(); // 中斷後面程序並顯示內容，() 內可以輸入訊息字串
    exit(); // 功能上同 die()
    ```
    基本功能上 die() 與 exit () 是相同的，只有在使用時有些許的不同：

    如果需要提前終止程序，使用 exit()
    如果判斷程序出錯，使用 die()

    但初學者可以先不用注意這類分別。

    ```php
    $conn->close(); // 關閉資料庫連線
    $result->free(); // 釋放記憶體空間 
    ```
    關閉資料庫連線是一個良好習慣，通常會放在腳本型頁尾 ( 雖然我的作業都沒有加QQ )
    釋放記憶體這邊就見仁見智了，不過我覺得這習慣應該也不錯就是了

-----

## Cookie 與 Session 初探

這邊經過四週作業的洗禮，總算比較明白 Cookie 與 Session 機制，所以這邊再重新闡述一次兩者。

首先，初學者應該明白的是，網路上討論 Cookie 和 Session 時，都沒有特地去講他們當下討論的是「機制」還是 Cookie 或 Session 本身，這樣很容易造成對象混淆，所以我們先從機制來講。

---

- **Cookie 機制**與 **Cookie**

    Cookie 機制，簡單來說就是產生前端與後端互傳的小紙條，而這張小紙條有個特性，那就是當前端發送 Request 到 Server 時就會「自動帶上」，這張小紙條我們稱之為 Cookie。

    根據自動帶上的特性，我們可以把一些必要資訊夾帶在 Cookie 裡面，以免在同一時期需要重複輸入，省下許多的工作。

    Cookie 本身可以由後端發送給前端，**但 Cookie 本身存放的位置會在「使用者」端**，由瀏覽器這邊發送給後端。這意味著使用者可以自行更改 Cookie 本身的內容，所以 Cookie 本身是不夠安全的。

    基本上 Cookie 本身就是一個容器，裝載的內容無所限制，儘管 Cookie 的內容分為 Name 與 Value，但是由於兩者的內容都可以自行更改，所以 Cookie 本身並不適合存放一些高機密資料，以免被盜取或偽造。
    
    另外就是 Cookie 本身的大小也有所限制，是 4096 字節左右，換算約為 4 KB。超過這個限制可能會造成 cookie 本身不被設置 

    **4096 Bytes 是建議，並非一個強制規範，只是低於 4096 Bytes 的 cookie 可以確保能在絕大多數瀏覽器運行，而目前在業界上，不同的瀏覽器對於 cookie 的限制也都不全是 4096 Bytes**

    *註 : 感謝老師修正提點*

---

- **Session 機制**與 **Session**

    SESSION 機制並非一開始就被內建在程式語言之中，這個機制的概念可以比擬「通行證」的設計，假設你是一位訪客，你造訪一棟大廈，警衛室發給你一張「通行證」，之後你只要出示這張通行證，我就會知道你是誰誰誰，並且我就認為你有通行的資格。

    並且當你確定結束這趟造訪的時候，你需要把通行證繳交回來，斷開你與通行證的關係。

    這邊有三個重點：
    1. 當使用者出示通行證的時候，我就會認為你是「誰」
    2. 當使用者出示通行證的時候，我知道你有「通行的資格」
    3. 當你確定「結束」這趟造訪的時候，「斷開」你與通行證的關係。

    第一點 : 也就是認證不認人，如果別人拿著你的通行證來驗證，我也會把那個人當作你，讓他通過。

    第二點 : 承上，只要你有證，你就有通行的資格。
    
    第三點 : 如同你造訪大樓一樣，離開時要換證，要把通行證還給警衛室，如此你就與這張通行證沒有關係了。

    那麼，第一個問題，如果這樣的功能要加入我們留言板網站的會員驗證，該怎麼做呢？

    核心關鍵「通行證」該如何實現？

    在 Week9 的作業中，我們的作法是將這個「通行證」用 Cookie 機制來實現，只要每次連線都可以帶上可以驗證我們身分的 Cookie，那我就不必每次都要輸入帳號密碼登入了。

    而由於「通行證」是大樓本身－也就是後端要發給我的，所以當我第一次登入Success的時候，後端若要發給我這張通行證 Cookie，需要使用以下語法：
    
    ```php
    if ( verify === true ) {
        echo "登入Success ! ";
        setcookie("member_id", "001", time()+3600*24); //setcookit(name,value,有效時間)
    }
    ```
    使用 setcookie 這個語法，我發送了一個名為 member_id 的 Cookie 給使用者，而這個 Cookie 過了 24 小時之後便會自動銷毀。

    而在驗證上，我做了一個最簡單的驗證，只要你名為 member_id 的 Cookie 值不為空，我就當作你擁有通行證，有通行資格。

    ```php
    // 使用者連線到網站

    require_once('./conn.php');

    if(!isset($_COOKIE["member_id"])) { 
        echo "目前是登出狀態";
    } else {
        echo "目前是登入狀態";
    }
    ```

    $_COOKIE["member_id"] 可讓後端接收名為 member_id 的 Cookie 的值，這邊可以看到我的驗證條件設定為「裡面有值」就能通過

    這樣當然是非常非常非常非常不安全的，前面有提過，Cookie 是可以由使用者自己創造與修改的，所以我只要在瀏覽的時候自行創造一個名為 member_id 的 Cookie，然後在 Value 裡面打幾個字，我就可以登入Success了。

    上述其實都已經實現了「第一點」與「第二點」，現在如果我們要斷開與此通行證的連結，要怎麼做呢？

    我們把這個斷開實作在網站的「登出」功能。

    在 Week9 中我們的做法是，當你按下登出時，發送一個同樣名為 member_id 但值為空的 Cookie，基於 Cookie 同名會覆蓋的特性，這份值為空的 Cookie 會覆蓋會員原先的那份 Cookie，如此等同於你擁有的 Cookie 無效。

    ```php
    // 按下登出之後

    setcookie("member_id", "", time()+3600*24); // 雖然是賦予""，但其實是空值，而非空字串
    header("Location: ./index.php");
    ```

    這就是我們最初設計的 Session 機制，後面幾週都還會再升級，請繼續往下看下幾週心得。

---

# Week11

這周加強了 php 的應用，在實作留言版的部分，對留言本身加了刪除與新增功能，方法是使用 GET 這個 Method，傳遞 id 值給 php 腳本作處理 ( handle updating or deleting )。另外就是製作分頁系統，這邊我採用了 SQL 語法 LIMIT 實作。

至於後端概念上，這週教授了非常重要的密碼學應用 －　雜湊與加密。

所謂雜湊，就是使值經過雜湊演算法運算之後產生出一個新的值，不論輸入值長短，輸出都會是固定的長度，另外兩個不同的輸入值經過雜湊後，輸出的值為相同稱為「碰撞」，但機率極低。

而加密則是經過「密鑰」運算過後，產生出新的加密值，因為每一組值都不一樣，經過相同的密鑰加密之後的結果也會不一樣，所以不會有碰撞的問題。

由於是透過密鑰，所以加密是可逆的

*註 : 感謝老師幫忙修正*

參考文獻 : https://blog.m157q.tw/posts/2017/12/25/differences-between-encryption-and-hashing/

---

## php 中的雜湊函數 hash() 與 password_hash()

- hash()

    ```php
    echo hash('sha256','mypassword');
    ```

    hash 有兩個參數，一個是我要使用哪種 Hash 演算法 ( 演算法介紹請參考這裡 )，後者是要被 Hash 的值。

    而這邊其實還有第三個參數，是一個 Boolean，若為 Ture 則輸出二進位的資料，若為 False，則輸出小寫十六進位資料。

    ---

- password_hash() 與 password_verify()

    ```php
    $passwordHash = password_hash('mypassword', PASSWORD_DEFAULT);
    ```
    password_hash() 這個函數會回傳一個先被「隨機加鹽」再 Hash 後的值，所以其實這個函數內建加鹽。第一個參數放要被 Hash 的值，第二個參數是要使用哪種 Hash 設定。PASSWORD_DEFAULT 則是使用預設的 Hash 法，但要注意既然是 php 預設，則不同版本的 php 預設也都會不同。

    **要注意同樣的值在每一次的 password_hash() 的結果都會不同，所以需要 password_verify() 來作驗證**

    ```php
    $input = '123';

    $passwordHash = password_hash($input, PASSWORD_DEFAULT);

    $isVerify = verify_password($passwordHash,'123');
    ```

    verify_password 回傳一個 Boolean，從上圖很清楚知道，第一個參數放的是要比對的　Hash Value，第二個參數要放的是比對值。若比對Success回傳 Ture，否則為 False。

    **補充 : 若要看 Hash Value 的資訊可以使用 password_get_info**

    ```php
    $passwordHash = password_hash($input, PASSWORD_DEFAULT);

    var_dump(password_get_info($hash)); // 輸出一 Array
    ```

    參考資料 :
    
        - https://www.itread01.com/articles/1497980291.html
        - https://ithelp.ithome.com.tw/articles/10193762

-----

## 更進一步的 Session 機制

回顧 Week9 我們給予使用者 Cookie，讓使用者下次瀏覽網頁時自動帶上這個 Cookie 讓後端作驗證，但驗證的方法太糟糕，非常不安全，因為當時我們採用的是只要該 Cookie 內的 Value 不為空就能算是登入狀態，所以這一週我們要發送一組 Cookie 驗證碼給使用者，讓使用者帶上這份驗證碼讓後端進行驗證，若驗證Success，則為登入狀態。

在老師的教學中，建議同學可以使用 uniqid() 這個函數生成一個唯一 ID，夾在 Cookie 內給使用者，並同時將這個唯一 ID 存入一個我們新創的資料表中。

```php
if ( verify === true ) {
    echo "登入Success ! ";
    $uniqid = uniqid();
    setcookit("member_id", $uniqid, time()+3600*24);
}
```
然後使用者登入時帶上這個 Cookie Value 時，則將該值與我們資料表中該會員擁有的唯一 ID 作比對。

但我當時會錯意，用了一個很奇怪的方法，但老師沒有指錯。我的作法為直接將使用者的 username 拿來作 password_hash()，而不是使用 uniqid()，不過存入資料表與之後驗證的步驟是差不多的。

*註 : 這邊不小心打成 uniqlo 被老師發現了，感謝老師提點*

-----

## Week11 結論

總歸而言，這週的結論就是當我們把用戶的密碼 hash 過並放入資料表之後，即使資料庫密碼被破解，駭客也無法知道使用者的密碼，至少在短時間內幾乎是不可能破解密碼，安全性增強許多。

這邊也告訴開發者與一般使用者一個相當重要的觀念，就是**安全的網站是不會存明碼的**，這也是為什麼在大多數網站中，提供使用者找回忘記密碼的功能往往是將使用者導向**變更密碼**而非告訴你舊密碼，因為該網站並不會知道你的舊密碼為何。

另外就是這週新增了對 Cookie 內的值作驗證，但是在這個機制之下，**若使用者的 Cookie Value 被盜走，還是可以被偽造使用者身分登入**。

歸納一下，在 Week11，我們從後端發送 Cookie 給登入的使用者，然後在限定時間內使用者若再次瀏覽網站，會自動帶上該 Cookie，由後端驗證該 Cookie 的值，比對資料表，若比對Success，則驗證通過，使用者則為登入狀態。

---

# Week12

這一週整體都是在談論 **「資訊安全」**，課程重點放在資訊安全的三大攻擊類型，這邊逐個介紹

---

## SQL Injection

顧名思義是利用 SQL 語法的結構，使資料庫執行非預期性的判斷。

通常我們會在前端輸入資料，並使後端接收，按照 Week9 的基礎 php 連接資料庫的內容，我們在後端的作法是這樣的：

```php
require_once('conn.php');

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users_table WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result) {
    $isLogin = ture;
} else {
    $isLogin = false;
}

$conn->close();
```

最常見的手法是我於 username 輸入 
```sql
'OR 1=1 --
```

這時候就可以看成是這樣
```php
require_once('conn.php');

$username = $_POST['username']; // 輸入為 'OR 1=1 --
$password = $_POST['password'];

$sql = "SELECT * FROM users_table WHERE username = ''OR 1=1 -- AND password = '$password'";
$result = $conn->query($sql);

if ($result) {
    $isLogin = ture;
} else {
    $isLogin = false;
}

$conn->close();
```

可以看到 SQL 語法被改為 username='*' OR 1=1*，也就是第一個判斷條件的內容被「'」關閉了，而另外一個條件 1=1 又永遠為 Ture，而「--」又會將後面的 AND password = '$password' 註解掉。

所以在 query 執行時，相當於是在資料庫執行
```php
"SELECT * FROM users_table WHERE username = ''OR 1=1
```
所以會Success，所以會執行登入結果。

從這邊可以了解，程式的執行方式為

變數賦值 => 變數放入字串 => 賦予 $sql 字串值 => 執行 $sql 

基於這一點，有一個方法可以預防，那就是[**預處理器**](https://en.wikipedia.org/wiki/Prepared_statement?source=post_page---------------------------)

預處理器提供了 Prepared statement，也就是說我可以先準備一個可以執行資料庫語句的模板，在要執行該 SQL 指令時，再將我要查詢或更新時的目標代入這個模板即可。

概念上不難，畢竟 prepare 本來就是預先準備的意思，於是我們可以改寫成以下：

```php
require_once('conn.php');

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users_table WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result) {
    $isLogin = ture;
} else {
    $isLogin = false;
}

$conn->close();
```

如此做的話，即使輸入中含有「'」這樣的字符，在經過預處理器之後也不會模板中的語法融為一塊，就可以達成我們預期達到的效果。

- mysql_real_escape_string()

    我們懂了預處理器怎麼用，但卻不知道原理為何，這邊要先介紹一個落落長的函數，叫做　mysql_real_escape_string()

    這個函數顧名思義是跳脫字元，會回傳轉義之後的字符，可以轉換的內容包括 「\」、「'」與「"」等等

    將轉義後的字元儲存在變數中，納入 SQL 語句中執行，在某種程度上也能阻擋 SQL Injection，但當然不一定能百分之百

    ```php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $username = mysql_real_escape_string($username);
    $password = mysql_real_escape_string($password);
    $sql = "SELECT * FROM users_table WHERE username='" . $username . "' AND password='" . $ppassword . "'";
    $conn->query($sql)
    ..
    ..
    // 以下略
    ```

    而在預處理器的使用上，`prapre` 設定模板並會在**綁定值**之後會直接對整個語句做 `mysql_real_escape_string()`，如此以避免 SQL Injection

- 何時該使用預處理器 ?

    先講結論 : 即使你可能還沒完全弄懂，但還是建議將**所有執行 SQL 語法的模式**都改為預處理器

    為什麼 ? 因為實際上當然不只有 `'OR 1=1 --` 這樣的攻擊手段，在第十二週的作業檢討之中，老師有親自示範一些超乎想像的 SQL Injection，只要一處被攻破了，整個網站都會淪陷，與其考慮太多的 injections，不如直接換成預處理器在 php 中執行 SQL 語句。

    ---

## XSS (Cross Site Scripting)

XSS 在中文稱為**跨站式腳本攻擊**，大意就是使用者從前端插入 Javascript ( \<script\> )，當用戶瀏覽該網站時，嵌入在其中的 Javascript 便會被執行，達到攻擊目的。

依據攻擊方式的不同，XSS 大致被分為三種類型 :


- 反射型 XSS

    這邊簡單講一下事件順序

    1. 通常發生在攻擊者傳一個**惡意連結**給使用者
    2. 當使用者點擊這個惡意連結時，發送 Request，將這個 XSS code 發送給後端
    3. 後端處理過後返回 Response 給使用者
    4. 瀏覽器解析這段帶有 XSS Code 的資料後觸發漏洞
    5. 可能會導致用戶的 Cookie 遭到竊取，或者彈出惡意視窗等等。

    反射型 XSS 屬於一次型的攻擊，相較於下方介紹的儲存型 XSS，危害相對要小，但仍不可不慎

- 儲存型 XSS 

    有點類似 SQL Injection 的概念，在內容框輸入\<script\>，瀏覽器在渲染數據的時候會一併把你剛剛輸入的\<script\> 轉化為程式的一部份，比如說在留言框輸入

    ```php
    <script>alert('attack!')</script> 
    ```

    瀏覽器渲染時就可能會看成這樣

    ```php
    <div class="messages_board">
        <div class="message">
            <script>alert('attack!')</script> // 剛剛輸入的內容
        </div>
    </div>
    ```
    
    於是就會彈出直這樣的一個視窗，干擾使用者，除非後端資料庫刪除或更改這段留言，否則漏洞就會一直存在，所以儲存型 XSS 又被稱為**持久型 XSS**

    但當然攻擊者會做許多比 `alert('attack!')` 更惡劣的事情。這類攻擊型態通常被拿來盜用使用者的 Cookie 與管理員權限

- 預防 XSS

    其實不管是反射型 XSS 還是儲存型 XSS，都有以下這個共通點 :

    > XSS 的本質就是讓對方瀏覽器執行攻擊者植入的 Javascript

    所以在後端的預防，就是想辦法把這些會被誤會為程式碼一部份的字元跳脫，這時候我們使用下列這個語法：

    ```php
    htmlspecialchars($htmlsanitize,ENT_QUOTES,'utf-8');
    ```
    - 第一個參數是代入任何你要處理的字串

    - 第二個參數代表對引號的處理方法，共有三種：
    
        - ENT_COMPAT：為預設值，只轉換雙引號「＂」，不管單引號「'」
        - ENT_QUOTES：雙引號「＂」與單引號「'」都要轉換。
        - ENT_NOQUOTES：都不轉換，給它放水流。

    - 第三個參數代表我要轉換的編碼，這邊是用萬國碼 UTF-8

   -  第四個參數這邊沒有打上去，是可選的參數，預設是轉換所有的 HTML 標籤
    
    *在這週複習週額外找資料才知道，其實 htmlspecialchars() 本身已經是挺高級的跳脫字元函式，若要自己土炮一個則是使用遞迴來跳脫`<script` 這個標籤，甚至是逐個字元來跳脫。*

- 第三種 XSS : DOM-Based XSS

    第三種 XSS 類型叫做 DOM-Based XSS，與上述兩種類型的差異是此類 XSS 與後端無關，純粹是當使用 Javascript 操縱 DOM 元素時所產生的漏洞，比如說我設置一個 input 可以輸入內容給另一個 DOM 元素調用，就可以利用這個 input 輸入 XSS Code

    但此類型 XSS 攻擊比較少見，現今危害性較高且較為常見的類型還是以前兩種攻擊為主。


延伸閱讀 : 
    - https://www.jianshu.com/p/a7255e6ff844
    - https://www.zhihu.com/question/21289758

---

## CSRF 跨站請求偽造 ( Cross Site Request Forgery )

    如果說 XSS 是利用用戶對網站的信任，那麼 CSRF 就是利用網站對用戶瀏覽器的信任。

    在使用者第一次登入時，網站後端會給予使用者 Cookie，若使用者在該權限尚未過期或尚未登入的情況下不經意點選其他惡意連結，則可能會做一些「非預期性的執行動作」，也就是說攻擊者並不需要竊取使用者的資訊，而是利用瀏覽器特性**誘使**使用者去執行攻擊者想要使用者去執行的事。

    目前比較風行的一種方法是使用 token，概念就是提供一種不會存取在使用者 Cookie 中的額外驗證方法，如手機簡訊驗證就是一例。既然這個驗證令牌不會存在 Cookie 中，攻擊者就無法偽造。

---

## Week12 心得

這一週的內容其實要說很多可以非常的多，因為整個資訊安全的學問太大了，如同 Week11 的 Hash 演算法與密碼學等概念，在太短的時間內要觸及所有學問可以說是非常非常困難的一件事情。

所以即使學習到現在，我都只敢說目前僅僅是拾取了敲門磚，所以我認為在這一週重在「概念」與「攻擊原理」，而老師為了這一點所以實作了不少影片與 live coding，目的就是要我們在攻擊者與開發者角度中來回審視，了解當前端開始攻擊時，後端做了什麼樣的處理。

所以我相信即使課程結束之後，本週提到的概念還會繼續影響我們，也就是說，即使未來步入職場，對這類資訊安全的概念都要特別敏銳，不可不慎。

---

# Week13

這一週主要教授 jQuery 與 Boostrap，這兩套都是現下主流的套件與框架，所以這週再一次影響了我們在編寫前端的方式。

搭配這一週的主題，也特地看了一些補充資料，這一週其實沒有太多可以講的概念，因為概念就是先前的 Html、CSS 與 Javascript

所以這週的複習重點我放在 Promise 與一些 jQuery 與 Boostrap 的知識補充

## Promise 

這週很重要的概念，當然還是先看過[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)的介紹，Promise 是在 ES6 才被正式加入，這也意味著瀏覽器的支援性大大提升，除了 IE

Promise 其實並不複雜，就是用來解決「非同步」函式的執行順序寫法，可以用比較直覺且簡潔的方式處理，所以其實 Promise 在概念上是一個既有功能上的解決方案，基本上是一個好用的工具。

```javascript
function asyncMain(){
    return new Promise(function (resolve,reject) {
        console.log('準備階段');
        resolve("Success");　// 若成功則回傳 () 中的內容給 .then 內的 function 作為引數
        reject("Failed"); // 若失敗則執行 () 中的內容給 .catch 內的 function 作為引數
    });
}
asyncMain();
```
輸出
```
準備階段
```

- .then 與 .catch

    上述 // 中的內容可以用下列例子來明白

    ```javascript
    function asyncMain(){
        return new Promise(function (resolve,reject) {
            console.log('準備階段');
            resolve("Success");　// 若成功則回傳 () 中的內容給 .then 內的 function 作為引數
            reject("Failed"); // 若失敗則執行 () 中的內容給 .catch 內的 function 作為引數
        });
    }
    asyncMain().then(function (msg) {  // asyncMain() Success回傳"Success"，then 的參數 msg 為"Success"
        console.log(msg); // 輸出"Success"
    }).catch(function (msg) {
        console.log(msg); 
    });
    ```
    輸出
    ```
    準備階段
    Success
    ```

- 鍊式用法

    ```javascript
    function asyncMain(msg){
        return new Promise(function (resolve,reject) {
            console.log(msg + ": 準備階段");
            resolve(msg + ": Success");　
            reject(msg + ": Failed"); 
        });
    }
    asyncMain('Step1').then(function (msg) { 
        console.log(msg);
        return asyncMain('Step2')
    }).then(function (msg) {  
        console.log(msg);
        return asyncMain('Step3')
     }).then(function (msg){
        console.log(msg)
     })
    ```
    輸出
    ```
    Step1 : 準備階段
    Step1 : Success
    Step2 : 準備階段
    Step2 : Success
    Step3 : 準備階段
    Step3 : 成功
    ```
   
參考資料 : https://segmentfault.com/a/1190000015341145

*註：上面的筆記都是複寫上面這篇參考資料的內容，所以其實只提供個人複習 Promise 結構用*

在 jQuery 的部分，類似用法的部分可以在 `$.ajax` 看到

```javascript
function islogin() {
  $.ajax({
    type: 'GET',
    url: './handling/verify.php',
    // Response 的結果會被放在 resp 之中
    success(resp) {
      const status = JSON.parse(resp);
      loginStatus = status.islogin;
      currectUser = status.currect_user;
    },
  });
}
```
---

## jQuery

[基礎內容](http://youmightnotneedjquery.com/#has_class)

    提倡某些功能你不一定需要 jQuery 的網站，但由於在功能上比對 Vanilla Javascript 與 jQuery 的部分很清楚，所以適合初學者參考用

[jQuery 基本指令大全](http://jsgears.com/thread-63-1-1.html?source=post_page---------------------------)

    雖然是十年前的文，但對於基礎來說還是十分值得參考

對於 jQuery 這邊我覺得就沒有什麼需要多做筆記的了，重點就是在寫 code 的時候累積經驗，相比之下我覺得 Promise 與 sync / async 的概念更為重要

---

## Bootstrap

Bootstrap 本質就是一套框架，但最近研究一下才了解原來 Boostrap 裡面用了不少 !important，沒錯，就是在開發時使人深惡痛絕的 !important

所以深深感覺在大量套用 Bootstrap 之前，必須要對 CSS 權重的概念十分清晰，然後去研究 Bootstrap 一下每一種類的 class 分別是影響到什麼部分

比如說在第十三週的作業，光是引入 Bootstrap 就跑版了 ( 因為有跟套件的 class 有重複到 )，那其實很難想像未來如果在基礎不夠扎實的情況下使用 Bootstrap 而造成維護上的困難

所以我就在思考，Bootstrap 到底好在哪 ?

感覺其實大部分 ( 除了手風琴等較大型的套件以外 ) 自己應該都可以手刻出來，只是程式碼不一定乾淨

照目前的學習速度看來，未來如果自己的手刻能力很強了，其實對 Bootstrap 的依賴性就降低了，很可能只剩下「快速」的這個優點而已

那麼結論就是，手刻和 Bootstrap 都應該要學，要熟練，不能單一依賴一方，但要使用哪一種，可能就要看專案的需求與時限而定了。

---

## Session 機制最終站

在 Week11 中，我們建立了一個資料庫機制存放通行證，然後藉由 Cookie 實現

然而，其實 php 引擎有內建語法可以幫我們實現這個機制，所以其實我們不用建立資料庫，也可以存放通行證資料

這個語法就是 `session_start()`，若要使用，必須放在網頁最上方，或者還沒有任何輸出之前

```php
if ( verify === true ) {
    session_start(); // 啟動 Session
    $_SESSION['member'] = true; // 註冊登入者為會員並且使其為 true
    $_SESSION['id_number'] = $row['id_number']; // 註冊登入成功的會員帳號與暱稱
    $_SESSION['nickname'] = $row['nickname'];
    echo "<script>alert('登入成功 !');parent.location.href='../index.php';</script>";
}
```

當 session_start() 被執行時，會正式啟動內建 Session 機制，並且自動發送一個名為 PHPSESSION 的 Cookie 給使用者

這個名為 PHPSESSION 的 Cookie，其 Value 是一組隨機亂數產生的亂碼，這一點就與我們先前使用 uniqid() 的方法不謀而合

*PHPSESSION 是該 Cookie 的預設名稱，可以於伺服器這邊更改*

另外，我可以使用 $_SESSION 建立屬於這組 Session 的相關資料，如該使用者的帳號與暱稱等等，都可以自定義儲存在後端數據中

那要如何驗證呢 ? 這邊同樣要先使用 `session_start()` 

```php
isLogin = false; // 先宣告是好習慣，避免全局變數汙染

session_start();
  if (isset($_SESSION['member']) && $_SESSION['member'] === true) {
    isLogin = true;　// 成功登入狀態
  } else {
    isLogin = false; // 非登入狀態
  }
echo json_encode($arr);
```

那要如何登出呢 ?

只要在後端這邊銷毀這個通行證即可，也就是銷毀這個 Session，下列兩種方法都可以

```php
// 刪除 Session 變量
unset($_SESSION['member'])

// 刪除整份的 Session
session_destroy();
```

這邊就是銷毀通行證的方法，下次用戶再輸入帳密登入時再發新的給他就好

另外就是 Session 也可以設置存在時間，這樣可以更完善通行機制，這邊就不多做說明了。

---

## Week13 心得

我覺得這一週就是開啟你對 jQuery 和 Bootstrap 的認識，然後藉由作業讓你去使用這些工具並了解背後的道理 ( 以網格系統為例 )

另外就是在閱讀課外資料後，才了解為什麼 Week13 的 hw1 與挑戰題是分別要你自製網格系統，並在你的留言板上套用你自製的網格

因為其實在某種程度上，你自製的網格系統可能還比 Bootstrap 提供的好用，又或者說**更合適**

另外就是 Promise 即使上面筆記重寫了一遍，目前也還沒有太多的實戰應用，雖然理解一週比一週還深，感覺真的除了作業，還要多花時間寫 Side Projects 了

只是 Promise 的出現會逼迫著我去複習 sync / async，然後藉此又去 Google 了 call stack 與 queue，然後再回溯最基本的 Javascript 概念 : 全域環境與區域環境等....

接下來談談作業

Week13 作業是有史以來花我最多時間的作業，原因是因為太久沒有回前端，再者就是重構的確非常耗時，尤其是把整個由後端處理好交給瀏覽器的東西，改成由前端去撈後端回傳的資料 ( 這邊使用 JSON )。再者，雖然從 Vanilla JS 改為 jQuery 簡潔了不少程式碼，但概念上以及語法上的轉換都還在適應與學習，所以格外耗時。

所以我覺得在整個課程之中 Week13 可以當作一個指標，我自己也有察覺，Week13 的交作業曲線絕對不會像前幾週一樣有相同的陡度。

---

# Week14

這週就簡單寫寫，這邊先謝謝老師，也謝謝 Gandi 的贊助 ( 雖然我還沒申請贊助 XD )

關於 Week14 心得我有另外開一個筆記空間，[這邊](https://github.com/ClayGao/My-study/tree/master/Lidemy/week14)可以直接連過去

因為這週我把筆記都搬到 GitHub 了，覺得已經是上週寫過一次的東西，複習週就不贅述了 QQ ( 其實是懶得寫 )

另外這週有稍微提到但我在 Week14 沒有完全完成的還有防火牆，這邊也是我在之後要去加強的。

---

# Week15 總結

其實我這篇大部分都是在平日完成的，這週六日我進入了所謂怠惰期，所以產能並不高

另外就是我覺得自己在外面使用筆電時的學習效率遠比在家使用桌電還高，所以就像老師說的，選對環境比在那邊ㄍㄧㄥ怎麼堅持更重要

那我覺得自己目前比較弱的還是在資訊安全與 Promise 這一塊，就像開頭說的，以課程進行到目前來看，實作與 Code 寫得的確是少了一點

那為什麼每次複習週都幾乎要把之前教的東西都寫一次，我覺得對我來說，這樣的做法可以**強迫我去釐清之前的概念與所學**

比如說像 Week9 這個部分，把所有的 SQL 語法都在寫一次，除了可以幫助我全部再 review 一次以外呢，對於我之後查 SQL 也有不錯的助益

雖然很花費時間，但我覺得挺實在的，因為寫下多少幾乎就等於複習多少，像我 Week14 只丟個連結在那邊其實就是擺明了我剛學完懶得複習 XD

這邊對於課程還有一些感想，詳見如下

---

## 對於後端課程的感想

其實之前在老師直播時，有個問題是第九週學得很崩潰，是我提的，但學到現在覺得 php 的語法也習慣了

總歸一句就還是練習的多寡而已，像現在我就覺得 jQuery 比 php 還累，所以完全就是學習曲線的問題

後端課程其實老師講解得很清楚也很多了，我也很高興自己可以還能學會這麼多關於後端的知識，而且這樣可以自己獨立完善一個 Side Project 覺得很棒

而課程的走向也在第十四週部署網站時達到新的里程碑，可以說是有始有終

自己給予的評價是很高的，課程的內容會引領你知道 Google 的關鍵字該從哪裏下手，所以學習路線上沒有什麼問題

---

## 為什麼複習週心得要特地講 Cookie 和 Session ?

因為我就是搞混的那一個，因為我把 Session 機制和 php 內建的 Session 相關語法搞混了

所以一直反反覆覆相當混亂，傻到不知道老師是要引領我們一步一步建立並改進後端 Session 機制，直到最後進化成使用 php Session

我可以明白老師這麼做的原因，就如同我在前幾周的作業簡答題有寫到 Session 在業界也是循序漸進的

而這樣循序漸進的過程，也可以更好地讓學生們明白我們為何需要 Session，以及背後運作的原理

於是這週心得我特地又寫了這一部份，加深自己的基礎概念

---

## 與前幾週的不同

「自學」本來就是程式導師實驗計畫中很重要的一部分，老師提供的是一個~~老司機~~引路人角色，

而在這四週我可以很明顯的感受到我們需要額外找資料的部分越來越多，其實真的不錯

因為這一部分也是訓練自己 Google 與整理資訊的能力，而且如果真的找不到，也可以跟老師提問，老師也會幫忙解答

實在不可能說 jQuery 從頭教一遍，這很沒意義，因為 Javascript 基礎已經打好七八成了，程式概念重的是一理通，百理明

所以我覺得課程編排在這邊是不錯的，在課程漸漸邁入尾聲的情況下，慢慢讓各個學生獨立出來

比如說有些認真的同學在第九週就在搞 OOP 了，我比較不上進，所以還沒開始搞

從這一點看來，如何耕耘，如何收穫的部分在學習成果就呈現得非常顯著

不過反著來說，每個學生的學習效果落差可能就比較大，很難說大家都保持在差不多的水平

所以我就在想，「作業」應該就是個篩選器，只要能過篩，基本上就是把學生的實力拉到一個老師希望的水準

至於還沒辦法過篩的同學，相對而言就要將這些成本付諸在時間上面，這也可以解釋為何有些同學在某幾週卡了，他們也正在努力拉升實力

總而言之，也許十月中也不會算是真正的結束，而是另一個開始。

---

## 其他想法

程式導師實驗計畫帶給我最大的改變其實很明顯，那就是 Soft_Job 板內文可以看得懂了

另外我個人加的一些程式語言討論群組，也可以漸漸看得懂他們在講什麼

但我始終相信自己離轉職還有一段距離，我會持續地追下去 ( 醫科真的狂QQ )

那另外關於老師的前端~~老司機~~引路人計畫，其實我內心是很想參加的，只是我並不要求自己能趕上第一批 ( 當然以目前實力也不太可能啦 )

因為我覺得第一批有第一批的好，而後進的人也有後進的好處，不必操之過急，穩紮穩打比較重要

大概就是這樣了，有後續想問的問題會在 PR 上面提問





