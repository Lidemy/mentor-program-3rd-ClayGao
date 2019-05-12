## 請以自己的話解釋 API 是什麼

- ## API (Application Programming Interface)

    你有逛過 Ikea 嗎 ? 如果沒有可以先去逛逛新莊館的 Ikea

    你是否有發現在你一開始進入 Ikea 的時候，會看到各式各樣的主題展區，如房間用品區，廚房用品區等等。假如今天你看到一個櫃子，覺得很喜歡，但這只是展示品，你如果要把這個櫃子放進你的購物車，你需要去倉庫區拿。

    一樓和二樓的主題展區之於訪客的作用是，你人到了展區，不用到倉庫就可以得知這個櫃子的存在，讓你看見櫃子的樣式，測量櫃子的長寬，主題展區的服務人員，也可以因為你提出要求，比如告訴他你想要買這個櫃子，帶著你去倉庫區拿，或者直接幫你安排寄送這個櫃子到你家，以上種種對於你的回應，讓你不必到倉庫區就能完成（櫃子本身是在倉庫區）。

    主題展區以及裡面的服務人員，某種層面上就是 API 的工作概念。

    Ikea 的主題展區就像是該平台的一個窗口一樣，API 也是如此，透過該平台的 API（如主題展區），你可以取用內部的資料，而不用真的進入該後台（如倉庫區），API 能夠幫你做到你想要的事情，但你能透過 API 做些什麼，也是該平台所規定的，就像你不能叫 Ikea 的正妹店員陪你去餐廳餵你吃飯一樣，Ikea 應該不會允許顧客這麼做。

- ## API 範例 - 以 Twitch API 為例：

想像 Twitch 是 IKEA，然後裡面有各式各樣的商品，比如說有實況，有影片，而你想取用至你的網站。取用的規範，就像你在 IKEA 瀏覽與購買的方法，可以前往看 Twitch 的官方文件。

官方文件：https://dev.twitch.tv/docs/api/　與 API 參數：https://dev.twitch.tv/docs/api/reference/

裡面還有更多的分頁可以點選參考，如 Reference，裡面有寫出你要如何下官方所規定的參數，而取得怎樣的結果，其目標網址也會根據你要的東西而有所不同。
如取得遊戲排名的 URL 為　api.twitch.tv/helix/games/top，取得 vedio 排名的 URL 為 api.twitch.tv/helix/videos

說到這裡，可以證明兩點：

    1. 基本上你要讀懂官方文件，否則你不會知道該如何串接
    2. 如果你讀不懂，那只有兩種可能：一種是你沒有讀懂，一種是官方文件沒有寫好，因此寫好 API 文件很重要

關於 API 串接的部分需要累積經驗，但概念上大致如上所述。




------

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

| Status Code | 說明 |
|-----------|-------|
| 420 | 一個非官方的狀態碼，目前網路上的資訊為在早期 Twitter 與 Twitch API 會因為在短期送出太多 request　而回傳這個 Status Code，在新版改使用 429 表示。|
| 735 | 非官方狀態碼，屬於 7XX-RFC，目前正由其他偉大的工程師努力擴展中？735 的意思為去你的 IE |
| 767 | 同上，該狀態碼代表喝醉了 |

感想：未來的世界有這些新的狀態碼似乎也不錯？

參考資料：

- 常見與不常見的 Http Status : https://noob.tw/http-status-code/
- 7XX-RFC : https://github.com/joho/7XX-rfc
- 6XX 狀態碼之一 : http://foaas.com/asckjbaskcnasc

------

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL : https://lidemy/menu/restaurant  ( 預計2030年啟用 )

- 可選查詢字符參數

| 說明     | Method| 參數 | 值類型       | 說明     | 範例      |
|--------|--------|------------|----------------------|----------------|-----|
| 選擇回傳餐廳數量 |GET| limit    | integer     |    選擇回傳餐廳資料的數量，若不使用此參數，將回傳所有餐廳與其資料     | /restaurant?limit=30 |
| 獲取單一餐廳資料 | GET|id   | string | 指定該 ID 餐廳並單回傳該餐廳的資料                   | /restaurant?id=11      |
| 新增餐廳   | POST   | none     | form : object | 該物件中需要包含 Restaurant Name 與地址，ID 將由後台自動生成         | { Resturant Name : Clay's Shit, Adress : Shulin }
| 刪除餐廳   | DELETE   | id     | string | 刪除指定 ID 的餐廳資訊              | /restaurant?id=15
| 更改餐廳資訊   | PATCH   | id     | string / form : object  | 更新指定 ID 的餐廳資訊              | { Resturant Name : Clay's resturant, Adress : Taipei }

- 回傳字段

| 字段 | 類型 | 描述|
|-----|------|-----|
| ID | string | 該餐廳的 ID |
| Restaurant Name | string | 該餐廳名稱 |
| Adress | string | 該餐廳的地址 |