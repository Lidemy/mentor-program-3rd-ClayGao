## 請說明 SQL Injection 的攻擊原理以及防範方法

- SQL Injection 攻擊原理

    SQL Injection 是利用一些 SQL 語法中內建的規範，將沒有經過字元檢查的使用者輸入代入變數並在後端利用 Mysql Query 時一併執行，最後的結果就是系統執行了超出設計人員預期的 SQL 語法，導致不同的結果。

    主要的原因就是沒有針對使用者輸入做字元檢查，所以資料庫伺服器就會認為是正常的 SQL 語法並執行。

    在第九週與第十一週的作業之中，我們對於使用者登入是類似這樣的形式：

    ```php
    $idNumberSignIn = $_POST['username'];
    $passwordSignIn = $_POST['password'];
    
    $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '$idNumberSignIn' and `password` = `$passwordSignIn`";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    ```

    如果 $_POST['username'] 與 $_POST['password'] 是 clay 與 1234 的話，這樣執行的確沒有什麼問題

    但如果 $_POST['username'] 與 $_POST['password'] 我輸入的是  'or 1=1 /*  與 123 的話，問題就大得多了

    你可以想像懲會變成這樣

    ```php
    $idNumberSignIn = $_POST['username'];　// 'or 1=1 /*
    $passwordSignIn = $_POST['password']; // 123 或是任意值其實都可以
    
    $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '$idNumberSignIn' and `password` = `$passwordSignIn`";

    //可以看成
    $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '' or 1=1 /*' and `password` = 123";

    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    ```

    $sql = "SELECT * FROM `claygao_users` WHERE `id_number` = '' or 1=1 /*' and `password` = 123"; 

    由於　/* 在 Mysql 語法代表的是註解，所以 /* 後面的字串沒有執行，而 1=1 成立，所以在執行 $sql 時會直接通過搜尋。

        - 補充：除了「 /* 」以外，還有「 -- 」與 「 # 」

- 如何預防 ?

    所以我們需要 prepare statusment，中文可以翻作預處理器

    預處理器的概念很簡單，白話來說，就是先將你要輸入的格式預備好，然後再將要放入其中的內容一個蘿蔔一個坑地放進去

    這樣做的話，就不用怕 SQL 語法直接執行
    
    預處理器可以防止 SQL 注入的原理是因為在程序運行時，預處理器內的模板就已經先被編譯了

    所以之後代入內容時，因為不是同時被執行，所以不會被視為同一句 SQL 指令

    自然不會被一次性執行。

    註 : 觀念這一題的概念我是了解的，但不確定使用的動詞對不對，比如說「模板」與「編譯」，但主要的觀念就是預處理器的內容先被執行，而後面的內容才代入，由於執行的時點不同，又或者說預處理器中的模板已經先「編譯」，所以之後即使代入的內容是「or 1=1 /*」，也會被當作不同區段來看。

    現在我們來看看預處理器的使用方法

    預處理器有兩種使用方法

    1. 使用 mysql 數據庫
    2. 使用 PDOStatement，俗稱「PDO」
    
    這邊簡單介紹第一種方法，而先理解第一種方法再去學第二種，我想也是比較好理解的

    若使用預處理器，剛剛的語法可以改寫成以下

    ```php
    $idNumberSignIn = $_POST['username'];
    $passwordSignIn = $_POST['password'];
    
    $stmt = $conn->prepare("SELECT * FROM claygao_users WHERE id_number = ? and password = ?");
    $stmt->bind_param("ss", $idNumberSignIn, $passwordSignIn);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    ```

    - $conn->prepare() 的內容是放入一字串，可以編輯我們要得 sql 語法模板，要代入的地方用 ? 表示
    - bind_param() 內的第一個參數，先判斷你要代入的內容為哪種型態，共有四種型態：

        |型態|代表|
        |---|---|
        |"s"|字串|
        |"i"|整數|
        |"d"| 浮點數 |
        |"b"| 二進位 |
    
        我們要代入兩個 ? ，而這兩個都分別是字串，所以輸入兩個 s 為 "ss" 當作我們的第一個參數

        第二個參數之後就「照順序」放入我們要放入的變數或值

    - execute() 就是執行的意思
    - get_result() 獲得回傳值
    
        但要注意並不是執行後就一定會有回傳值，比如說你的 sql 語句為 INSERT INTO / DELETE / UPDATE 等...
        
        在沒有回傳值的狀況下，你無法利用　$result = $stmt->get_result();　作為你的判斷式條件 ( 判斷是否執行 )

        這時候你有兩個方法，一個是老師在課堂上提到的 $stmt->errorCode() 看是否有報錯，又或者將 $stmt->execute(); 放入判斷式 ( 我的作業使用此方法 )

        放入判斷式之後，$stmt->execute() 也等於是執行了

        ```php
        if ($stmt->execute()) {
            // Do something...
        }
        ```

- 關於 PDO

    這一部分我還沒有太多研究，事實上我連物件導向都還不太熟，所以到目前的作業我都沒有用到物件導向

    這邊也是我還要加強的地方，應該還要多砸一點時間在這邊

    
---
## 請說明 XSS 的攻擊原理以及防範方法

- XSS ( Cross-Site Scripting ) 跨站式腳本攻擊

    XSS 的攻擊原理就是在你的網站內寫入 Javascript ，然後利用其特性，讓你的後台藉由 JS 執行一些事情。

    手段通常是利用 HTML 中的 \<script\> 標籤，類似的手法皆統稱為 XSS 攻擊

    比如說在這次留言版作業中，我在 php 寫了一個 echo 要讓瀏覽器渲染出內容

    ```php
    echo "<div>" . $row['content'] . "</div>";
    ```

    這時候假設對方輸入的是 \<h1\>吃我草莓頭\</h1\> ，就可以看成是這樣 : 

    ```php
    echo "<div><h1>吃我草莓頭</h1></div>";
    ```

    然後你就會看到渲染之後原本應該是內容的部分，有一個很大的「吃我草莓頭」，因為會被解讀成為：

    ```html 
    <div>
    　<h1>吃我草莓頭</h1>
    </div>
    ```
    ## 吃我草莓頭

    放入\<h1\>事小，但如果放入的是 \<img\> 內的 src 為惡意連結，或者是 alret 等語法，會對網站的傷害甚大

    除非我們有一個方法去篩選掉 \<\> 或單雙引號

- 防範基本的 XSS

    htmlspecialchars 語法可以防禦掉大多數的 XSS 攻擊，其原理是會對輸入內容中的 \< 與 \> 或單雙引號字串化，不會當作程式碼讀取

    基本的 htmlspecialchars 範例如下：

    ```php
    htmlspecialchars($htmlsanitize, ENT_QUOTES, 'UTF-8');
    ```

    - $htmlsanitize : 原始字串，代入任何你要處理的字串
    - ENT_QUOTES : 這個參數代表了對引號的處理方法，共有三種：

    1. ENT_COMPAT：為預設值，只轉換雙引號「＂」，不管單引號「'」
    2. ENT_QUOTES：雙引號「＂」與單引號「'」都要轉換。
    3. ENT_NOQUOTES：都不轉換，給它放水流。

    - UTF-8：第三個參數代表我要轉換的編碼，這邊是用萬國碼  UTF-8
    - 第四個參數：這邊沒有打上去，是可選的參數，預設是轉換所有的 HTML 

- 補充 XSS 的類型 

    - XSS 儲存型

        也就是上述的例子，將 \<\> 等標籤經由使用者正常管道輸入至資料庫儲存之後，在撈取的時候辨識為 HTML 語法而一併渲染

    - XSS 反射型

        不是儲存進去資料庫之中，而是利用網頁後端本身接收前端傳送內容的機制漏洞。

        比如說我後端有一個接收前端 GET 方法的機制，那麼對方只要修改網址列，我所收到的 GET 內容就會是你惡意放入的內容

        問題點就是後端沒有一個機制去檢查前端 GET 傳入的內容並篩選字元。

    - DOM-Based XSS

        基於 DOM 的一種漏洞，這邊由於已經先了解 DOM 了，所以相對好理解，大多數的人認為這是 XSS 反射型的一部分

        簡單來說前端的部分先寫了一些可以操作 DOM 元素的 JS，而這個 JS 又依賴使用者輸入

        比如說我有一個 input ，其輸入的內容會被引入一個函式，而函式利用 innerHTML 來創建我剛剛輸入的 input

        那假設我 input 內我輸入 \<img src=# onerror="alert('hahhaha')"\>

        那就會被 innerHTML 代入其中成為新的 DOM 元素

        這也是為什麼現在也有一些人建議使用盡可能使用 innerText 避免新的 DOM 被創建


---
## 請說明 CSRF 的攻擊原理以及防範方法

- CSRF 跨站請求偽造 ( Cross Site Request Forgery )

    其攻擊原理就是利用瀏覽器會自動帶上 cookie 的特性，偽造一個連結讓使用者點入，欺騙用戶瀏覽器，讓其以用戶的名義執行操作。

    順序大概是這樣

    1. 使用者瀏覽並登入「信任網站」，這邊簡稱為 A 網站
    2. 驗證通過，A 帶 Cookie 給使用者
    3. 使用者在沒有登出 A 網站的情況下 ( cookie 還在無清空 )，訪問「不安全網站」B
    4. B 要求使用者訪問一個第三方網站，並讓使用者發送一個 Request
    5. 根據步驟 4 中 B 的要求，瀏覽者帶著原本的 Cookie 訪問 A，並其實已經按照 B 的要求做了一些壞事，但使用者並不知情

    根據步驟 5 ，壞事的定義很多，比如說在留言版中的引誘使用者在不知情的情況下刪除文章，更甚者在某些金融網站上，也有使用者帳戶被更動而不自知。

    假設網站 A 是銀行網站，使用 GET 方法來轉帳，比如說轉帳 5000 塊，是 http://www.bank.com/trans?toBankId=21&pay=5000

    這時候一個不安全網站 B 裡面有一個 img 標籤是 \<img src="http://www.bank.com/trans?toBankId=23&pay=50000" \>

    可以看到訪問 B 網站時，裡面有一個第三方連結，但實際上是連到你原本的銀行網站去匯款給一個帳戶 ID 為 23 的人 50000 元，但你將渾然不知這件事

- 如何預防 ?

    - 呼籲你的使用者少逛怪怪的網站和黃色網站

    - 網站中的一些重大資訊改用 POST 方法而非 GET 方法，然而需要注意的是，獲取 POST 時數據時不得使用 $_REQUEST 語法，因為其也可以獲取 GET 請求，駭客可以用一樣的手法 ( GET ) 讓你損失金錢

    - 承上：即使後台僅使用 $_POST 方法接收 POST，雖然可以擋掉原本的竊取方法，但仍無法完全防禦，因為危險網站可以使用 Javascript 創建一個 display=none 的 iframe，嵌入不安全的網站讓你不知覺地發送 POST 請求。

    經過上面三種例子之後，總結一下後端的防禦方法，因為使用者能做的預防相當有限

    - Hash Cookie : 雜湊收到的 cookie，認證此的確是用戶的 Request
    - 驗證碼：就是我們身為使用者時常見的填寫看到的字 ( 圖形驗證碼 ) 
    - Tokens：
    
        簡單而言就是再創造第二組 id 比對使用者的 session ID，如果相同，就是由本人發出的 request，反之則否

        但這樣的方法前提是你的 Server 不支持  cross origin request，否則 ( 比如說你的 Server 接受駭客網站的 request ) 駭客可以在其前端發送 request 拿到我們創建的第二組 id，如此還是會失敗。

註：CSRF 這邊的內容可以先不用參考太多，因為其實自己也還在了解中，然後我發現雖然在 week11 雖然沒有使用到 Session ，但好像蠢蠢地將 cookie 給 Hash 了，似乎之後可以再次應用？

