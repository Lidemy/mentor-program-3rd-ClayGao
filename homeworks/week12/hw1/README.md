# 2019 / 6 / 30
- 留言版誕生

# 2019 / 7 / 7
- 將 cookie 使用 password_hash 改為正規的 SESSION ID 語法 -> OK
- 將留言撈取使用者名字的寫法改掉，不要去撈 cookie 裡面的，要去撈資料庫裏面的 -> OK
- 將輸入留言的功能使用 Javascript 寫入 -> X
- 加入 XSS 防範機制 -> OK
- 加入 SQL injection 防範機制 -> OK
- 將擾人的 alert 改為另一種產出方式 -> X，目前還是一樣擾人

# 2019 / 7 / 21 預期

- 2019 / 7 / 7 未完成部分
- Session 要有 HTTP Only 功能

