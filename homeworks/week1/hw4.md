## 跟你朋友介紹 Git
---

### **前置作業**

- 請確定你這邊已經安裝好 Cmder 或已經開啟你 MAC 的 Terminal，之後開啟我剛剛給你的 Cmd 指令教學，用 mkdir 指令創建一個資料夾 test1，然後輸入下列指令開始 git 版控

        git init

    對了，輸入 ls -al 應該可以看到 .git 資料夾，git init 指令創造了這個資料夾。同理，要移除 Git。原理就是刪除資料夾即可，因此指令 rm -rf .git 可以將 Git 移除。
--- 
### **開始操作**

0. 首先你必須建立一個概念，git 有分為工作區、暫存區與倉庫，檔案進入版控的程序也是如此，大概是如下表格

    區域名稱|代表意思|如何進入下一區
    :---:|:----:|:---:
    工作區|尚未 add 加入暫存區 | git add 檔名
    暫存區|檔案 add 後暫存的地方| git commit -m "commit訊息"
    倉庫|檔案完成版本控管儲存之地|這樣已經完成了這一版本
---


1. 在你剛剛輸入 git init 的時候，你就已經替這個資料夾建立了一個 repository，簡稱 repo，代表這個資料夾已經有了版控。你可以輸入 git status 來看目前的版控狀態

        git ststus  顯示版控狀態

     應該會顯示 Nothing to commit，因為沒有任何檔案。

     這時候輸入 touch test.js 創建這個檔案，然後我們就可以開始。
 
    
---
2. 再一次輸入 git status，你應該會看到以下資訊
    ```
     On branch master　//目前在 master 這個 branch

     No commits yet //還沒有 commit 檔案

     Untracked files:
       (use "git add <file>..." to include in what will be committed)

           test.js

     nothing added to commit but untracked  files present (use "git add" to track)
     ```
    可以看到 test 被歸類在 Untracked files 底下，也很貼心地告訴你可以使用 git add 加入版控，也是將檔案放入暫存區。
---
 3. 這時候請輸入 git add test.js，將其加入版本控管之中

        git add <filename>　// 將檔案加入暫存區

    或者你之後編輯有多個檔案，也可以輸入下列指令，一次加入所有檔案

         git add . // 將工作區所有檔案加入暫存區
 ---            
4. 承上，一次將工作區所有檔案加入暫存區的確方便，但有幾個檔案我並沒有想讓它加入暫存區，更正確地說其實它根本不需要版本控管，怎麼辦呢？

    你可以創建一個檔案名為 .gitigonre，顧名思義就是不會被 Git 所理會的檔案集合，創建它並編輯，輸入你不想加入 Git 的檔案名稱

        .gitignore // 內含不需要 Git 版控的檔案名稱
    
--- 
5. 所以，將檔案加入暫存區之後，輸入 git status，就可以看到 test.js 已經加入版本控制。

    這時候打開 test.js 並輸入幾行字再儲存關閉，輸入 git status 會顯示 test.js 是 modified 的狀態。代表 Git 偵測到這檔案內容有變動，又送它去到了工作區了。

    這時候輸入 git diff，會輸出的是你現在這份工作區的檔案和原本暫存區的檔案的差異。

    比如說你剛剛打的幾行字是 123，那 git diff 輸出的結果就是＋123，輸出內容中，行首是 ＋ 代表增加，－ 代表刪減。

        git diff // 顯示現在工作區的檔案與上一版 / 暫存區的檔案的差異
    關於 git diff 還有很多討論，其實它還有多種不同用法，不同的指令比較的區域也不同

    比如下列這個是比較兩個 commit 之間的不同之處：
        
        git diff commit1 commit2
    
---           
6. 現在你都已經完成了你想要在 test.js 中的內容，那麼就讓我們正式把它放入倉庫吧！

    使用 git commit -m "messenge" 可以讓你將所有暫存區的檔案全部放入倉庫。messenge 是你此次 commit 的說明。

        git commit -m "messenge"
    若是你常常將檔案編修，甚至會為每次的小變動都來個 commit，重複輸入 git add 與 commit 指令會很麻煩，所以我們可以合二為一：

        git commit -am "messenge"

    但記住這個指令對 Untracked File 底下的檔案無用，你至少需要第一次的 git add 將其加入 Git 控管。
---
7. 使用了一陣子，也 commit 了兩三次，我要怎麼看 commit 紀錄呢？輸入 git log 吧，它就像是進貨單一樣！

       git log  // 顯示 commit 紀錄

    從上到下分別為 
    
    - commit id // 該 commit 的身分證
     - Author // 執行者
    - Date 
    - 該 commit 的 messenge

    習慣上面的格式之後，git log 後面可以加上 --oneline 這個參數，如此顯示會更簡潔，commit id 也只會顯示前七碼，很常拿來使用也易記住或辨識。
        
        git log --oneline // 顯示簡潔 commit 紀錄
---
8. 當你審視 git log 的時候，突然覺得現在這個 commit 似乎沒有上個版本還要好，我能夠時光倒流，回到上個版本嗎？

     答案是可以的，輸入 git checkout commitID 即可( 全碼或前七碼都可以 )
        
       git checkout commitID 
        
        
    要切回到現在版本則是輸入：

       git checkout master

---
9. branch 概念
    
    雖然可以 checkout 回到過去的版本，但這樣編輯起來還是有點怕檔案控管出錯出包，能有什麼方法？

     所以一個良好的習慣是，我們在編輯一個既有的專案時都應該先替其創一個 branch 來做編輯動作。除了安全起見外，多人同時編輯一個大專案時，也能達到因為各自有各自的 branch ，而互不影響開發的情況。

     所以，如果你還是覺得這個概念很模糊，不如可以先暫時把它想成 Netflix 的使用者，一個 Netflix 帳號能夠多人共用，你和你女朋友的觀影可能不同，比如說你愛看**李屍朝鮮**和**安眠書店**，所以你的使用者紀錄有這兩部，她愛看**性愛自修室**和**黑鏡**，所以她的使用者紀錄也有這兩部。

    你的紀錄|女友紀錄
    :-:|:-:
    李屍朝鮮|性愛自修室
    安眠書店|黑鏡

    有一天，你和你的女友都很想看最近出的新劇：**愛死機器人**，妳女友叫你等她下班一起看，好死不死她最近每天加班，而你因為在胡老師的課程中表現良好，進度超前，空餘時間比較多，所以想偷看。

    可是你怕用自己的使用者看，她若偷看你紀錄會發現。
        如果用她的使用者看更不行，她會直接知道。

    所以聰明的你，當然是先創一個新的使用者，偷看完再把它刪掉囉！


    你的紀錄|女友紀錄|新使用者紀錄
    :-:|:-:|:-:
    李屍朝鮮|性愛自修室|愛死機器人
    安眠書店|黑鏡

    所以大概可以把 branch 想成這樣的概念，而 commit 就是該 branch 底下的使用者紀錄。
---
10. 創建 branch 並切換至該 branch

    你可以透過 git branch week1 來創建一個叫做 week1 的新 branch
            
         git branch <name>
     再使用 git checkout week1 跳到該 branch，有發現這跟之前切換 commit 版本再切回來很像嗎? 沒錯，當 checkout 至該 branch，預設會停留在最新的 commit。
        所以之前的 git checkout master，其實是指切換到該 branch 的意思。而 master 是 Git 預設的 branch，就像新辦 Netflix 預設的使用者一樣。

         git checkout <branch name>

      如果疑惑自己目前在哪個 branch，可以輸入 git branch -v，會顯示 branch 列表，前面有 * 號則表現你目前所在的 branch

        git branch -v
---
11. 合併 branch 與刪除 branch

      時過境遷，你的女友跟別人跑了，而你當初用來看愛死機器人那個使用者，也早因為懶得切換看了不少影集，卻大多都只看一半。

       有一天你想說能不能把你原本的使用者和之後這個新創的使用者合在一起，這樣就不用那麼累，要看安眠書店就要切回原本的使用者，要看愛死機器人又要切到新的使用者，若把兩個使用者合併在一起，不就太棒了？( 反正女友也跑了 )

     Git 也有這個功能，切換到你想以其為主的那個 branch，我以 master 為主，想把 week1 這個分支拉過來和我這個主要的 branch 合而為一

     即 master <- week1

      做法則是　git checkout master，先至這個 branch

       接著輸入這個指令 git merge week1

        git merge <branchName>

      如此就完成了。

      雖然兩者已經合二為一，但 week1 還在，並沒有消失。你可以輸入 git branch -d week1 將它刪除。

         git branch -d <branchName>
---
12. 衝突 conflict

    有一天你想到，你 Netflix 原本的紀錄和你之前新開的紀錄都有用來看 JOJO 的奇妙冒險，那合併之後的集數紀錄會以哪個為主呢？

    在 Git 之中，如果 branch A merge branch B，而兩個檔案較之於最初的狀況而言都有做修改，那麼 merge 的時候 Git 會告訴你是哪個文件有這樣的衝突，並且你可以進入該文件自由選擇你想保留或刪除哪一個部分（兩者文件內容全留下當然也可以）

     假設這個都有做修改的文件叫做 jojo.js，那麼 merge 時發現衝突時會顯示：
    ```
    Auto-merging jojo.js
    CONFLICT (content): Merge conflict in jojo.js
    Automatic merge failed; fix conflicts and then commit the result.
    ```
    意思是當 Git 要自動幫你 merge 時，發現 jojo.js 這個檔案有衝突問題，需要你修正

    輸入 git status 也可以看到輸出 Unmerged paths: 底下有 both modified: jojo.js 

    進入 jojo.js 檔案，相異之處會特別標示

    以剛剛 Week1 合併至 master 為例

    ============ 用來分開兩個 branch 各自不同的部分



     |jojo.js|
    :-:|:-:|:-:
     |**<<<<<<<<<<<<<<<< HEAD**|
     |master 內容|
     |**====================**|
     |week1 內容| 
     |**>>>>>>>>>>>>>>>> week1**|
     |其他相同的部分


     至此，是一個自由編輯的模式，所以你要留那一個 branch 的部分都是可以的。
        



        


    

    



       