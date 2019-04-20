## 交作業流程

- 前置


1. 寫作業保持良好習慣，開一個新的 branch，本周作業我命名為 week1

2. 寫好之後，先上傳到 GitHub，一樣保持在 week1 這個 branch

3. 記得先連線，輸入以下語法，目的是取得連線

        git remote add origin https://github.com/Lidemy/mentor-program-3rd-ClayGao.git

4. 之後再 push 上去

         git push origin week1

5. 回到 GitHub，在 Github 端你會看到一個訊息，表示你有一個新的 branch 剛剛被 push 上來
6. 點擊右邊綠色按鈕 Compare & pull request
7. 進入畫面後看到 base : master <- compare : week1，接著在留言欄部分輸入你想輸入的標題（這邊不限格式內容），與你想說的話或問題。好了點擊右下按鈕 Create pull request，並將網址複製下來。
8. 去另外一個 repo，名稱為 homework-3rd ( 你可以在 Lidemy底下直接搜尋名字 )
9. 承上，在該 repo 的 Issues 頁面底下建立一個 New Issue，並照正確格式輸入標題 [Week1]，然後在下列 Write 的部分貼上剛剛複製的網址，讓老師可以連結到你的作業。
其餘空白部分也可以寫你想寫的話。
10. 老師如果改完作業並覺得 OK，就會 merge Week1，然後刪除 Week1 這個 branch，並且關閉該 Issue。
11. 承上，這時候你就可以回到本地端，checkout 回 master，然後 pull 老師已經改完並完成 merging 的 master 到本地端，接著你再把 Week1 這個 branch 刪除。
12. 完成。

- 總結：完成作業　－＞　push branch －＞ Issue 留言貼網址　－＞　pull master (老師改完已 merge)　－＞刪除本地端 branch