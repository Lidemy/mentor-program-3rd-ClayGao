## 前四週心得與解題心得

- 05/20 更新：
    - 感謝第三期同學 Cindy Lyu 提供資訊，md 語法中程式碼區塊 ``` 後面接上程式語言名稱可以將程式碼上色
    - 更新 indexOf 說明錯誤的部分
    - 刪除多餘空格

---

# Week1

第一週心得主要學習了 CML 與 Git / GitHub 的基本操作，大致可以分為以下

## Command Line

- 指令相關

    |指令名稱|指令內容|
    |:------:|:------|
    |ls / ls -al|列出該清單 / 列出該清單副檔名|
    |cd / cd .. | 切換至該目錄 / 回到上一層目錄|
    |mkdir <dir>| 創建資料夾|
    |rm <filename> / rm -rf <dir> | 刪除檔案 / 強制刪除該目錄 |
    |rmdir <dir> | 刪除空的目錄|
    | ">" | 導向，可用於輸入或輸出|
    |touch <filename> | 創建檔案或更名|
    |cp A B| 複製 A 檔案為 B 檔案|
    |grep a B | 在 B 檔案裡面揪出內中為 a 的字|
    | wget <URL>| 後面接網址，下載之|
    | pipe  | 將 pipe 前面的輸出變成 pipe 後面的輸入，可以將 pipe 視為 "接著做..." ( 該指令在 md 表格無法正常顯示 )|
    | man | 列出該指令使用手冊|
    |pwd| 印出你現在的位置|
    |telnet <IP Adress:Port>| 看 Port 是否有開啟，若有，可以輸入並發送資料|
    |curl <URL>|發一個 GET 的 request 到該 URL 並返回 response|
    |nslookup| 後面不接域名，可以查到本機 DNS 基礎訊息，其功能相當強大|

    - [更多關於 Crul](http://jockchou.github.io/blog/2016/01/23/curl.html)

- 個人補充指令 ( Windows / Linux 指令 / Mac 不確定 )

    |指令名稱|指令內容|
    |:------:|:------|
    |start <filename>| 開啟該檔案 ( 用預設程式 ) ( cmder 適用 ) |
    | tree | 這很酷，可以列出該目錄內部與內中子目錄的樹狀圖分布|
    |tasklist| 看現在正在運行的程式|
    |ipconfog|看電腦的網路相關資訊|
    |cls| 如果你嫌 clear 太冗長...|

    - 資料參考 : 
        - https://www.youtube.com/watch?v=Pq3fe2D0fug
        - https://www.opencli.com/linux/rm-delete-files-directory-command

## Git 

- Git 指令相關

    |指令名稱|指令內容|
    |:------:|:------|
    |git init| 安裝 Git，會產出一個叫做 .git 的資料夾|
    |git add <filename>/ git add .|將檔案加入暫存區 / 將所有檔案加入暫存區 ( 切記新增的檔案必使用! )|
    |git commit -m " " / git commit -am " " | 將檔案加入倉庫區　/ 將檔案加入暫存並加入倉庫區，" " 內中請輸入訊息|
    | .ignoregit| 這不是指令而是文件名稱，把不要被 git 管控的檔案加入其中|
    |git status| 看目前 Git 管控中的檔案狀態|
    |git log|看所有的 Commit 紀錄，後面加入 --oneline 可以看簡化版本的紀錄|
    |git diff | 比較檔案修改前後的不同，後面接兩組 commitID 可以看到兩組之間的差別|
    |git branch <name>| 看目前的 branch 分支，與後面加參數 -v 相同，後面接名稱可以建立該名稱的 branch |
    |git branch　-d / git branch -D | 刪除該 branch，-D 可以強制刪除未 merge 過的 branch|
    |git checkout <branch>| 切換到該 branch |
    |git merge <branch>| 將該 branch 拉回融合至現下的 branch |

    merge 若衝突，分辨方法：

    以 week1 這個 branch 被 merge 至 master 中，123.js 這個檔案產生衝突，打開檔案會顯示：

    
    | 123.js 檔案內容 |
    | :-------: |
    | <<<<<<<<<<<< HEAD |
    | master 內容 |
    | ================ |
    | week1 內容 |
    | >>>>>>>>>>>> week1 |
    | 其它相同的部分 |

    簡而言之，============ 用來分開兩個 branch 中該檔案各自不同的部分，而至此，是一個自由編輯的模式，所以你要留那一個 branch 的部分或者你要怎樣重新編輯都是可以的。

- GitHub 指令相關

    |指令名稱|指令內容|
    |:------:|:------|
    |git remote | 使用 git remote origin master <URL> 連線到該 repo|
    |git remote -v | 看當下連接的 GitHub |
    |git pull | 將 Github 的 repo 拉下來 ( 下載 )，預設通常為 git pull origin master|
    |git push | 上傳，後面接該 branch 的名稱| 

- 其它補充

    |指令名稱|指令內容|
    |:------:|:------|
    |git reset HEAD| 取消被 add 至暫存區的檔案| 
    |git commit --amend| 取消上一個 commit |

- Week1 心得

    第一週學習了 Git 與基本的 Command Line，當然上述的內容介紹並沒有所有的 Git 指令與相關的 GitHub 操作，但我這邊也不簡述，因為網路上已經有很多資源可以參考，初學者建議可以搜尋大前輩高見龍先生的 Git 基本教學，裡面有很多關於 GitHub 與 Branch 的概念。

    基本上 Git 就是一個版本控管，可以想像是你打電動儲存進度，而 GitHub 好用的地方在於協作與修改紀錄，以及可以針對程式碼做線上留言討論，也被當作是指派任務的工具。

    據我了解目前在職場上 Git 幾乎已經成為必學的技能，而且廣義上來說，Git 並不限於程式碼檔案使用，一般的純文字文件也可以使用。

    如果你對 GitHub 有興趣可以去查詢相關資料，

---

# Week2 

第二週學習了基礎的 Javascript，以下大致講解一下相關重點

- 變數 ( varible )

    - 變數名稱

        1. 不可以用數字開頭
        2. ( 淺規定 ) 命名請與該變數用途有所相關
        3. ( 淺規定 ) 使用駝峰式命名較為普遍
        4. 如果變數沒有賦值 ( = )，會是 undefined
    
    - 變數型別

        - 變數型別 ( typeof() )

            1. number
            2. string
            3. boolean
            4. null
            5. undefinded
            6. symbol ( 自己找資料補充的 )
            7. object ( 囊括 object / array / function / date)

            其中 1 - 6 又屬於基本型別 ( Primitives )，7 屬於物件型別 ( Object )

            ( null 的類型使用 typeof() 會顯示為 object，這個錯誤算是 JS 的老生常談 )

        - 型別的轉換 ( 使用範例：設立一個變數 a )

            1. 轉換為 number：使用 Number(a) / 使用 parseInt(a , 10) // 10 為 10 進位之意
            2. 轉換為 String：使用 toString(a)，或者 a + ''( 空字串 )，原理是在 JS 裡，數字加字串會被變成字串


        - 浮點數誤差
        
            浮點數誤差：JS 沒辦法準確的儲存小數，至少不是每次都有辦法，所以假設：

            ```
            var a = 0.1
            ```
            但實際上很可能會是
                
            ```
            a = 0.100000000000000000003
            ```

            所以 a 在做基本運算時可能無法準確，比如 a + 0.2 === 0.3 會是 false
                
                    

            補充連結：http://blog.dcview.com/article.php?a=VmhQNVY%2BCzo%3D
        
        - 基本型別( Primitives )不可變

            

            ```Javascript
            var a = 'origin'

            a = 'changed'
            ```

            a 雖然被重新賦予字串 'changed'，但 'origin' 並沒有被抹除。
            'change' 與 'origin' 都有各自的記憶體位置，這邊的關鍵點是「=」 賦值

            另外，不可變的意思是 'change' 這個字串 ( 或其他字串 ) 你沒有辦法對其直接做更改

            ```Javascript
            var a = 'origin'

            a.toUpperCase()

            console.log(a) // 印出 origin ，而非 ORIGIN
            ```

            假設 'origin' 的記憶體位置是 0x01，那 0x01 所指的 'origin' 就永遠只能是 'origin'，不可使用方法直接做改變，你可能沒有察覺是因為我們已經習慣這樣寫：

            ```Javascript
            var a = 'origin'

            a = a.toUpperCase()

            console.log(a) // 印出 ORIGIN
            ```               
            看到 a = a.toUpperCase() 這一行的「=」了嗎 ? 原來，我們平常的做法是將 'origin' 轉變為大寫之後的樣子重新賦值給 a。而按照之前所描述的，origin 與其所屬的記憶體位置 0x01 並沒有消失。
                
            簡而言之，當 a 被賦值字串 'origin' 或其他的基本型別時，你永遠無法更改 a 的值，你只能通過重新賦值「=」將函式 a.toUpperCase 回傳的值放入 a 之中，而原本的 'origin' 沒有被改變。

            反過來說，在類似的情況下，當你看到「=」出現時，就要有一種*出現了一個新東西*的概念。

            再提醒一次，這是基本型別( Primitives )，物件型別不在此討論範圍內

            物件型別的內建函式有些可能會改變原本的物件或陣列，有些不會改變而回傳新的值，有些會改變原本的物件或陣列，同時也會回傳新的值。

            而基本型別一律不改變原來的值，一律回傳新的值。

            參考資料 : https://developer.mozilla.org/zh-CN/docs/web/javascript/data_structures

                

    - 變數的基本運算

        - 基本運算子

            |運算子|意義 |
            |:----|:----|
            |+    |加   |
            |-    |減   |
            |*    |乘   |
            |/    |除   |
            |%    |除以並取餘數|
            |++   |相當於+1|
            |--   |相當於-1|
            |>  / >=  |大於 / 大於等於|
            |<  / <=  |小於 / 小於等於|
            |===      | 等於 |


        - 補充 a++ / ++a 的差異( 以變數 a 為例 )

            ```Javascript
            var num;
            var a = 1;
            num = a++ // 先運算 num = a ，再運算 a = a + 1 ( a++ )，所以 num 為 1
            num = ++a // 先運算 a = a + 1 ( ++a )，再運算 num = a，所以 num 為 2
            ```

            參考資料：https://blog.csdn.net/qq_34471736/article/details/54599901

            
        - 關於 =　與 == 和 ===

            |類型|意義 |
            |:----|:----|
            |=    |將 = 右邊的值賦予給 = 左邊的變數   |
            |==    |比較運算子，比較內容是否相等|
            |===    |比較運算子，比較內容與「型別」是否相等   |

            總結：永遠使用 === 做比較運算，Eslint 也會強迫使用之
    
    - **將物件放入變數 - 理解值與記憶體位置 ( 重要觀念 )**

        ```Javascript
        1 === 1 // ture
        'abc' === 'abc' // true

        [] === []  // false
        [1] === [1] // false
        {} === {} // false
        {a:1} === {a:1} // false
        ```

        上述陣列和物件不相等的原因，乃是**當陣列和物件在做比較判斷時，其比較的部分為「記憶體位置」，而非值**

        當你在程式碼輸入一個物件或陣列時（即使還沒放入變數），電腦會替你輸入的這個 Object，指派一個「記憶體位置」，假設為 0x01（儘管在 JS 中你無法得知這個記憶體位置為多少），因此在你比較兩個相同值的 Object，實際上你比較的是 0x01 與 0x02，所以會不同。


        ```Javascript
        [1] === [1] // 等同 0x01 === 0x02 
        {a:1} === {a:1} // 等同 0x03 === 0x04
        ```

        那指定入變數之後，會發生什麼事 ?

        先假設 {a:1} 的記憶體位置為 0x01

        ```Javascript
        var abc = {a:1} // 電腦分配一個記憶體位置給 {a:1}，假設其為 0x01，你將 0x01 賦予 abc
        ```

        所以，實際上的意義為：

        abc(0x01) ===> {a:1}

        我們來看第二個例子：

        ```Javascript
        var abc = {a:1} // 電腦分配一個記憶體位置給 {a:1}，假設其為 0x01，你將 0x01 賦予 abc
        var abc2 = abc // 你是將 abc 內中的 0x01 賦予 abc，而非 0x01 所放置的值 {a:1}

        abc2.a = 2 //abc2 的記憶體位置和 abc 同樣都是 0x01，而你也知道 0x01 這個位置放著值 {a:1}，你透過 0x01 修改 {a:1} 的內容使 a:2
        console.log(abc) // 回傳 {a:2}，如果懂前面三個步驟你可以知道即使你修改的 abc2.a，但實際上你也是透過 0x01 做修改

        console.log(abc === abc2) // 印出 true，因為記憶體位置相同
        ```

        第三個例子，如果這時候 abc2 = {b:2}，那 {a:1} 會不會被更動 ?
        ```Javascript
        var abc = {a:1} // 和第四行是一樣意思，記得我是「電腦分配一個記憶體位置給 {a:1}，假設其為 0x01，你將 0x01 賦予 abc」
        var abc2 = abc 
        abc2 = {b:2} // 請回去看第一行
        console.log(abc) // 印出 {a:1}，代表沒事 
        ```
        {a:1} 當然不會被更動 ! 因為 {b:2} 本身有一個新的記憶體位置，假設其為 0x05，當 abc2 = {b:2} 的時候其實是代表「電腦分配一個記憶體位置給 {b:2}，假設其為 0x05，那麼你是將 0x05 賦予 abc2」

        所以當然完全不關 0x01 和 {a:1} 的事情了

        補充我自己想到的第四個例子，如果 abc2 被賦予的不是 {b:2} 而一樣是值 {a:1} 呢?

        ```Javascript
        var abc = {a:1} 
        var abc2 = abc 
        abc2 = {a:1} 
        console.log(abc2)  // 回傳 {a:1}
        console.log(abc === abc2) // 回傳 false，這是當然，因為 abc2 內中的 {a:1} 是另外一個 {a:1}，不是 0x01 的那個 {a:1}
        ```

        總結：當你指派一個物件放入一個變數的時候，你放入的是一個記憶體位置。而該物件的記憶體位置是一個物件對上一個位置，再透過這個位置去找到這個物件內的值，假設你要 call 一個物件，過程大概會是這樣：

        call => 物件的記憶體位置 => 物件裡的值

        將物件放入變數，是將物件的記憶體位置放入變數，所以 calling 過程會變以下

        call => 變數 => 變數裡的物件的記憶體位置 => 物件裡的值

- 陣列與物件 ( 這邊的心得將簡易帶過已經懂的部分，標註重點 )

    - 陣列

        - 屬於物件型別，所以其屬於可變的，其相關的內建函式有些會改變原陣列，有些不會，也不一定都會回傳值
        - 儲存於變數時，實際儲存的是記憶體位置
        - 陣列內部可以再放入陣列
        - arr.indexOf() 方法可以可以回傳 () 內的值**首次**在陣列中出現的位置索引，若沒有出現，回傳 -1
        - 承上，陣列 arr 中最後一位索引值將會等於 arr.length - 1
        

    - 物件

        - 注意形式 { key : value, key2 : value }
        - 屬於物件型別，所以其屬於可變的
        - 儲存於變數時，實際儲存的是記憶體位置
        - 物件內部可以再放入物件或放入陣列
        - 呼叫方法為 obj.key 或 obj['key']，*注意不是 obj[key]*
        - 物件裡面有物件時，可以 obj.key 後面再接 .name 呼叫之


- 判斷式

    - if / else

        if (true) {} // 若 () 的結果為 true，執行 {} 內部 

        else if (true) {} // 接在 if 之後，的結果為 true，執行 {} 內部，如還有更多的附加條件，則一樣使用 else if

        else {} // 前述 if 和 else if 中的 () 內容為 false 時，執行 {} 中的內容

        if 接 if 接 if 

        與 if 後面接 else if 接 else if 的差別於

        以各個 if 判斷式為一個單位，只要有符合該 if 判斷式括號內的內容，皆會執行其 {} 中的內容，不會按照順序判斷。

        若是 if 與 else if ，那會按照順序，逐步判斷。只要先遇到符合的判斷式就直接印出該 {}，不會再繼續判斷後面的 else if 與 else

        最好的例子如下

        ```Javascript
        var age = 17

        if ( age >= 15 ) {
            console.log('高中生')
        }
        if (age >= 7) {
            console.log('小學生')
        }
        if (age >= 4) {
            console.log('幼兒園生')
        }


        /*
        高中生
        小學生
        幼兒園生
        */
        ```

        ```Javascript
        var age = 17

        if ( age >= 15 ) {
            console.log('高中生')
        } else if (age >= 7) {
            console.log('小學生')
        } else if (age >= 4) {
            console.log('幼兒園生')
        }

        /*
        高中生
        */
        ```

    - switch case

        - 使用時機：對同一個變數進行多次條件判斷的時候，可以使用 switch 

        ```Javascript
        var a = 1

        switch(a) {
            case : 1  // 判斷 a 的值是否為 1
                console.log('a 為 1')
                break // 要加入，否則會接續著印出
            case : 2
                console.log('a 為 2')
                break
            case : 3
                console.log('a 為 3')
                break
            default:   // 想像成 else ，即上述 case 都為 false
                console.log(' a 超過 3 或非 number')
        }

        // a 為 1
        ```

        
        你也可以將兩個 case 合在一起，如果他們接下來的動作是一樣的話：
        
        ```Javascript
        var a = 1

        switch(a) {
            case : 1  // 判斷 a 的值是否為 1
            case : 2
                console.log('a 為 1 或 2')
                break
            case : 3
                console.log('a 為 3')
                break
            default:   // 想像成 else ，即上述 case 都為 false
                console.log(' a 超過 3 或非 number')
        }

        // a 為 1 或 2
        ```
        但如果是要做類似的判斷，也可以考慮下面這種作法
        
        ```Javascript
        var a = 1

        var a_number = ['a 為 1', 'a 為 2', 'a 為 3']
        console.log(a_number[a - 1]) 
        ```

        即 a 若是多少，就印出什麼樣的內容，即該索引值的值，而值的內容可以表現出 a 為何。
    
    - ternary 三元運算子

        condition 為 true ? true, 則回傳此 : false, 則回傳此

        如下：
        ```Javascript
        console.log(answer = 10 > 8 ? 'yes' : 'no')

        //回傳 yes
        ```

        也可以做巢狀迴圈
        ```Javascript
        var a = 9

        var answer = a > 8 ?  ( a === 10  ? ' Yes, a = 10 ' : 'No, it isnt' ): 'no'

        console.log(answer) // No, it isnt
        ```
        
        但可讀性不算很好。推薦還是可以用 if / else 做巢狀迴圈為佳

- 迴圈 

    - do while 與　while do

        - do while

            do {
                執行
            } while(判斷)

            也就是先執行一次 do {}，執行完後再判斷 while() 的內容，若為 true，再執行 do {} 中的內容

            ```Javascript
            var i = 1 

            do {
                console.log(i)
                i++
            } while ( i <= 5 )

            /*
            1
            2
            3
            4
            5
            */
            ```
            另一種方法：

            ```Javascript
            var i = 1 

            do {
                console.log(i)
                i++
                if ( i === 5 ) {
                    break
                }
            } while ( true )

            /*
            1
            2
            3
            4
            5
            */
            ```
            - break : 中斷，並跳出該 loop
            - continue : 中斷，直接判斷 while，若 true，執行 do {}；若 false，跳出該 false

                continue 範例：找出陣列中的值的索引值
                ```Javascript
                var arr = [1,5,8,12,50,99,7,20]
                var i = 0

                do {
                    i++
                    if ( arr[i] === 50 ) {
                        console.log('抓到了 50 ! 他在第' + i + '個 !')
                        continue
                    }
                    console.log('不是第' + i + '個，第' + i + '個是' + arr[i])
                
                } while ( i < arr.length - 1 )
                ```

                印出
                ```Javascript
                不是第1個，第1個為5
                不是第2個，第2個為8
                不是第3個，第3個為12
                抓到了 50 ! 他在第4個 !
                不是第5個，第5個為99
                不是第6個，第6個為7
                不是第7個，第7個為20
                ```

                可以看到當抓到 50 這個數之後，就不會印出接下來的 ('不是第' + i + '個，第' + i + '個是' + arr[i] )，而是中斷並直接繼續判斷 while()，繼續執行 do{}往下尋找。




        - while do

            while(判斷) {
                執行
            }

            即先判斷 while，再做 do {}，這個算是比較常用的，其餘與上述 do while 的部分相同。

    - for loop

        for ( 0. 建立初始值; 1. 執行條件; 3. 執行完後做) {
            2. 執行
        }

        執行順序：0 -> 1 -> 2 -> -3 -> 1 -> 2 -> 3  -> 1 -> 2 ....

        注意要點：

        - 步驟 1 的執行條件也有人說是終止條件，但只要理解為該條件為 true 則執行 {} 即可
        - 也可以使用 break 或 continue，continue 的運行同 while : 跳出然後直接去判斷 1. 執行條件
        - 步驟 0 的建立初始值 不一定要具備，但後面的 ; 一樣要存在。  ( ; 1. 執行條件; 3. 執行完後做)

- 函式
    - 結構
        ```Javascript
        function test() {

        }

        // function 名稱為 test
        // () 中為參數
        // {} 中為執行區塊
        // 每個 function 一定會有一個 return，但不一定要寫
        ```

    - 函式觀念與注意事項：
       
        - 變數可以用來接收函式的回傳值，使用 = 連接
        - 關於 return
            - 易犯錯誤 : 假設你用 return 回傳物件，但 return 正後方一定要接上 {}，以下為錯誤示範
                ```Javascript
                function a(x) {
                    return 
                    {
                        x*2
                    }
                }

                //undefined
                ```
            - 每個函式一定都有一個 return 值，若沒有寫 return，會預設該函式 return undeined。
            - 個人見解 : return 與 function 的關係
                - function 一定會有 return，但不一定有關聯
                    也就是說，你在一個 function 中對參數 x 做了千百種運算，但最後可以 return 'I dont want to talk anything'，也是可以的。

                    想像函數是一個機器，這個機器會有一個取物口輸出東西，每一次運算，這個取物口*一定*會輸出東西，但要輸出什麼東西，是你去決定的 ( 沒決定就 undefined )。你可以利用機器運算的結果，然後輸出跟這個結果有關的值；你當然也可以輸出一個和機器運轉過程中毫無相關的東西，如一句話 'Haha , there is nothing !'

                    只是當你呼叫函式機器的時候，由於呼叫的定義是要取「該函式機器的回傳值」，所以一定會取得該函式的 return，那如果你有加就會回傳你所寫的，如果沒加就會回傳 undefined

                - return 與 console.log 的關係

                    這樣說來，console.log 與 return 就沒有一定的關係，這也是新手 ( 包括我以前 ) 常犯的錯，以為要看到函式運算的結果，就一定要在函式裡面放入 console.log() 印出。

                    事實上，當你在該函式裡面放入 console.log() 印出了你要的東西，並不是這個函式沒有 return ( 你已經知道函式一定會有回傳值了 )，單純只是不需要用到該函式的回傳值而已。
                    
                    所以， console.log() 實際上就真的只是印出其 () 內部的東西罷了，並不是函式內部用 console.log() 印出結果，就沒有 return 了，你也可以 return 運算結果，然後在外面用 console.log(函式名稱())，印出*呼叫這個函式回傳而回傳的值*。

                - 最後當函式運行到 return 時，會立刻回傳值，而該函式內部 return 之後的程式碼都不會執行了，跟之前的 break 概念上是類似的。
        
        - 參數的命名盡量取有意義的，非必要，但相當重要
        - 函式內什麼都可以放，當然也可以放其他 function
        - 呼叫函式的方法為　函式名()
            ```Javascript
            function test(x) {
                return x*2
            }

            var a = test(2)
            ```
        - **函式中的參數也可以是代入函式作為引數（極重要）**
            ```Javascript
            function transform(arr, transformType) {
                var result = []
                for (var i = 0; i < arr.length; i++) {
                    result.push(transformType(arr[i]))
                }
                return result
            }

            function triple(x) {
                return x * 3
            }

            console.log(transform([2,5,8],triple)) // [ 6, 15, 24 ]
            ```
            可以看到我使用的函式為 triple，依此類推，我可以在主函式中代入各式各樣我想要用的工具函式

            用匿名函式的方式寫則是
            ```Javascript
            function transform(arr, transformType) {
                var result = []
                for (var i = 0; i < arr.length; i++) {
                    result.push(transformType(arr[i]))
                }
                return result
            }

            console.log(transform([2,5,8],function triple(x) {
                return x * 3
            })) // [ 6, 15, 24 ]
            ```
        - 引數（Argument）與參數（Parameter）

            - 函式內 () 為參數
            - 呼叫內 () 為引數
            - 函式中的 arguments[]，個人覺得很酷，代表函數的處理可以看引數，參數無格式限制
                ```Javascript
                function abc(){
                return arguments[0] +  arguments[1] +  arguments[2]
                }

                console.log(abc(5,1,2))　// 8
                ```
                需要注意的是，arguments 是 Object 物件，而非 Array，所以在方法的使用上你沒辦法對其使用 Array 的方法。但可以對其使用索引值 ( arguments[index] )，也能用 length 方法操作。
        
        - **傳參數的運作機制 ( 極重要，可與前述之*將物件放入變數 - 理解值與記憶體位置*做觀念連結 )**

            參數運作外在的變數時，不會直接改變變數，具體而言，JS 會複製一份你看不到的變數進入參數做運算，但運算之後的結果不會改變該變數

            ```Javascript
            function abc(x){
                return x * 2
            }

            var a = 2

            console.log(abc(a)) //4
            console.log(a) //2
            ```

            那如果 a 是物件呢 ?

            ```Javascript
            function abc(x){
              x.num++
            }

            var a = {
                num : 2
            }

            console.log(a) // { num : 3 }
            ```

            可以看到 num 的值被改變了，這是因為即使你是複製一份進去參數做運算，但本質上變數 a 與參數內的 x.one++ 都是基於同一個記憶體位置對上同一個值，也就是 2，所以你在參數內的運算，也會對該值做更動。

            那如果換一個方式呢？

            ```Javascript
            function abc(x){
                x = {
                    num : 3
                }
            }

            var a = {
                num : 2
            }

            console.log(a)  // { num : 2}
            ```
            與之前所述*將物件放入變數 - 理解值與記憶體位置*的觀念相同，看到參數內的 = 了嗎 ? 這邊的意思是重新賦值的意思，也就是說 { num : 3 } 是一個新的物件 ( 新的記憶體位置指向一個新的物件的值 )，和變數 a 所指向的 { num : 2 } 是不同的東西。

            綜合觀念而言，如果重新賦予一個物件，那這個物件本身都是全新的，與現有的物件並沒有關聯，即使他們內中的屬性與值一模一樣，但由於記憶體位置不同，所指向的也不會一樣。
        
        

    - 介紹幾種常見的宣告函式的方式

        1. 基本方式

            ```Javascript
            function test(x) {
                return x*2
            }

            var a = test(2)
            console.log(a) // 4
            ```
        2. 放入變數之中

            ```Javascript
            var a = function (x){
                console.log(x*2)
            }

            a(2) // a 即 該函式，印出 4
            ```

        3. 箭頭函式（ES6）

            ```Javascript
            var a = (x)　=> {
                console.log(x*2)
            }

            a(2) // a 即 該函式，印出 4
            ```

- Week2 心得總結：

    我省略了課程中內建函式的介紹部分，這邊的心得和用法我是歸類在我看文件的心得，因為這次內容不是要將老師的教學內容做成文字檔，我所撰寫的內容都是我吸收課程後加入自己所知的結果。

    一個重點是我想繼續探討基本型別的記憶體位置與值，這邊若有結果會在後面的心得補上。

    複習課程讓我真正的融會貫通，也才寫出了這麼多字與範例的心得，這份心得也將被我放在個人網誌上，也可以是我能自己使用的工具。

    由於是心得，我也不敢保證我的理解是 100% 正確，但我相信有 90% 以上沒有問題。

---

# Week3 

- Module ( 模組 )

    - 概念：將常用的函式獨立成一個模組，以後有需求可以直接引入這個模組來使用。Node.js 其中就有不少[內建模組](https://nodejs.org/api/)可以使用 ( 內建模組前面不用加 ./ 等檔案路徑 )。

    - require ( 拉來用 )

        以 Node.js 內建的模組 os 為例，我可以要求使用，並使用裡面的其中一個 function 名為 platform，官方文件表示這個函式會回傳一個字串來辨別你的作業系統平台

        ```Javascript
        var os = require('os')

        console.log(os.platform()) // Win32 ( 乾買不起 MAC )
        ```

        通常變數名稱可以自己改，但習慣上會使用你要引入的該 Module，這樣比較好辨別

    - export (借出去用)

        我們當然也可以自己建立一個 Module 供別人使用

        假設我建立一個檔名叫做 threeTimes.js，我在裡面放一個函式，你可以取用這個模組內的函式功能　－　將帶入的值乘以 3

        **先講結論，個人認為第五種方法搭配 import * as 還不錯用，應該之後會都使用這個方法**

        - 第一種輸出方法 ( 好理解 )

            ```Javascript
            function triple(x) {
                return x*3
            }

            module.export = triple
            ```
            如此一個可以供人使用的 Module 就完成了，這時我要如何引入 threeTimes.js 呢 ?　

            ```Javascript
            var threeTimes = require('./threeTimes') // 加上檔案路徑，可以不加副檔名 js

            console.log(triple(3)) // 9
            ```

        - 第二種輸出方法

            如果你一次要輸出多個函式，不只一個 triple，那你可以用物件把各函式打包送出

            ```Javascript
            function triple(x) {
                return x*3
            }

            function triple2(x) {
                return (x*3)*2
            }

            module.exports = {
                fun1 : triple,
                fun2 : triple2
            }
            ```
            你也可以建立一個變數 obj 為物件，然後放入 { } 內的函式，最後使  module.exports = obj

            但是要注意的是在 require 這一端的變數 threeTimes 也會是一個物件，所以使用方法上就會不同
            
            ```Javascript
            var threeTimes = require('./threeTimes') // 加上檔案路徑，可以不加副檔名 js

            console.log(threeTimes.fun1(3),threeTimes.fun2(3)) // 6 18
            ```        
        - 第三種輸出方法

            此外，你也可以換一種輸出形式，這樣的輸出也是同上面的物件形式
            exports. 本身就是一個空的物件，後面所接的就像是 { } 內中的東西

            ```Javascript
            function triple(x) {
                return x*3
            }

            function triple2(x) {
                return (x*3)*2
            }

            exports.fun1 = triple
            exports.fun2 = triple2
            ```

        第一種輸出方法的好處是，module.exports = 之後可以輸出你想輸出的任何東西，如一個字串或陣列，取用端可以直接引用，就如同在同一個檔案底下那樣，相當好理解，你輸出什麼，require 就是什麼。

        第二種和第三種方法都是輸出一個物件，相對於取用端來說，也要用取用物件的方式做引用。

        - 第四種輸出方法 ( ES6 新增 )

            也就是 export 與 import{}，export 你想輸出的東西

            輸出端 threeTimes.js 如下

            ```Javascript
            export function triple(x) {
                return x*3
            }

            function triple2(x) {
                return (x*3)*2
            }

            export const A = '123'
            ```

            而取用端可以這樣寫 **import {} from './路徑'**

            ```Javascript
            import {triple, A} from './threeTimes'

            console.log(triple(5))
            ```
        - 第五種輸出方法 ( ES6 新增，概念上與第二種方法類似，差別在於這樣的用法也不會使輸出的東西為物件 )

            其實就是第四種輸出方法的另一種形式，將你要輸出的東西用 {} 打包

            ```Javascript
            function triple(x) {
                return x*3
            }

            function triple2(x) {
                return (x*3)*2
            }

            const A = '123'

            export = {
                triple,
                A
            }
            ```

            如果你想使輸出的東西以你想要的新名稱輸出出去 ( 像物件底下的名稱 )，你可以使用 as 為其取別名

            ```Javascript
            function triple(x) {
                return x*3
            }

            function triple2(x) {
                return (x*3)*2
            }

            const A = '123'

            export = {
                triple as fun1,
                A as str
            }
            ```

            或者你也可以將 as 用在輸入端

            ```Javascript
            import {triple as fun1, A as str} from './threeTimes'

            console.log(triple(5))
            ```
            接著，如果你想引入該 Module 全部有輸出的東西，可以使用 **import * as <name> from '<./Module>'**

            ```Javascript
            import * as allFunction from './threeTimes'

            console.log(allFunction.triple(5))
            ```

        - 第六種輸出方法 **export default**

            ```Javascript
            export default function triple(x) {
                return x*3
            }

            function triple2(x) {
                return (x*3)*2
            }

            const A = '123'
            ```       
            
            那取用端就可以這樣寫

            ```Javascript
            import triple from './threeTimes'

            console.log(triple(5))
            ```

            有點像第一種使用方法，可以直接做取用，但更好的理解是，這樣的輸出方法與第四種的差別在於，取用 export default 輸出的東西時不用加大括號。

            ```Javascript
            export default function triple(x) {
                return x*3
            }

            export function triple2(x) {
                return (x*3)*2
            }

            const A = '123'
            ```       
            
            那取用端就可以這樣寫

            ```Javascript
            import triple,{A} from './threeTimes' // A 要加 {}，注意逗號

            console.log(triple(5),A)
            ```
            

            
            


- ES6 ( 由於在 2015 年發布，又稱 ES 2015 )

    - const / let

        - const ( 常數 )

            你無法對 const 建立的變數重新賦值，但若是被賦予物件型別，你仍然可以更改內中記憶體位置指向的值。

        - let

            - 作用域 ( 變數的生存範圍 )

                變數運行機制會從最內層找到最外層
                
                ```Javascript
                function abc() {
                    var a = 5
                    console.log(a)
                }

                abc()
                console.log(a)
                ```
                得到的結果會是 5 與一個錯誤

                原因是因為第三行的 console.log() 找到了函式內層的 a，值為 5

                但在函式外層的 console.log() 卻找不到內層的 a，所以顯示錯誤

            - let 性質

                正常來說，JS 的作用域是以函式為邊界，但若是一個變數使用 let 宣告，那該變數的生存範圍就會以離他最近的區域為僅有的生存範圍，可能是 if 的 {} 或　for loop 的 () 或 {}，*const 也有同樣性質*

    - 新版字串 - 淘汰舊版字串方法吧 !

        - 表達方法：用 ` ` 代替掉 ' ' 

            - 多行字串

                ```Javascript
                console.log(
                `
                haha
                haha2
                haha3
                `
                )
                /*
                印出

                  haha
                  haha2
                  haha3

                */

                ```

            - 串接變數

                將你想插入字串中的變數 / 物件 / 陣列等等放入 ${}，再放入``之中，不用再帶入任何 + 號

                ```Javascript
                var a = 100

                console.log( `潮爽德撿到${a}塊內`) // 潮爽德撿到100塊內
                ```

    - 解構

        - 用途：當你需要將陣列或物件的元素各個拿出來放入變數之中，可以使用

        - 陣列的解構方法：

            ```Javascript
            var [a,b,c,d,e,f,e] = [1,2,3,4,5,6]

            console.log(b) // 2
            console.log(e) // undefined
            ```

            簡而言之就是一組對一個陣列元素，b 對上 2，e 沒有可以對應的元素，所以是 undefined

        - 物件的解構方法：

            ```Javascript
            const obj = {
                a : 15,
                b : 27,
                c : 33
            }

            var { a,b,c } = obj

            console.log(a) // 15
            ```

            注意，物件解構時變數的名字一定要和物件的元素名稱相同，如 var { a , b } 一定要對應到該物件中的 a 與 b，否則變數會接收不到。

            另外就是解構完之後該變數本身內含物件元素，如果這個物件元素底下還有物件，那你也可以再對該變數進行解構一次，取它的元素。

            ```Javascript
            const obj = {
                a : {
                    aa : 55
                },
                b : {
                    bb : 66
                },
                c : 33
            }

            var { a : { aa },b,c } = obj
            // 注意 a 與 aa，這邊是解構再解構的意思，別和物件的 {} 搞混
            var { bb } = b  
            // 經過上一行的解構，已經有個物件變數為 b，所以我再解構這個物件變數一次，和上一行的 a 與 aa 同意義但不同寫法

            console.log(aa) // 55 , 這邊的 aa 是個變數
            console.log(bb) // 66 
            ```
    - 展開運算子 ...

        簡單來說就是在陣列變數前面加上「...」，那麼它會取消掉陣列的 [] 與性質，只展現裡面的元素。

        ```Javascript
        var arr = [1,2,3,4]

        console.log(...arr) // 1 2 3 4 


        function sum(a,b,c,d) {
            return (( a + b + c + d ) * 2)
        }
        console.log(sum(...arr)) // 20
        ```
        你也可以用來複製 Array
        ```Javascript
        var arr = [2,3,4]
        var arr2 = [...arr]

        console.log(arr2) // [2,3,4]
        ```
        物件也可以使用，見下例子

        ```Javascript
        var obj1 = {
            x:1,
            y:2
        }

        var obj2 = {
            obj1,
            z:3
        }

        var obj3 = {
            ...obj1,
            z:3
        }

        console.log(obj2) // { obj1: { x: 1, y: 2 }, z: 3 }
        console.log(obj3) // { x: 1, y: 2, z: 3 }

        ```
        可以看到 obj2 與 obj3 的差別，很簡單地可以了解，展開運算子之於物件也是解開 {} 的束縛。

        若展開之後元素有重疊，則以較之後的元素值為準

        ```Javascript
        var obj1 = {
            x:1,
            y:2
        }

        var obj3 = {
            ...obj1,
            y:22
        }

        console.log(obj3) // { x: 1, y: 22 }
        ```
        用展開運算子複製物件或陣列，會是一個全新的物件或陣列，新的記憶體位置與新的值，所以可以不用擔心在更改過程中改到原本被複製的物件 / 陣列的值。

        簡單來說，用展開運算子複製物件 / 陣列，是複製值，也是兩個截然不同的記憶體位置。
        而用一般賦值複製，如 obj2 = obj1，是複製兩個相同的記憶體位置，指向同一個值。

    - 反向展開 ( Rest Parameters )

        ```Javascript
        var arr = [1,2,3,4]
        var [a,...rest] = arr

        console.log(rest) // [2,3,4]
        ```

        **通常與解構搭配使用，可以理解為 rest 前的 ... 將剩下的 2,3,4 打包起來給 rest，打包的概念正如同展開的相反，故稱反向展開。**

        注意 ...rest 只能放在解構的最後一個區塊，你沒辦法在後面再接變數

        所以　var [a,...rest, theLast ] = arr 這樣的寫法是行不通的

        物件也是同樣寫法

        ```Javascript
        obj1 = {
            a:1,
            b:2,
            c:3
        }

        var {a , ...obj2} = obj1

        console.log(obj2)  // { b: 2, c: 3 }
        ```

        反向展開也可以用在函式，參考下面兩個例子

        ```Javascript
        function sum(...args) {
            console.log(args)
            return args[0] + args[1]
        }

        console.log(sum(3,5))
        ```
        ```Javascript
        function sum(a,...args) {
            console.log(args)
            return a + args[0]
        }

        console.log(sum(3,5,50,60,70))
        ```

        可以發現這樣的用法很像函式的 arguments，差別在於上述例子中使用反向展開的 args 本質是**陣列**，而之前的 arguments 是長得像陣列的**物件**

    - default Parameters

        可以用在 function 的參數上，可以直接幫參數賦予預設值

        ```Javascript
        function sum(a,b,c = 10) {
  
            return (a + b)*c
        }

        console.log(sum(3,5)) // 80
        ```

        也可以用在解構上，替 = 左邊的變數設定預設值。
    
---
- npm - Node Package Manager

    回想 Module 的概念，我們可以寫 Module 供自己使用，然而在世界各地也有不少人分享他們所寫的 Module 在網路上。而 npm 就是我們可以取用這些 Module 的工具，而 [npm](https://www.npmjs.com/) 在安裝 Node.js 的時候就會連帶安裝。

    - 安裝套件與　node_modules

        在 npm 找到你想安裝的套件之後，在 CLI 使用語法安裝 :  npm install <套件名稱> 
        這時候你的專案資料夾底下會多出 node_modules 這個資料夾，它統一集中存放你所安裝的套件

    - package.json

        在安裝套件的時候之前，先輸入 npm init 並連續 Enter 跳過那些詢問，然後你可以在你的專案資料夾看到 package.json，這個就很像你的設定檔，裡面也會記錄你所這個專案所使用的 npm 套件有哪些 ( 記錄在 "dependencies" 底下)

        所以如果你換了一個新的開發環境，只要持有你專屬的 package.json，然後在 CLI 輸入 npm install，npm 就會自動根據你　package.json 底下所使用的套件紀錄全部下載下來，就不用帶著沉重的套件到處跑了。

        **所以 node_modules 通常不會納入 Git 控管，我們會將它放入 .gitignore ，我們只要記錄 package.json 即可。**

        但是你安裝套件的紀錄不會自動幫你寫入 package.json 底下的 dependencies，你必須在安裝的時候使用在最後面加入 --save ( npm install <套件名稱>　--save )，那這個套件將會寫入 dependencies 底下；如果你是要安裝在 devDependencies 底下，則是使用 --save-dev ( npm install <套件名稱>　--save-dev )。

        dependencies 與 devDependencies 的差別在於後者為開發環境才會使用到的套件。
    
    - package.json 底下的 script 區塊

        內中可以設定你想執行的指令名稱，指令名稱後面可以指定你要執行什麼。
         ```JSON
         "script" : {
             "start": "node index.js"
         }
         ```

         這時候輸入 **npm run** start，就等同於輸入 node index.js 
        
- yarn 基本上和 npm 概念都相同，只列出不同的點

    可以去官方網站[安裝](https://yarnpkg.com/zh-Hans/docs/install#windows-stable)

    |npm|yarn|
    |:--|:---|
    |npm -v|yarn -v|
    |npm install|yarn|
    |npm install <套件名稱>|yarn add <套件名稱>|
    |npm install <套件名稱> --save|yarn add <套件名稱> (即 yarn 會自動將套件寫入 package.json ) |

- 寫測試 Jest

    安裝 Jest
    
    去 package.json 將 "test" 的值改為 "jest"，之後可以使用 npm run test 來運行 jest 套件
    
    假設你需要測試某 function，名稱為 repeat ，這個 function 位於檔案 index.js 中，那就利用模組的方式輸出該 function，然後在測試檔案引入來測試

    這時候我們建立測試檔案 index.test.js，這是一個淺規則的命名方法，代表是 index 的測試專用檔案

    內容為 
    ```Javascript
    var repeat = require('./index')
 
 
    test('abc 重複 5 次應該要等於 abcabcabcabcabc',function() {
        expect(repeat('abc',5)).toBe('abcabcabcabcabc')
    });
    
    ```
    如果描述格式的話就是
    ```Javascript
    test(
        '對於測試的描述',
        function(){
            expect(要測試的函式(參數)).toBe(該函式 return 的結果)
        }
    )
    ```
    這時候在 CLI 輸入 npm run test，就會尋找所有副檔名為 test.js 的檔案。( 如果你要測試單一個檔案，"test" 後面就是輸入 "jest <檔名>" )

    如果要多做幾次測試的話，在最外層加入 describe('描述',function(){ 測試內容即可 })

    ```Javascript
    var a = require('該exports')
    
    describe('總測試名稱', function(){
    
        test(
            '描述',
            function(){
                expect(要測試的函式(參數)).toBe(該函式 return 的結果)
            }
        )

        test(
            '描述',
                function(){
            expect(要測試的函式(參數)).toBe(該函式 return 的結果)
            }
        )

        test(
            '描述',
            function(){
                expect(要測試的函式(參數)).toBe(該函式 return 的結果)
            }
        )
    })
    ```
- Week3 心得

    很意外地，在複習 ES6 和 npm 套件介紹與 package.json 的時候，理解能力都變得比第一次上課時還要好很多，尤其是解構和展開運算子 / 反向展開那邊也特別清楚，覺得相當開心！

    個人認為在寫這週作業到現在等於是利用寫筆記的方式讓自己的思路實踐一次，雖然花的時間相當多，但不但可以繳交一個完整的作業，也可以將我所寫的作業內容放在網誌上，供更多的人參考，覺得這個效果很好。
---
# Week4

- 傳紙條的故事

    傳紙條的故事，讓我有疑問時可以重複對照

    重點有以下：

    - 至少三步驟：
        1. A 發送 給 B，B 收到訊息 ( B 接收 OK )
        2. B 回傳給 A，A 收到訊息 ( A 的接收 OK，同時也知道 自己在第一步的發送 也 OK )
        3. A 再回傳給 B，B 收到訊息 ( B 發現自己在第二步的發送是OK 的 )

    - 資訊標準化：
        1. 數字格式統一 ( http status code )
        2. 類別統一 ( http status )
        3. 回復格式統一 ( header / body )
        4. 動作統一 ( http method )
    
    - 不同服務
        1. 有很多不同種的服務代號
        2. 因為服務不同，格式也不同 ( 不一定有 header / body )
        3. 因為服務不同，也不一定需要三次確認 
        4. 不一定要寫地址，可直接寫域名 ( DNS 會轉換根據域名找到地址 )

- Protocol 

    傳紙條的故事，千千訂出了一套標準化的規定，讓大家遵守這個規定，並依賴這個規定省略掉很多溝通上的成本。

    所以協定就是**為了能讓彼此能夠溝通所建立起來的規範**

- HTTP Protocol - 超文本傳輸協定

    -  網址前頭的 https，就是代表我們是基於 HTTP Protocol 的基礎上來進行網路操作

    - HTTP request

        Client 傳送出一個 http request 給 Server，Server 回傳一個 response 給 Client

        Server 的 response 被瀏覽器處理，成為使用者可見到的畫面或文字

        request 的內容通常包含下列資訊：
            - method ( 會決定 response )
            - header
            - body ( 若 method 為 POST )

        當 method 為 POST 的時候，Chrome 可以看到 POST 的格式內容，這表示了在之後使用 request 套件的時候，我們會在 POST 使用 {} 寫入內容送出。

        response 的內容通常包含下列資訊：
            - Status Code
            - header
            - body
            - 其他資訊，如 date 等..

        - [其它 HTTP Method](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods) 

        - [HTTP Status Code](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

    - DNS ( Domain Name System )

        負責處理將域名轉換為 IP 位置 ( Chrome 開發人員可以看到 Headers 底下有 Remote Adress ) 回傳給 Client，Client 再根據這個 IP 對 Server 發送 request

        每個域名都有它所對應的 IP 位置。一些盜版軟體的原理會把驗證用的域名的 IP 改為你自己的電腦的 host，也就是 Localhost，因為不會有任何 response 或服務，所以可以通過驗證。

    - 模擬瀏覽器套件 request，官方文件 : https://www.npmjs.com/package/request

        藉由這個套件運行 request 與接收 response 的過程，了解到瀏覽器也只是一個程式。因為即使不使用瀏覽器，我也可以發送 request 與接收 response

        - 串接 API 

            我們可以利用這個套件實現串接一些 API，藉由其提供的 API 功能，我們可以發送 request 與得到 response，但它們需要遵守該 API 的規範

            - API ( Application Programming **Interface**) 簡介 :

                簡而言之就是一個介面，不一定只應用在網路上 ( 其為 Web API )，我們的 request 透過各式各樣 API 的功能與規範來得到不同的 response

                不同的官方會提供不同的 API 供開發者串接，如先前作業的 Twitch API，內中的 API 文件相當的多，如取得熱門遊戲實況、最火紅實況主等，開發者可以根據自己的需求串接不同的 API，以利開發。

                **我們一般使用的 Web API 基本上是 HTTP API，也就是 API 遵守 HTTP 的協定來交換資料。**，反過來說，API 不一定會建立在 HTTP 之上，那串接的方法也會有所不同。

                API 在另外一方面也是限制了開發者索取網站資料的多寡。

                它的概念也可以理解成橋樑連接兩座島嶼，而橋樑上的車輛就像資料一樣在兩座島嶼之間來回行駛，有來有往。而這座橋樑的設計也僅為了一定的車輛，比如說坦克車和大貨車就不得由這座橋樑行駛，因為有限高和限重。

            - SDK ( Software Development Kit)

                SDK 打包了成群的 API，可以讓你直接呼叫即可

            - 串接 API 流程：

                1. 看懂官方 API 文件
                2. 遵守 Step.1 
                3. 串接

            - RESTful 

                RESTful 是一種網站架構風格，一種習慣，但不是一種規範。目前大多的 API 都套用 RESTful，它的目的為簡潔化並標準化。



        - JSON ( Javascript Object Notation )

            JSON 是一種 **資料格式**

            現行網站內容較多使用的格式，逐漸取代 XML，與 JS 相容性好，可透過語法 JSON.parse() 將 JSON 格式轉換為物件，也可以將物件使用 JSON.stringify() 轉換為 JSON 格式的**字串**
            
            JSON 也可以在其它的程式語言中使用

- TCP / IP ( 會這樣命名，是因為其底下的 TCP 與 IP 特別重要，所以以這兩者命名 )

    - 網路的層級

         每一層的協定都是基於每一個層級之上，就像千千傳紙條的協議是建立在三次連接之上，三次連接的協議又是建立在郵差傳送紙條的機制之上，一層一層堆疊起來。


        - [OSI 七層](https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B)
        - [TCP / IP 四層](http://cn.linux.vbird.org/linux_server/0110network_basic.php#whatisnetwork_tcpip)

           

    - IP

        - IPv4 / IPv6 就是 Internet Protocol 的協議版本

        用我自己的話理解，區域網路對外只會有一個 IP，但是許多類似的 IP 都在同一內網之中。

        |對外|內網|
        |---|---|
        | 208.62.185.3 ( 虛擬 / 固定 )| 192.168.0.1  /  192.168.0.30  / 192.168.0.50 |

        平常家庭用戶的網路預設都是浮動 IP，如果要固定 IP 就要自己打去電信商申請。

    - Port 

        208.62.185.3:80，80 就是 port 

        如果換成域名，就可能是 localhost:5000 

        常用 Port

            - HTTP : 80
            - HTTPs : 443
            - FTP : 21

        也就是千千傳紙條的不同服務的例子

    - TCP / UDP 簡單小瞭解

        - TCP : 講求穩定與可靠

        - UDP : 講求快速

        其餘詳細內容與三次握手可以參考：https://zhuanlan.zhihu.com/p/24860273

- Week4 心得：

    這週有非常多的東西要記，第一次是這樣，第二次複習就是重理解，理解之後，很多東西都不用去背。

    關於 API 的概念每次複習都有新的想法，在 RESTful 風格之下的 Web API 更容易讓新手開發者將 API 概念與一般的 request / response 概念牽連在一起，至少目前學習到現在看來，本質幾乎是一模一樣的。

    如果將第四週課程的邏輯融會貫通，其實可以非常好理解「網路交換資料的方式不限於 HTTP - 跳脫 HTTP 的限制」與「 Web API 不完全等於 HTTP API - 其他的 API 」 的概念，原本你以為的東西，它只是佔我們生活中的 98% ，但並非 100%，不要忽視了那些其它存在的資料傳輸與交換方式。
