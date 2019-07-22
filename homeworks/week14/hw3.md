## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

DNS ( Domain Name System　或　Domain Name Service ) 是一套系統 / 服務，可以將網域名稱翻譯成 IP Address ( 也可以逆操作 )，而 DNS Server 就是執行這套系統的伺服器。

先探究背景：原因是因為一般往址列的網域名稱是給使用者看的，但是電腦只認得 IP Address，所以一般我們在做網路操作時，都會需要經由 DNS 轉換域名為 IP Address 給機器導向。

Google 提供的公開 DNS 服務名為 Google Public DNS，想像 DNS 是一個很大的表格，當使用者使用該服務時，等於就是在替這個表格增加資料 ( 簡單來說就是會存取使用者的上網紀錄 )，如此一來，Google 便可以得到大數據，比如說某個網域的位置被大量轉換時，Google 就可以知道若在這個網站上投放廣告或訊息，能有較高的曝光度等等。

而相對於一般大眾的使用好處，有一說是網路傳輸封包速度變快了，而且 8.8.8.8 / 8.8.4.4 這樣的伺服器 IP Address 算是相當好記 ( 變快和好用其實都是相對而言，比如說中華電信預設的 DNS，在當年於速度與安全隱私性上都頗遭質疑 )

然而，Google Public DNS 也並非沒有對手，近年來崛起的 Cloudflare 帶著 1.1.1.1 這個簡潔的伺服器 IP Address 重新吸引了使用者目光，而現今究竟哪家 DNS 才是首選，在 PTT 等各大論壇都有熱烈的討論。

*******

## 什麼是資料庫的 lock？為什麼我們需要 lock？

資料庫的交易鎖定 Locks，它是為了不讓多筆交易於資料的寫入與讀取相互影響而誕生。

概念上而言，一但資料室要被讀取 / 或寫入時就會被下一個 Lock 的標記，以彰顯這筆資料正處於一個被讀取 / 寫入的狀態

- LOCK 要在 transcation 裡面才有用 ($conn->begin_transaction();)

    ```php
    require_once('./conn.php')

    $conn->autocommit(FALSE); //關閉自動 commit
    $conn->begin_transcation();// 開啟 transcation
    $stmt = $conn->prepare("SELECT amount from products where id = 1 for update");//for update -> LOCK
    $stmt-> execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo "amount" . $row['amount'];

        if($row['amount'] > 0){
            $stmt = $conn->prepare("UPDATE products SET amount = amount - 1 where id = 1");
            if ($stmt->execute()) {
                echo '購買成功 !';
            }
        }
    }

    $conn->commit();
    $conn->close();
    ```
    
    for update 加在指令中，將會把 id=1 的這個 row 給 LOCK 起來 ( 伴隨一點點效能損耗 )

    當跑到 $stmt = $conn->prepare，的時候，程式碼就被鎖起來了，鎖起來之後就會開始判斷程式邏輯

    一直到　$conn->commit(); 的時候鎖才會解開，然後讀到的數量是你上面邏輯判斷完之後的數量

延伸閱讀 : 

[Lock Levels](https://jackyshih.pixnet.net/blog/post/6154337-sql-server-lock-%E6%9E%B6%E6%A7%8B%E8%AE%80%E5%BE%8C%E5%BF%83%E5%BE%97)


*******

## NoSQL 跟 SQL 的差別在哪裡？

SQL 是一種程式語言，用來管理關聯式資料庫，定義了基本的 CRUD，基於該語言所建立出來的資料庫系統稱為「關聯式資料庫」，簡單來說，就是有 Schema 的資料庫，特性是創立表時，都要先定義好 Schema。

而沒有 schema 資料庫管理系統就統稱為 NoSQL，既然不用定義 Schema，就等於我不用先預設我要存哪些資料，而 NoSQL 儲存資料的格式則以 JSON 為多。

NoSQL 的優點為它方便用來蒐集資料，因為不受 Schema 格式的限制，所以我可以不用在格式之間做轉換，幾乎是一種一把抓的概念。然而，SQL 與 NoSQL 並不互斥，兩者都有他們適合應用的場景，才能發揮最大功效。


*******

## 資料庫的 ACID 是什麼？

基於保障資料庫 Transaction 的正確性，歸納出以下四特性必須達到：

- Atomicity 原子性 - 像原子般緊密的不可分割，要嘛都成功，或者都失敗

    比如說單次的 transaction 需要先執行新增指令，後執行刪除指令，但倘若新增成功，刪除卻失敗，則交易失效，原本新增的資料也要必須恢復原狀。

- consistency 一致性 - 維持資料一致性 

    也就是在 transaction 的執行前後都必須保持總體一致

    | A | B |
    | -- | --|
    | 5000 | 4000 |
    | A + B = | 9000 |

    Transaction : A 轉 1000 給 B

    | A | B |
    | -- | --|
    | 4000 | 5000 |
    | A + B =| 9000 |

    總額都是 9000 不變，此即一致性

- isolation 隔離性 - 多筆交易不會相互影響 ( 不能同時改同一個值，每筆交易分開處理 )

    即不得讓兩筆以上不同的 transaction 對同一批資料進行操作，即使是一筆資料重疊也不可行。只要該 transaction 所使用到的資料，甚至是中間的產生結果，都不可讓他筆 transaction 使用到。

- durability 持久性 - 交易成功之後，寫入的資料不會不見 ( 如帳目 )

    此筆 transaction 的更改必須永久且完全的保存在資料庫中。


參考資料 : http://karenten10-blog.logdown.com/posts/192629-database-transaction-1-acid