## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

雜湊函數 ( Hash ) 與加密 ( Encrypt ) 的差別：

|  差異  | Hash | Encrypt |
|--------|------|---------|
| 轉換後長度|固定長度|長度依照文本長度決定|
| 可逆性 | 不可逆 ( 無密鑰 )| 可逆 ( 有密鑰可以解密 )|


由此可以判斷，如果需要取得明文文本，使用加密，否則使用雜湊函數

密碼經過雜湊才存入資料庫，可以保證在後端運作的過程中沒有機會曝光密碼

即可駭客入侵資料庫，也無法看見密碼明文

典型的雜湊函數有 MD2、MD4、MD5 和 SHA-1 等，所以口語上說 MD5 加密或是 SHA-1 加密是錯誤的。

## 請舉出三種不同的雜湊函數

- 不同演算法的 Hash

    1. 加法 Hash

        顧名思義就是將輸入元素一個一個相加起來成為最後的 Hash 值

    2. 位運算 Hash

        將輸入元素利用各種位元運算 ( 位移運算 ) 來充分混合成 Hash 值

        這邊使用的概念其實就是 JS 101 中的位移運算子算法

    3. 乘法 Hash

        利用乘法的不相關性產生 Hash 值，而相乘的對象則有許多種。

        如輸入元素的頭尾相乘，或者是每個元素都乘以一個不斷改變的數等等。

- 不同加密形式的 Hash

    1. MD5 ( Message-Digest Algorithm 5 )

        是計算機廣泛運用的散列算法之一，前身有 MD2、MD3 與 MD4，但在目前的時代中已經顯得破綻百出，所以目前應用已經不多。

        MD5 輸出的 Hash 值為 128 位。

    2. SHA-1

        1995 年發布，輸出 160 位的 Hash 值，在 2017 年，荷蘭密碼學研究小組 CWI 與 Google 宣布攻破 SHA-1。

        [新聞連結](http://technews.tw/2017/02/24/the-first-sha1-collision/)
    
    3. SHA-2

        是一個統稱，泛指 SHA-2 開頭，如 SHA-224、SHA-256、SHA-384 與 SHA-512 等等，原本被以為可以完全取代 MD5 引領新一代標準，但在 SHA-1 的安全性令人質疑的狀況下尚未能達成 ( 因為其演算法與 SHA-1 相似 )。儘管如此，至今 SHA-2 還未能被有效破解。


    


## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別

1. HTTP Statusless

    從過去我們可以理解，HTTP 是一種不帶狀態 ( statusless ) 的資料交換，什麼意思？
    意思是每一個 request 都是獨立的，比如說你在某個首頁為 www.Lidemy.com，裡面有一個課程按鈕叫做 JS 101，
    網址為 www.Lidemy.com/js101，照理來說，我需要點擊這個 JS 101 按鈕才進得去該頁面。

    那其實我也可以直接在網址列輸入　www.Lidemy.com/js101　連到這個頁面，不用通過按鈕

    那麼在 Lidemy 首頁，網站限制我們需要透過按鈕才能進到 JS101 的意義就失去了，但這也是呈現了 HTTP 協議的特性。

    所以為了符合我們所期望的正常操作流程，於是我們需要 Statusful ( 帶有狀態 ) 的網頁操作。

2. Session 概述

    而 Session 就是一個實現的方式，而它的使用目的在於，要讓 Server 端「記得」我在某個狀態，就大多數狀況而言，就是要讓 Server 端記得我有登入這件事。

    ( 題外話 : 據說在早期的 CGI 年代，Session 機制完全依賴工程師自己設計，不似現代有較多解決方案 )

3. Session 與 Cookie

    我覺得比較好的比喻是一些要排隊的早餐店，這家早餐店的買賣規則都是要給一張號碼紙張，然後叫號領餐。

    假設你生平第一次去這間早餐店買早餐，的確是依照這個規則點餐然後等待叫號，但在你買了半年之後，老闆娘幾乎就記起來了你都點什麼餐之類的，那是因為你和這間店的老闆娘已經建立起了一種默契 ( 也就是 Session )，而你需要記住的是，這份默契記憶在老闆娘的大腦中 ( Server 端 )，而你 ( Clinet ) 端每一次傳號碼牌 ( Cookie ) 給老闆娘時，老闆娘看到號碼牌點的是全世界只有你才會點的「大冰奶多冰多糖 」( Session id )，就知道是你了。

    但其實這間早餐店最早是沒有號碼牌這個方式的，所以當時老闆娘是用別種方法和客戶交換點餐資訊與餐點。
    
    也就是說，今天就算紙條影印機掛掉了，老闆娘依然也可以做生意，她依然記得你這個人 ( 廢話 )，當你跟老闆娘口頭說「我要一杯大冰奶多冰多糖」，它還是會馬上想起你是誰。意思就是今天就算不用 Cookie，Session 也不會消失。也就是非得要 Cookie 才能實現 Session 機制的運行，只是 Cookie 是最易用的一種。

    ( 當然不只 Cookie 一種方法，但其他方法暫不贅述，使用 Cookie 的好處是連線時背景會自動帶上 Cookie，不論是 Server 帶給 Client 或 Client 帶給 Server 都是，而現在的瀏覽器預設也都支援 Cookie )

所以總結而言，Session 是存在 Server 端的資料，記錄著用戶行為 ( 就像老闆娘記得你都點多糖多冰大冰奶的行為 )。

Cookie 是存在 Client 端，同時也是我們實現 Session 機制的手段，Cookie 存放著 Session ID，就如同你的號碼牌上面寫著「多糖多冰大冰奶 x 1」


##  `include`、`require`、`include_once`、`require_once` 的差別

- 有無 _once 的區別

    這個解釋套用在 require 或 include 上都是用，假設我有一個檔案叫做 add.php

    add.php
    ```php
    <?php
        $a++;
    ?>
    ```

    然後在　index.php 引入

    ```php
    
    $a = 5;

    require('./add.php');
    echo $a; // 印出 6

    require('./add.php');
    echo $a; // 印出 7

    ```

    接著在 index_once.php 引入，這邊使用 require_once

    ```php
    
    $a = 5;

    require('./add.php');
    echo $a; // 印出 6

    require_once('./add.php');
    echo $a; // 印出 6，因為判斷該 add.php 在其他地方 ( 也就是上方 ) 已經引入過一次，所以不會再引入
    
    ```

    那接下來看這個例子

    ```php
    
    $a = 5;

    require_once('./add.php');
    echo $a; // 印出 6

    require('./add.php');
    echo $a; // 印出 7，因為 require () 不判斷之前是否引入過，所以同樣引入
    
    ```
    值得注意的是，_once 是認檔名，不認程式碼內容，因次若是引入兩個不同檔名的檔案但內中程式碼一模一樣，_once 依然會引入。另外，使用 _once 的效率會比較低一點，因為 _once 會先判斷一次是否有引入過該檔案。

    上述狀況套用 include 亦同，故不贅述。

- include 與 require 的不同

    - include 引入檔案不存在或錯誤時，會產生警告但繼續執行，require 則是會產生警告並且停止執行
    
        ```php
        
        include('a.php');
        echo 'haha'; // 印出 haha
    
        ```

        ```php
        
        require('a.php');
        echo 'haha'; // 不印出
        
        ```
    - include 會依照條件式考慮是否引入，require 則必定引入

        ```php

        if(FALSE){
            require('aaa.php'); // aaa.php 會被引入
        }
        if(FALSE){
            include('bbb.php'); // bbb.php 不會被引入
        }
    
        ```
        這個特性，導致在使用者如果有「必須要引入」的狀況會使用 require，比如說開頭的 conn 或者是一些版權宣告

        而 include 可以根據判斷式決定是否引入，就可以套用在程式碼運行過程中 ( 也就是中段 )的動態使用。

        總之就是 require 一出現，就是無論如何都會引入就是了，不受條件式判斷影響

    - include 有返回值，require 沒有

        ```php

        $result = include('aaa.php'); // 寫法是可以的

        ```

    另外兩者在使用上其實是可以忽略括號的，有一說法是省略括號可以增加執行效率，能不加就不加

    再者就是路徑問題，如果 A 引入 B，B 又引入 C，但三者都不在同一個資料夾，這時候容易出錯。

    這時候就可以使用  dirname(__FILE__) 解決

    ```php

    require_once(dirname(__FILE__).'/aaa.php');

    ```
