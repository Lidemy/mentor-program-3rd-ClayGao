## 跟你朋友介紹 Git

### **前置作業**

- 請確定你這邊已經安裝好 Cmder 或已經開啟你 MAC 的 Terminal，之後開啟我剛剛給你的 Cmd 指令教學，用 mkdir 指令創建一個資料夾 test1，然後輸入下列指令開始 git 版控

        git init

 
### **開始操作**

- 首先你必須建立一個概念，git 有分為工作區、暫存區與倉庫，檔案進入版控的程序也是如此，大概是如下表格

    區域名稱|代表意思|如何進入下一區
    :---:|:----:|:---:
    工作區|尚未 add 加入暫存區 | git add 檔名
    暫存區|檔案 add 後暫存的地方| git commit -m "commit訊息"
    倉庫|檔案完成版本控管儲存之地|這樣已經完成了這一版本


- 開始作業

    1. 在你剛剛輸入 git init 的時候，你就已經替這個資料夾建立了一個 repository，簡稱 repo，代表這個資料夾已經有了版控。你可以輸入 git status 來看目前的版控狀態

            git ststus  顯示版控狀態

         應該會顯示 Nothing to commit，因為沒有任何檔案。

         這時候輸入 touch test.js 創建這個檔案，然後我們就可以開始。

    2. 再一次輸入 git status，你應該會看到以下資訊
        ```
         On branch master　//目前在 master 這個 branch

         No commits yet //還沒有 commit 檔案

         Untracked files:
           (use "git add <file>..." to include in what will be committed)

                   test.js

         nothing added to commit but untracked  files present (use "git add" to track)
         ```
        可以看到 test 被歸類在 Untracked files 底下，也很貼心地告訴你可以使用 git add 追蹤檔案，也就是將檔案放入暫存區。

        是因為對於 test1 而言，新建 test.js 這個檔案已經對它產生檔案改變，Git 會偵測到這個改變，並把它放在目前的 ***工作區*** ，感覺就像是你打電動但還沒儲存進度一樣。
        
        需要注意的是，即使你打開 test.js 在裡面打了兩行字並儲存檔案 ( 就是一般的儲存功能 )，對 Git 來說還是沒有儲存的，你必須將之加入暫存區或倉庫才算是儲存。
    
    3. 所以，就像剛剛說的，用你的編輯器打開 test.js ( vim 打開也可以 )，這次照我說的做，輸入 " 123 " 後，儲存並關閉

       