## 請簡單解釋什麼是 Single Page Application

曾經在 Week13 我們將大多數的 CRUD 交給 Ajax 處理時就已經稍微觸及 SPA 的概念，Ajax 的優點是發 request 與接收 response 不用換頁，而 DOM 又可以藉由 JavaScript 生成，綜合這兩點我們就能做到「不用換頁也可以生成可視 DOM 的效果」

於是，在 Week13 我們將 CRUD 使用 Ajax 做出來之後，會發現在最初 `index.php` 寫的許多 HTML 都用不到了，所以我們刪去他們，`index.php` 就僅僅只是一些 HTML 而已，也用不到 `php` 的運算，這些都被放在其他 Models 之中了

而 SPA 就是將這件事情做到極致，如果 Ajax 不用換頁，那代表我可以在同一個頁面操作，也就是在單一的 `index.html` 頁面利用 Ajax　操作整個網站，這就是所謂的單頁式應用。

## SPA 的優缺點為何

優點很明顯，不用換頁，使用者體驗良好，我們也可以藉此利用如 jQuery 提供的效果做一些 DOM 動畫特效

而缺點的部分，承上題，由於一開始的頁面是利用 Ajax 向後端撈資料而生成 DOM 的，所以實際上 index.html 裡面應該只會有基本的骨架 :

```html
<!DOCTYPE html>
<head>
    <meta charset="utf-8" />
    <script src="./dist/index.bundle.js"></script>
</head>
<body>
    <nav>
        <span>Clay's To-do list</span>
    </nav>
    <div>
        <div class="container">
            <div class="title"><h1>To-do</h1></div>
            <div class="todo">
                <!--Ajax-->
            </div>
            <hr>
            <div class="title"><h1>Done</h1></div>
            <div class="done">
                <!--Ajax-->
            </div>
        </div>
    </div>
</body>
```

實際內容若是由 Ajax 生成，那麼當你點開這個網站檢視原始碼時，裡面的內容就會像上面一樣，有意義的內容區塊空空如也。

這樣會造成該網站的 SEO 很差，爬蟲根本爬不到內容，導致網站很難被搜尋到。

要解決這樣的情況，可以讓第一次的渲染 ( DOM 生成 ) 交給後端來做，後面的一樣交給 SPA，這樣也可以在很小的幅度下更改我們原先只有 SPA 的網站

這樣的做法稱為 SSR (Server Side Rendering)，從字面上很好理解

另外一個缺點，目前自己還沒有體會到，那就是在使用者快速觸發事件時，會有 Response 在非預期時間返回的狀況

簡單來說就是當使用者連續觸發三個事件，但觸發第三個事件時，第一個事件的 Response 才傳回來，所以反而結果會是第一個事件的 Response

目前還沒有想到解法，估計會在專案龐大的時候遇到

總結上列的列舉，最後要提的當然就是由於傳輸的部分都是寫在前端，所以前端架構會變得非常複雜。

